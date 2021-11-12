import { FC, Fragment, PropsWithChildren } from 'react';
import { PermissionFallback } from './Fallback';
import { Permission as Permit } from './types';
import { usePermissionContext } from './usePermissionContext';

type Props = {
  to: Permit;
  isDefaultFallback?: boolean;
  fallback?: FC;
};

/**
 * This component is meant to be used everywhere a restriction
 * based on user permission is needed
 */
export const Permission: FC<PropsWithChildren<Props>> = (props) => {
  const { to, children, isDefaultFallback, fallback } = props;

  const { isAllowedTo } = usePermissionContext();

  if (isAllowedTo(to)) {
    return <Fragment>{children}</Fragment>;
  }

  if (fallback) {
    return <Fragment>{fallback}</Fragment>;
  }

  if (isDefaultFallback) {
    return <PermissionFallback />;
  }

  return null;
};

export { usePermission } from './usePermission';
export { PermissionProvider, usePermissionContext } from './usePermissionContext';
