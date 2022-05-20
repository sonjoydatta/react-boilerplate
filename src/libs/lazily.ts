import { ComponentType, lazy } from 'react';

/**
 * This is an extended version of `React.lazy`. By using this
 * function you can load multiple components as default export
 * from a single file.
 */
export const lazily = <T extends Record<string, ComponentType<unknown>>>(
	ctor: (x?: string) => Promise<T>
) => {
	const handler: ProxyHandler<T> = {
		get(_target, componentName) {
			if (typeof componentName === 'string') {
				return lazy(() =>
					ctor(componentName).then((x) => ({
						default: x[componentName],
					}))
				);
			}

			return null;
		},
	};

	return new Proxy({} as unknown as T, handler);
};
