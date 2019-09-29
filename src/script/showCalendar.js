import { Calendar } from '@fullcalendar/core'
import timeGridPlugin from '@fullcalendar/timegrid'
import googleCalendarPlugin from '@fullcalendar/google-calendar'
import '@fullcalendar/core/main.css'
import jpLocale from '@fullcalendar/core/locales/ja'

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
    locale: jpLocale,
    slotLabelFormat: {
      hour: 'numeric',
      minute: '2-digit'
    },
    allDayText: '営業\n状態',
    datesRender: () => {
      const fcDayHeader = document.getElementsByClassName('fc-day-header')
      for (let i = 0; i < fcDayHeader.length; i++) {
        const _dayNumber = /(\d+)日/gi.exec(fcDayHeader[i].innerText)
        fcDayHeader[i].innerText = _dayNumber
          ? _dayNumber.pop()
          : fcDayHeader[i].innerText
      }
    },
    nowIndicator: true
  })

  calendar.render()
})
