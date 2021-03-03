import React from 'react';
import { Config } from './config/config';

export const App: React.FC<AppProps> = (props) => {
  return (
    <>
      <h2>Config:</h2>
      <pre>
        <code>{JSON.stringify(props.config, null, '  ')}</code>
      </pre>
    </>
  );
};

type AppProps = {
  config: Config;
};
