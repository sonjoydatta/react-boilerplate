import { useCallback, useEffect, useRef } from 'react';

/**
 * This hook returns a boolean value that indicates whether
 * the component is mounted. It is used to avoid calling
 * `setState` on an unmounted component.
 */
export const useMounted = () => {
	const isMountedRef = useRef(true);

	useEffect(
		() => () => {
			isMountedRef.current = false;
		},
		[]
	);

	const isMounted = useCallback(() => isMountedRef.current, []);

	return isMounted;
};
