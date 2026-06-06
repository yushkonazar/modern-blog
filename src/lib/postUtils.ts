export function formatDate(createdAt: string | undefined): string {
  if (!createdAt) return "";

  // ISO 8601 (нові пости) — форматуємо з урахуванням часового поясу Kyiv
  if (createdAt.includes("T")) {
    const date = new Date(createdAt);
    if (!isNaN(date.getTime())) {
      return date.toLocaleDateString("uk-UA", { timeZone: "Europe/Kyiv" });
    }
  }

  // Legacy формат "07.06.2026, 00:14:24" — беремо лише дату
  return createdAt.split(",")[0].trim();
}

export function readingTime(content: string): string {
  const words = content.trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.round(words / 200));
  return `${minutes} хв читання`;
}
