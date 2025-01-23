import { compose } from '@shared/lib/compose';
import { withRouter } from './with-router';
import { withErrorBoundary } from './with-error-boundary';
import { withStore } from './with-store';

export const withProviders = compose(
  withRouter,
  withStore,
  withErrorBoundary,
); 