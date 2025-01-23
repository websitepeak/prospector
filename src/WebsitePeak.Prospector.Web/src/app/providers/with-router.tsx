import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import type { PropsWithChildren } from 'react';

export const withRouter = (Component: React.ComponentType<any>) => {
  return function WithRouter(props: PropsWithChildren<{}>) {
    return (
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Component {...props} />
        </Suspense>
      </BrowserRouter>
    );
  };
}; 