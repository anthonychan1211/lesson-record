import React from 'react';
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const Student = ({student}) => {
    const [value, onChange] = useState(new Date());
    return (
            <div className="student-card">
                <h3 className="student">{student.name}</h3>
                <Calendar
        onChange={onChange}
        value={value}
      />
            </div>
            


    )
}

export default Student
