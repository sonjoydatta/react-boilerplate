import { FC, useContext } from 'react';
import { PermissionContext } from '.';
import { PermissionsType } from './withAuth';

type NewType = {
  children: React.ReactNode;
  fallback?: React.ReactNode;
  showFallback?: boolean;
  permission: PermissionsType;
};

type Props = NewType;

export const Permission: FC<Props> = ({ children, permission, fallback = null, showFallback = true }) => {
  const { permissions } = useContext(PermissionContext);

  if (permissions[permission]) {
    return <>{children}</>;
  }
  if (fallback && showFallback) {
    return <>{fallback}</>;
  }
  if (showFallback) {
    return (
      <div>
        <p>permission not available</p>
      </div>
    );
  }
  return null;
};
