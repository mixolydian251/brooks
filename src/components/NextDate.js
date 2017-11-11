import React from 'react'

class NextDate extends React.Component{
    state = {
      date: 'November 11th 2017'
    };
    render() {
        return (
            <div className="nextDate">
                <h4>Next open date:</h4>
                <div className="date">
                    <h2>{this.state.date}</h2>
                    <h3>9AM-12PM</h3>
                </div>
            </div>
            )
    }
}

export {NextDate as default}