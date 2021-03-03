import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { getEnvVariables } from './config/env';
import { initConfig } from './config/config';

async function main() {
  try {
    const env = await getEnvVariables();

    const config = initConfig(env);

    ReactDOM.render(
      <React.StrictMode>
        <h2>Env Variables:</h2>
        <pre>
          <code>{JSON.stringify(env, null, '  ')}</code>
        </pre>

        <App config={config} />
      </React.StrictMode>,
      document.getElementById('root')
    );
  } catch (e) {
    console.error(e);
    console.error('The application was terminated due to an error above.');
  }
}

main();
