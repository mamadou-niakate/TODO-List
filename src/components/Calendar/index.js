import React from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment)
function TasksCalendar({tasks}) {
    return (
        <div style={{margin:'auto',padding:'auto',height:'80%',width:"90%"}}>
            <Calendar 
                localizer={localizer}
                events={tasks}
                startAccessor="start"
                endAccessor="end"
            />
        </div>
    )
}

export default TasksCalendar
