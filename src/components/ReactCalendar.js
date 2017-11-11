import React from "react";
require("flatpickr/dist/themes/dark.css");
import Flatpickr from 'react-flatpickr';

class ReactCalendar extends React.Component {
    render() {
        return (
            <Flatpickr />
        )
    }
}

export {ReactCalendar as default}