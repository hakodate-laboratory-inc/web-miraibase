import { Calendar } from '@fullcalendar/core'
import timeGridPlugin from '@fullcalendar/timegrid'
import '@fullcalendar/core/main.css'
import '@fullcalendar/timegrid/main.css'

document.addEventListener('DOMContentLoaded', () => {
  const calendarElement = document.getElementById('gcal')

  const calendar = new Calendar(calendarElement, {
    plugins: [timeGridPlugin],
    defaultView: 'timeGridWeek',
    height: 500
  })

  calendar.render()
})
