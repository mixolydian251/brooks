import React from 'react';
import '../styles/donation-page-grid.scss'

const DonationPage = () => (
    <div className="page-content-wrapper">
        <div><h1>Donations</h1></div>
        <div>
            <h4>We rely heavily on generosity and donations from our community.
                If you have a jacket that doesn't fit anymore, have some extra non-perishable
                food items, or are just in the giving spirit, we are always accepting donations!</h4>

            <h3>Food</h3>

            <ul>
                <li>For food donations please contact the office to arrange a drop off time.</li>
                <li>Please check food expiration dates before donating.</li>
            </ul>

            <h3>Clothing</h3>

            <ul>
                <li>Clothing donations can be dropped off in our clothing bin, located on the
                    back side of the office. Please place all items inside a tied bag.</li>
                <li>If possible, wash clothing and household items before donating.</li>
            </ul>
        </div>
    </div>
);

export {DonationPage as default}