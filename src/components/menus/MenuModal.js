import React from 'react';
import ReactModal from 'react-modal';
import Menu from '../Menu'

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


const MenuModal = (props) => (

    <ReactModal
        className="menu-modal"
        isOpen={props.modalActive}
        contentLabel="mobile menu"
        onRequestClose={props.handleModal}
        style={customStyles}>
        <Menu/>
    </ReactModal>

);

export {MenuModal as default}