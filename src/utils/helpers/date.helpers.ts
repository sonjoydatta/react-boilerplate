import { InitMonthType } from './types';

/**
 * Parse month name from a date
 * @param value
 * @param type
 * @returns
 */
export const getMonthName = (value: Date, type?: InitMonthType) => {
  return value.toLocaleString('en-US', { month: type || 'long' });
};
