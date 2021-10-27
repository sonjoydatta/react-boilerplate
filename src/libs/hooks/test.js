import { useCallback, useEffect, useRef, useState } from 'react';
/**
 *
 * @param {() => void} submitfn
 * @returns
 *
 */
export const useSubmitAPI = (submitFn, onCallback) => {
  const isMounted = useRef(true);
  useEffect(
    () => () => {
      isMounted.current = false;
    },
    [isMounted],
  );

  const [isLoading, setIsLoading] = useState(false);

  const submit = useCallback(
    (...args) => {
      setIsLoading(true);
      submitFn(...args)
        .then((data) => {
          if (isMounted.current) {
            onCallback(data);
          }
        })
        .catch((e) => {
          if (isMounted.current) {
            onCallback(e);
          }
        })
        .finally(() => {
          if (isMounted.current) {
            setIsLoading(false);
          }
        });
    },
    [submitFn, onCallback],
  );

  return {
    submit,
    isLoading,
  };
};
