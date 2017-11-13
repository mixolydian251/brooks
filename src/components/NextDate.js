import React from 'react'

class NextDate extends React.Component{
    state = {
      date: 'December 9th 2017'
    };
    render() {
        return (
            <div className="nextDate">
                <div>
                    <h4>Next open date:</h4>
                </div>
                <div className="date">
                    <h2>{this.state.date}</h2>
                    <h3>9am - 11:30am</h3>
                </div>
            </div>
            )
    }
}

export {NextDate as default}