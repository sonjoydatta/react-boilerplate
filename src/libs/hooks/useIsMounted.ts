import { useCallback, useEffect, useRef } from 'react';

/**
 * This hook returns a boolean value that indicates whether
 * the component is mounted. It is used to avoid calling
 * `setState` on an unmounted component.
 */
export const useIsMounted = () => {
  const isMountedRef = useRef(false);

  useEffect(() => {
    isMountedRef.current = true;

    return () => {
      isMountedRef.current = false;
    };
  }, []);

  const isMounted = useCallback(() => {
    if (!isMountedRef.current) {
      throw new Error('useIsMounted is not mounted');
    }

    return isMountedRef.current;
  }, []);

  return isMounted;
};
