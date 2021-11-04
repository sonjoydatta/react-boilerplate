import { ParsedUrlQuery } from './types';

/**
 * Add new query params to the existing ones
 * @param {ParsedUrlQuery} query
 * @param {ParsedUrlQuery} newQuery
 * @returns {URLSearchParams}
 */
export const updateURLSearchParams = (query: ParsedUrlQuery, newQuery: ParsedUrlQuery = {}): URLSearchParams => {
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
