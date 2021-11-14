import { FC } from 'react';

export type Permission = string;

export type AccessContextType = {
  isAllowedTo: (permission: Permission) => boolean;
};

export type AccessProviderProps = {
  children: React.ReactNode;
  permissions: Permission[];
};

export type AccessBoundaryProps = {
  to: Permission;
  isDefaultFallback?: boolean;
  fallback?: FC;
};
