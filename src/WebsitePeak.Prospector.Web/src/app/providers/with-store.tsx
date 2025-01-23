import { Provider } from 'react-redux';
import { store } from '../store';
import type { PropsWithChildren } from 'react';

export const withStore = (Component: React.ComponentType<any>) => {
  return function WithStore(props: PropsWithChildren<{}>) {
    return (
      <Provider store={store}>
        <Component {...props} />
      </Provider>
    );
  };
}; 