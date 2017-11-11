import React from 'react';

const Day = (props) => {
    return(
        <div><hr/>
            <div className="row">
                <span>{props.dates[0]}</span>
                <span>{props.dates[1]}</span>
                <span>{props.dates[2]}</span>
                <span>{props.dates[3]}</span>
                <span>{props.dates[4]}</span>
                <span>{props.dates[5]}</span>
                <span>{props.dates[6]}</span>
            </div>
            <div className="row">
                <span>{props.dates[7]}</span>
                <span>{props.dates[8]}</span>
                <span>{props.dates[9]}</span>
                <span>{props.dates[10]}</span>
                <span>{props.dates[11]}</span>
                <span>{props.dates[12]}</span>
                <span style={{color: `white`, borderRadius: `50%`, backgroundColor: `#d3434b`}}>{props.dates[13]}</span>
            </div>
            <div className="row">
                <span>{props.dates[14]}</span>
                <span>{props.dates[15]}</span>
                <span>{props.dates[16]}</span>
                <span>{props.dates[17]}</span>
                <span>{props.dates[18]}</span>
                <span>{props.dates[19]}</span>
                <span>{props.dates[20]}</span>

            </div>
            <div className="row">
                <span>{props.dates[21]}</span>
                <span>{props.dates[22]}</span>
                <span>{props.dates[23]}</span>
                <span>{props.dates[24]}</span>
                <span>{props.dates[25]}</span>
                <span>{props.dates[26]}</span>
                <span style={{color: `white`, borderRadius: `50%`, backgroundColor: `#d3434b`}}>{props.dates[27]}</span>

            </div>
            <div className="row">
                <span>{props.dates[28]}</span>
                <span>{props.dates[29]}</span>
                <span>{props.dates[30]}</span>
                <span>{props.dates[31]}</span>
                <span>{props.dates[32]}</span>
                <span>{props.dates[33]}</span>
                <span>{props.dates[34]}</span>

            </div>
            {props.dates[35] && <div className="bottom">
                <span>{props.dates[35]}</span>
                <span>{props.dates[36]}</span>
                <span>{props.dates[37]}</span>
                <span>{props.dates[38]}</span>
                <span>{props.dates[39]}</span>
                <span>{props.dates[40]}</span>
                <span>{props.dates[41]}</span>
            </div>}
        </div>
    )
};

export {Day as default}