import { FC, Fragment, PropsWithChildren } from 'react';
import { AccessFallback } from './AccessFallback';
import { AccessBoundaryProps } from './types';
import { useAccessContext } from './useAccessContext';

/**
 * This component is meant to be used everywhere a restriction
 * based on user permission is needed
 */
export const AccessBoundary: FC<PropsWithChildren<AccessBoundaryProps>> = (props) => {
  const { to, children, isDefaultFallback, fallback } = props;

  const { isAllowedTo } = useAccessContext();

  if (isAllowedTo(to)) {
    return <Fragment>{children}</Fragment>;
  }

  if (fallback) {
    return <Fragment>{fallback}</Fragment>;
  }

  if (isDefaultFallback) {
    return <AccessFallback />;
  }

  return null;
};
