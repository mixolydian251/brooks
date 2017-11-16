import React from 'react';

const ContactPage = () => (
    <div className="page-content-wrapper">
        <div><h1>Contact</h1></div>
        <div className="contact">
            <h2>Address</h2>
            <h3>Located at 700 Brooks Avenue, Raleigh, North Carolina</h3>
            <p>(The office is located in the small building in the parking lot of the church)</p>
            <h2>Office Hours</h2>
            <h3>9am - 4pm</h3>
            <p>(Monday - Friday)</p>
            <h2>Phone Number</h2>
            <a href="tel:9198212400"><h3>(919)-821-2400</h3></a>
        </div>
    </div>
);

export {ContactPage as default}

