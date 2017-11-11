import React from 'react';
import ReactModal from 'react-modal';
import Calendar from './Calendar'

const customStyles = {
    overlay : {
        display           : `flex`,
        justifyContent    : `center`,
        alignItems        : `flex-start`,
        position          : 'fixed',
        paddingTop         : '40px',
        top               : 0,
        left              : 0,
        right             : 0,
        bottom            : 0,
        backgroundColor   : 'rgba(86, 86, 86, 0.7)'
    }
};


const CalendarModal = (props) => (

    <ReactModal
        className="modal"
        isOpen={props.modalActive}
        contentLabel="Where you should eat"
        onRequestClose={props.handleCalendarModal}
        style={customStyles}>
        <Calendar/>
        <button onClick={props.handleCalendarModal}
                style={{marginBottom: '10px', marginTop: `10px`}}>
            Close</button>
    </ReactModal>

);

export {CalendarModal as default}