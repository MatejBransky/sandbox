export function initConfig(env: EnvVariables): Config {
  return {
    apiUrl: env.API_URL,
  };
}

type EnvVariables = {
  API_URL: string;
};

export type Config = {
  apiUrl: string;
};
