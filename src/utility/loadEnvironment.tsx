import baseConfig from "../configuration/config.base";
import delhiConfig from "../configuration/config.delhicapital";
import baseEnviroment from "../environments/base.environment";
import delhiEnviroment from "../environments/delhicapital.environment";
import {CONSTANTS} from './constant'

interface Config {
    baseUrl: string;
    teamName: string;
  }
  
  interface Environment {
    environment: string;
  }

const loadEnvironment =  () => {
    const team = import.meta.env.VITE_TEAM; 
    let mergedConfig: Config;
    let mergedEnvironment: Environment;
    switch (team) {
      case CONSTANTS.team.DELHI:
        mergedConfig = { ...baseConfig, ...delhiConfig };
        mergedEnvironment = { ...baseEnviroment, ...delhiEnviroment };
        break;
      default:
        mergedConfig = { ...baseConfig };
        mergedEnvironment = { ...baseEnviroment };
    }
    return { mergedConfig, mergedEnvironment };
};

export default loadEnvironment;
