import React from 'react'
import '../styles/invite-grid.scss'

const Invite = () => (
        <div className="invite-grid-wrapper">
            <h3 className="grid-invite-title">We would love for you to be part of our community</h3>
                <div className="grid-sunday">
                    <h3>Sunday:</h3>
                    <h4>Bible Study: 9:30am</h4>
                    <h4>Worship: 10:30am</h4>
                </div>
                <div className="grid-wednesday">
                    <h3>Wednesday:</h3>
                    <h4>Bible Study: 7:00pm</h4>
                </div>
            <p className="grid-passage">
                <i>Then the righteous will answer Him, "Lord, when did we see you hungry and feed you or
                thirsty and give you something to drink? When did we see you a stranger and invite you
                in or needing clothes and clothe you? When did we see you sick or in prison and go to
                visit you?" The king will reply, "I tell you the truth, whatever you did for one of the
                    least of these brothers of mine, you did for me" Mathew 25:44-45</i>
            </p>
        </div>
);

export {Invite as default}