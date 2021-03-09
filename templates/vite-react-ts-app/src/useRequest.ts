import { useEffect, useState } from 'react';

export const useRequest = <R = unknown, E = Error>(url: string) => {
  const [state, setState] = useState<RequestState<R, E>>({ status: 'idle' });

  useEffect(() => {
    setState({ status: 'pending' });
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setState({ status: 'success', data });
      })
      .catch((error) => {
        setState({ status: 'error', error });
      });
  }, [url]);

  return state;
};

type RequestState<R = unknown, E = Error> = {
  status: 'idle' | 'pending' | 'success' | 'error';
  data?: R;
  error?: E;
};
