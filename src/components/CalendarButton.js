import React from 'react'
const calendarSvg = require('../img/calendar.svg');

const CalendarButton = (props) => (
    <div className="columnBox">
        <h4>Click to see all dates</h4>
        <img className="calendarSvg" src={calendarSvg} />
    </div>
);

export {CalendarButton as default}