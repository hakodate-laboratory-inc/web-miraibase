import { Calendar } from '@fullcalendar/core'
import timeGridPlugin from '@fullcalendar/timegrid'

document.addEventListener('DOMContentLoaded', () => {
  const calendarElement = document.getElementById('gcal')

  let calendar = new Calendar(calendarElement, {
    plugins: [timeGridPlugin],
    defaultView: 'timeGridWeek'
  })

  console.log(calendar)
  calendar.rendar()
})
