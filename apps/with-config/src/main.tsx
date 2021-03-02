import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { initConfig } from './config';

async function main() {
  try {
    /**
     * Simulates environment variables
     * which are accessible within the runtime
     */
    const env = await fetch('/env.json')
      .then((response) => response.json())
      .catch(() => {
        throw new Error('The required file "/env.json" is missing.');
      });

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
