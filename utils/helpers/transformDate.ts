import { parseISO, format } from 'date-fns';

export const transformDate = date => {
  const newDate = parseISO(date);
  return format(newDate, 'dd/MM/yyyy');
};
