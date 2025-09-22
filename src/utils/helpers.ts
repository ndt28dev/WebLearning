export function isUpcoming(date: Date): boolean {
  const today = new Date();

  // reset giờ về 00:00:00 để so sánh
  today.setHours(0, 0, 0, 0);
  date.setHours(0, 0, 0, 0);

  const diffMs = date.getTime() - today.getTime();
  const diffDays = diffMs / (1000 * 60 * 60 * 24);

  return diffDays > 0 && diffDays <= 15;
}
