/* eslint-disable react-hooks/rules-of-hooks */
import { ComponentType, createContext, Dispatch, SetStateAction } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useStoreSelector } from 'store';

export type PermissionsType = 'READ_USERS' | 'EDIT_USERS' | 'DELETE_USERS';

export const PermissionContext = createContext<{
  permissions: Record<PermissionsType, boolean>;
  setPermissions: Dispatch<SetStateAction<Record<PermissionsType, boolean>>>;
}>({
  permissions: {
    READ_USERS: false,
    EDIT_USERS: false,
    DELETE_USERS: false,
  },
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setPermissions: () => {},
});

export const withAuth = <T extends object>(WrappedComponent: ComponentType<T>) => {
  const hocComponent = (props: T) => {
    const location = useLocation();
    const { isAuthenticated } = useStoreSelector((state) => state.auth);
    // const [permissions, setPermissions] = useState({
    //   READ_USERS: false,
    //   EDIT_USERS: false,
    //   DELETE_USERS: false,
    // });

    if (!isAuthenticated) {
      return <Navigate to="/" state={{ from: location }} />;
    }

    return <WrappedComponent {...props} />;
  };

  return hocComponent;
};
