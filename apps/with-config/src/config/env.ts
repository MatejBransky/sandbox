/**
 * Loads `/env.json` during runtime so
 * you can access env variables within deployment phase
 *
 * See [this diagram](https://raw.githubusercontent.com/MatejBransky/sandbox/main/apps/with-config/flow.svg)
 */
export const getEnvVariables = async () =>
  await fetch('/env.json')
    .then<EnvVariables>((response) => response.json())
    .catch(() => {
      throw new Error('The required file "/env.json" is missing.');
    });

export type EnvVariables = {
  API_URL: string;
};
