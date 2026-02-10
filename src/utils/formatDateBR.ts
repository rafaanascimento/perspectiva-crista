export const formatDateBR = (dateString: string) => {
  const date = new Date(dateString);

  // Fallback defensivo para datas inválidas
  if (Number.isNaN(date.getTime())) {
    return dateString;
  }

  return new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(date);
};
