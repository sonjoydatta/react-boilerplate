import { ParsedUrlQuery } from './types';

/**
 * You can use this function to add or update URL
 * query parameters. It will merge them with existing
 * parameters and return new `URLSearchParams` object.
 */
export const updateURLSearchParams = (
	query: ParsedUrlQuery,
	newQuery: ParsedUrlQuery = {}
): URLSearchParams => {
	const params = new URLSearchParams();

	const updateParams = (key: string, value: ParsedUrlQuery['key']) => {
		if (Array.isArray(value)) {
			value.map((e) => params.append(key, e));
		} else if (value) {
			params.set(key, value);
		} else {
			params.delete(key);
		}
	};

	for (const [key, value] of Object.entries(query)) {
		updateParams(key, value);
	}

	for (const [key, value] of Object.entries(newQuery)) {
		updateParams(key, value);
	}

	return params;
};
