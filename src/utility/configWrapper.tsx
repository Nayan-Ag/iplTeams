import { useEffect, useState, ReactNode } from "react";
import loadEnvironment from "./loadEnvironment";
import { ConfigContext } from "./configContext";

type ConfigWrapperProps = {
  children: ReactNode;
};

const ConfigWrapper = ({ children }: ConfigWrapperProps) => {
  const team = import.meta.env.VITE_TEAM || "default";
  const [config, setConfig] = useState<Record<string, any> | null>(null);
  const [environment, setEnvironment] = useState<Record<string, any> | null>(
    null
  );
  const [cssLoaded, setCssLoaded] = useState(false);

  const assetBasePath = `/assets/${team}`;

  useEffect(() => {
    const { mergedConfig, mergedEnvironment } = loadEnvironment();
    setConfig(mergedConfig);
    setEnvironment(mergedEnvironment);

    const loadCSS = (href: string, id: string): Promise<void> => {
      return new Promise((resolve, reject) => {
        if (document.getElementById(id)) {
          resolve();
          return;
        }

        const link = document.createElement("link");
        link.id = id;
        link.rel = "stylesheet";
        link.href = href;
        link.onload = () => resolve();
        link.onerror = () => reject(new Error(`Failed to load ${href}`));
        document.head.appendChild(link);
      });
    };

    Promise.all([
      loadCSS("/assets/css/base.css", "base-css"),
      loadCSS(`/assets/css/${team}.css`, "team-css"),
    ])
      .then(() => setCssLoaded(true))
      .catch((error) => {
        console.error("CSS loading error:", error);
      });

    return () => {
      ["base-css", "team-css"].forEach((id) => {
        const link = document.getElementById(id);
        if (link) document.head.removeChild(link);
      });
    };
  }, [team]);

  if (!config || !environment || !cssLoaded) {
    return <div className="config-loading">Loading configurations...</div>;
  }
  console.log(assetBasePath);
  return (
    <ConfigContext.Provider value={{ config, environment, assetBasePath }}>
      {children}
    </ConfigContext.Provider>
  );
};

export default ConfigWrapper;
