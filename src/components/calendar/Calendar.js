import React from 'react';
import Day from './Day';
import DayLabels from './DayLabel'
import Month from './Month'
const moment = require('moment');

class Calendar extends React.Component {
    state = {
        month:  moment(),
        dates: []
    };
    handleNextMonth = () => {
        this.setState((prevState) => ({
                month: moment(prevState.month).add(1, 'M')
            })
        );
        this.fillDates();
    };
    handlePrevMonth = () => {
        this.setState((prevState) => ({
                month: moment(prevState.month).subtract(1, 'M')
            })
        );
        this.fillDates();
    };
    fillDates = () => {
        setTimeout(() => {
            let LeadingSpaces = Number(moment(moment(this.state.month).format('YYYY-MM-01')).format("d"));
            let remainingSpaces = 49 - LeadingSpaces - this.state.month.daysInMonth();
            let dates = [];

            for(let i=0; i < LeadingSpaces; i++){
                dates.push(undefined)
            }
            for (let i=1; i < this.state.month.daysInMonth() + 1; i++){
                dates.push(i)
            }
            for(let i=0; i < remainingSpaces; i++){
                dates.push(undefined)
            }
            this.setState(() => ({dates: dates}))
        }, 1);
    };
    componentDidMount = () => {
        this.fillDates();
    };
    render(){
        return(
            <div className="calendar">
                <Month  month={this.state.month}
                        handleNextMonth={this.handleNextMonth}
                        handlePrevMonth={this.handlePrevMonth}
                        fillDates={this.fillDates}/>
                <div className="calendarInside">
                    <DayLabels/>
                    <Day fillDates={this.fillDates} dates={this.state.dates} month={this.state.month.format("M")}/>
                </div>
            </div>
        )
    }
}

export {Calendar as default}