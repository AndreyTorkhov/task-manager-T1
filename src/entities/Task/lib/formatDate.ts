/**
 * Форматирует строку даты в читаемый вид для ru-RU
 * @param {string | undefined} dateString - Дата в ISO формате
 * @returns {string} Отформатированная строка даты и времени
 */
export const formatDate = (dateString?: string): string => {
  if (!dateString) return "Неизвестно";

  const date = new Date(dateString);
  if (isNaN(date.getTime())) return "Неизвестно";

  return (
    date.toLocaleDateString("ru-RU") +
    " " +
    date.toLocaleTimeString("ru-RU", {
      hour: "2-digit",
      minute: "2-digit",
    })
  );
};
