import { useHistory } from 'react-router';
import { ParsedUrlQuery } from './types';

/**
 * React history push any URL
 * @param url
 */
export const RouterPush = (url: string) => {
  const history = useHistory();

  if (typeof window !== undefined) {
    history.push(url);
  }
};

/**
 * Update URL search params with existing params
 * @param query
 * @param newQuery
 * @returns
 */
export const updateURLSearchParams = (query: ParsedUrlQuery, newQuery = {} as ParsedUrlQuery): URLSearchParams => {
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
