export const dateStringToDate = (dateString: string) => {
  const dateStringTimestamp = Date.parse(dateString);
  const date = new Date(dateStringTimestamp);
  date.setHours(0, 0, 0, 0);
  return !isNaN(dateStringTimestamp) ? date : null;
};

export const formatDate = (date: Date | null) =>
  date && date instanceof Date
    ? date
        .toLocaleDateString('nb-NO', {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit'
        })
        .split('/')
        .join('.')
    : '';

export const formatDateTime = (date: Date | null) =>
  date && date instanceof Date
    ? `${date
        .toLocaleDateString('nb-NO', {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit'
        })
        .split('/')
        .join('.')} kl${date.toLocaleTimeString('nb-NO', {
        hour: '2-digit',
        minute: '2-digit'
      })}`
    : '';
