import { createContext, FC, PropsWithChildren, useContext } from 'react';
import { PermissionContextType, PermissionProviderProps } from './types';

const defaultValue = {
  isAllowedTo: () => false,
};

/**
 * Default behaviour for the Permission Provider Context
 * i.e. if for whatever reason the consumer is used outside of a provider.
 * The permission will not be granted unless a provider says otherwise
 */
const PermissionContext = createContext<PermissionContextType>(defaultValue);

/**
 * This provider is intended to be surrounding the whole application.
 * It should receive the users permissions as parameter
 */
export const PermissionProvider: FC<PropsWithChildren<PermissionProviderProps>> = ({ permissions, children }) => {
  const isAllowedTo = (permission: string) => permissions.includes(permission);

  return <PermissionContext.Provider value={{ isAllowedTo: isAllowedTo }}>{children}</PermissionContext.Provider>;
};

export const usePermissionContext = () => useContext(PermissionContext);
