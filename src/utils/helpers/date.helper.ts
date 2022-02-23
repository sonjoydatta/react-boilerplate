import { InitMonthType } from './types';

/**
 * You can use this function to get the current month
 * name in the current locale.
 */
export const getMonthName = (value: Date, type?: InitMonthType) => {
  return value.toLocaleString('default', { month: type || 'long' });
};

export const timer = (date: Date) => {
  const format = (val: number) => (val < 10 ? `0${val}` : val);

  const hr = format(date.getHours());
  const min = format(date.getMinutes());
  const sec = format(date.getSeconds());
  const milliSec = date.getMilliseconds();
  return `${hr}:${min}:${sec}.${milliSec}`;
};
