import { InitMonthType } from './types';

/**
 * Get the month from a date
 * @param value
 * @param type
 * @returns
 */
export const getMonthName = (value: Date, type?: InitMonthType) => {
  return value.toLocaleString('default', { month: type || 'long' });
};
