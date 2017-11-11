import React from 'react';
const moment = require('moment');

const Month = (props) => {
    const prevMonth = () => {
        props.handlePrevMonth();

    };
    const nextMonth = () => {
        props.handleNextMonth();

    };
    return(
        <div className="monthBar">
            <button onClick={prevMonth}>{'<<'}</button>
            <h4>{props.month.format("MMMM YYYY")}</h4>
            <button onClick={nextMonth}>{'>>'}</button>
        </div>
    )
};

export {Month as default}