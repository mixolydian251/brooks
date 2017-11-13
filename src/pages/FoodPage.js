import React from 'react';

const FoodPage = () => (
    <div className="page-content-wrapper">
        <div><h1>Food Pantry</h1></div>
        <div>
            <h3>Guidelines</h3>
            <ul>
                <li>The food pantry is only open on the days listed on the calendar
                    from 9am - 11:30am.</li>

                <li>Every household must register with our staff to be served. You must
                    re-register in January (or first time) of each year.</li>

                <li><b><u>Households can only come once per month.</u></b></li>

                <li>A picture ID is required for registration. You must show and ID
                    (Birth Certificate, passport, school or work ID, letter from
                    social services, etc..) for <u>every</u> member of the family
                    within <u>30 days of your first visit</u>. If not, additional
                    members will be removed from enrollment.</li>

                <li>The household being served must have a member present. You may
                    not pick up food for other households without prior approval,
                    from the ministry leader.</li>

                <li>Once you are registered for food, you must remain in the room until
                    your number is called. If you are not present when your number is called,
                    you will not be served.</li>

                <li>There is no smoking allowed in the facility or on the grounds.</li>

                <li>We offer guidelines on how to stretch a budget, as well as occasionally
                    providing cooking demos to teach you how to prepare the food you receive.</li>

                <li>We offer a nutrition focused cookbook, available to purchase for $1.00</li>

                <li>Please be mindful of children/families. Act and speak in a way that sets a good
                    example for those around you.</li>

                <li>Thank you for your cooperation!</li>
            </ul>
        </div>
    </div>
);

export {FoodPage as default}