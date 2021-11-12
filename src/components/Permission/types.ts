export type Permission = string;

export type PermissionContextType = {
  isAllowedTo: (permission: Permission) => boolean;
};

export type PermissionProviderProps = {
  children: React.ReactNode;
  permissions: Permission[];
};
