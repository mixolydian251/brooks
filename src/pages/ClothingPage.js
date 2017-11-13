import React from 'react';
import '../styles/clothing-page-grid.scss'


const ClothingPage = () => (
    <div className="clothing-page-wrapper">

        <div className="grid-title"><h1>Clothing Closet</h1></div>

        <div className="grid-guidelines">
            <h3>Guidelines</h3>
            <ul>
                <li>The clothing closet is open from 9am - 11:30pm on the days scheduled.</li>

                <li>Please register or sign in with the staff upon arrival.
                    (We have a separate registration from the food pantry.)</li>

                <li><u><b>Families may come a maximum of one Saturday each month.</b></u></li>

                <li>Due to limited supplies we ask families to only use the clothing closet
                    a maximum of 8 months out of the year</li>

                <li>We have limited space, so we allow only 8 people to shop at a time. When
                    there is a line, please limit your shopping time to 15 minutes.</li>

                <li>Keep children with you at all times.</li>

                <li>Respect those around you and be a good example to others.</li>
            </ul>
        </div>

        <div className="grid-men">
            <h3>Men</h3>
            <p>3 shirts</p>
            <p>1 pair of pants (while supplies are limited)</p>
        </div>

        <div className="grid-women">
            <h3>Women</h3>
            <p>3 shirts</p>
            <p>3 pairs of pants</p>
        </div>

        <div className="grid-children">
            <h3>Children</h3>
            <p>3 shirts</p>
            <p>3 pairs of pants</p>
        </div>

        <div className="grid-miscellaneous">
            <h3>Household & Toiletries</h3>
            <p>Maximum 2 household items per family.</p>
            <p>1 pair of socks</p>
            <p>1 pair of underwear</p>
            <p>3 toiletry items (soap, razors, toothpaste etc.)</p>
        </div>

        <div className="grid-limited-items">
            <h3>Limited Items</h3>
            <p><b>Due to very limited availability, please ask our staff for assistance
                with shoes and coats.</b></p>
            <p>2 pairs of shoes per year</p>
            <p>1 winter coat per year</p>
        </div>

    </div>
);

export {ClothingPage as default}