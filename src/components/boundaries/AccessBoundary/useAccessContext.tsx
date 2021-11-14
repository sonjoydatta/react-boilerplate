import { createContext, FC, PropsWithChildren, useContext } from 'react';
import { AccessContextType, AccessProviderProps } from './types';

const defaultValue = {
  isAllowedTo: () => false,
};

/**
 * Default behaviour for the Access Provider Context
 * i.e. if for whatever reason the consumer is used outside of a provider.
 * The permission will not be granted unless a provider says otherwise
 */
const AccessContext = createContext<AccessContextType>(defaultValue);

/**
 * This provider is intended to be surrounding the whole application.
 * It should receive the users permissions as parameter
 */
export const AccessProvider: FC<PropsWithChildren<AccessProviderProps>> = ({ permissions, children }) => {
  const isAllowedTo = (permission: string) => permissions.includes(permission);

  return <AccessContext.Provider value={{ isAllowedTo: isAllowedTo }}>{children}</AccessContext.Provider>;
};

export const useAccessContext = () => useContext(AccessContext);
