const GOOGLE_CALENDAR_BASE = 'https://calendar.google.com/calendar/render'

export function buildGoogleCalendarUrl({
  title,
  services = [],
  address,
  calendarStart,
  calendarEnd,
  timezone = 'America/New_York',
}) {
  const details = [
    ...services.map((service) => `• ${service}`),
    '',
    'Free community health screening — no insurance required.',
  ].join('\n')

  const params = new URLSearchParams({
    action: 'TEMPLATE',
    text: title,
    details,
    location: address,
    ctz: timezone,
  })

  return `${GOOGLE_CALENDAR_BASE}?${params.toString()}&dates=${calendarStart}/${calendarEnd}`
}
