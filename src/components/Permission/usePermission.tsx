import { useStoreSelector } from '@/store';
import { Permission } from './types';

/**
 * This hook to check if the user has a specific permission or not.
 * If the user has the permission, the function returns true.
 * Otherwise, it returns false.
 */
export const usePermission = () => {
  const { permissions } = useStoreSelector((state) => state.auth);

  const isAllowedTo = (permission: Permission) => permissions.includes(permission);

  return isAllowedTo;
};
