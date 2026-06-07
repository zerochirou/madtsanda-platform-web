const INDONESIAN_MONTHS = [
  "Jan", "Feb", "Mar", "Apr", "Mei", "Jun",
  "Jul", "Agu", "Sep", "Okt", "Nov", "Des"
];

const INDONESIAN_MONTHS_LONG = [
  "Januari", "Februari", "Maret", "April", "Mei", "Juni",
  "Juli", "Agustus", "September", "Oktober", "November", "Desember"
];

/**
 * Deterministic date formatter using UTC to prevent timezone and locale hydration mismatches.
 */
export function formatDateUTC(
  dateInput: Date | string | number,
  formatType: "short" | "long" | "numeric" = "numeric"
): string {
  const date = new Date(dateInput);
  if (isNaN(date.getTime())) return "-";

  const day = date.getUTCDate();
  const year = date.getUTCFullYear();
  const monthIdx = date.getUTCMonth();

  if (formatType === "numeric") {
    const dayStr = String(day).padStart(2, "0");
    const monthStr = String(monthIdx + 1).padStart(2, "0");
    return `${dayStr}/${monthStr}/${year}`;
  } else if (formatType === "short") {
    const monthName = INDONESIAN_MONTHS[monthIdx];
    return `${day} ${monthName} ${year}`;
  } else {
    const monthName = INDONESIAN_MONTHS_LONG[monthIdx];
    return `${day} ${monthName} ${year}`;
  }
}

export const formatReadableDate = (
  dateInput: Date | string | number,
): string => {
  const date = new Date(dateInput)
  const now = new Date()
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000)
  const diffInDays = Math.floor(diffInSeconds / 86400)

  if (diffInDays < 1) {
    const rtf = new Intl.RelativeTimeFormat('id', { numeric: 'auto' })

    if (diffInSeconds < 60) return rtf.format(-diffInSeconds, 'second')

    const diffInMinutes = Math.floor(diffInSeconds / 60)
    if (diffInMinutes < 60) return rtf.format(-diffInMinutes, 'minute')

    const diffInHours = Math.floor(diffInMinutes / 60)
    return rtf.format(-diffInHours, 'hour')
  }

  if (diffInDays < 7) {
    if (diffInDays === 1) return 'Kemarin'

    return new Intl.DateTimeFormat('id', { weekday: 'long' }).format(date)
  }

  return new Intl.DateTimeFormat('id', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  }).format(date)
}