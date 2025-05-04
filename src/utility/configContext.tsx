import { createContext, useContext } from 'react';

export const ConfigContext = createContext<{
  config: Record<string, any>;
  environment: Record<string, any>;
  assetBasePath?: string;
} | null>(null);

export const useConfig = () => {
  const context = useContext(ConfigContext);
  if (!context) {
    throw new Error('useConfig must be used within a ConfigProvider');
  }
  return context;
};
