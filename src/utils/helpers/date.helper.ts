import { InitMonthType } from './types';

/**
 * You can use this function to get the current month
 * name in the current locale.
 */
export const getMonthName = (value: Date, type?: InitMonthType) => {
  return value.toLocaleString('default', { month: type || 'long' });
};
