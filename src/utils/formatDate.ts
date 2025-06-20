export const formatDate = (date: Date | string | undefined): string => {
  if (!date) return '';
  const d = new Date(date);
  return d
    .toLocaleDateString('en-US', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    })
    .replace(/(\d{2}) (\w+) (\d{4})/, '$1, $2 $3');
};
