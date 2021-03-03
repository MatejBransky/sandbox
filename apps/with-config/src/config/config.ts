import type { EnvVariables } from './env';

/**
 * Resolves config based on env variables
 */
export function initConfig(env: EnvVariables): Config {
  return {
    apiUrl: env.API_URL,
  };
}

export type Config = {
  apiUrl: string;
};
