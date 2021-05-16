const formatDate = (date: string | number | Date) => {
  return new Intl.DateTimeFormat('pt-br').format(new Date(date));
};

export default formatDate;
