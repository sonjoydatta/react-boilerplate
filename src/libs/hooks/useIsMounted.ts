import { useCallback, useEffect, useRef } from 'react';

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
