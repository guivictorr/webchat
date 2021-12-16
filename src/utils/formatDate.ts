const formatDate = (date: string | number | Date) => {
  return new Intl.DateTimeFormat('pt-br', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  }).format(new Date(date));
};

export default formatDate;
