import React from 'react';

const Day = (props) => {
    return(
        <div><hr/>
            <div className="row">
                <div className="day-block">{props.dates[0]}</div>
                <div className="day-block">{props.dates[1]}</div>
                <div className="day-block">{props.dates[2]}</div>
                <div className="day-block">{props.dates[3]}</div>
                <div className="day-block">{props.dates[4]}</div>
                <div className="day-block">{props.dates[5]}</div>
                <div className="day-block">{props.dates[6]}</div>
            </div>
            <div className="row">
                <div className="day-block">{props.dates[7]}</div>
                <div className="day-block">{props.dates[8]}</div>
                <div className="day-block">{props.dates[9]}</div>
                <div className="day-block">{props.dates[10]}</div>
                <div className="day-block">{props.dates[11]}</div>
                <div className="day-block">{props.dates[12]}</div>
                <div className="day-block"><div className="circled-date">{props.dates[13]}</div></div>
            </div>
            <div className="row">
                <div className="day-block">{props.dates[14]}</div>
                <div className="day-block">{props.dates[15]}</div>
                <div className="day-block">{props.dates[16]}</div>
                <div className="day-block">{props.dates[17]}</div>
                <div className="day-block">{props.dates[18]}</div>
                <div className="day-block">{props.dates[19]}</div>
                <div className="day-block">{props.dates[20]}</div>

            </div>
            <div className="row">
                <div className="day-block">{props.dates[21]}</div>
                <div className="day-block">{props.dates[22]}</div>
                <div className="day-block">{props.dates[23]}</div>
                <div className="day-block">{props.dates[24]}</div>
                <div className="day-block">{props.dates[25]}</div>
                <div className="day-block">{props.dates[26]}</div>
                <div className="day-block"><div className={(props.month === '11' || props.month === '12') ? ' ' : 'circled-date'}>{props.dates[27]}</div></div>

            </div>
            <div className="row">
                <div className="day-block">{props.dates[28]}</div>
                <div className="day-block">{props.dates[29]}</div>
                <div className="day-block">{props.dates[30]}</div>
                <div className="day-block">{props.dates[31]}</div>
                <div className="day-block">{props.dates[32]}</div>
                <div className="day-block">{props.dates[33]}</div>
                <div className="day-block">{props.dates[34]}</div>

            </div>
            {props.dates[35] && <div className="bottom">
                <div className="day-block">{props.dates[35]}</div>
                <div className="day-block">{props.dates[36]}</div>
                <div className="day-block">{props.dates[37]}</div>
                <div className="day-block">{props.dates[38]}</div>
                <div className="day-block">{props.dates[39]}</div>
                <div className="day-block">{props.dates[40]}</div>
                <div className="day-block">{props.dates[41]}</div>
            </div>}
        </div>
    )
};

export {Day as default}