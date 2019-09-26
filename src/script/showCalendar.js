import { Calendar } from '@fullcalendar/core'
import timeGridPlugin from '@fullcalendar/timegrid'
import googleCalendarPlugin from '@fullcalendar/google-calendar'
import '@fullcalendar/core/main.css'
import jpLocate from '@fullcalendar/core/locales/ja'

document.addEventListener('DOMContentLoaded', () => {
  const calendarElement = document.getElementById('gcal')

  const calendar = new Calendar(calendarElement, {
    plugins: [timeGridPlugin, googleCalendarPlugin],
    defaultView: 'timeGridWeek',
    height: 500,
    googleCalendarApiKey: 'AIzaSyBB7eXTLFmD4iCU7roC--Eoem5h8ZYQuZg',
    events: {
      googleCalendarId: 'pmhd53aqkpdoqtd1qtj5kluo64@group.calendar.google.com'
    },
    titleFormat: {
      month: 'short'
    },
    columnHeaderFormat: {
      day: 'numeric'
    },
    eventTimeFormat: {
      hour: 'numeric',
      minute: 'numeric',
      hour12: false
    },
    locale: jpLocate
  })

  calendar.render()
})
