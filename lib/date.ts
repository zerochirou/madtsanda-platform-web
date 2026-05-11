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