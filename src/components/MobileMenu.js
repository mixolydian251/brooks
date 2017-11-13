import React from 'react'
import { NavLink } from 'react-router-dom'
import MenuModal from './menus/MenuModal'
const menu = require('../img/menu.svg');


class MobileMenu extends React.Component{
    state = {
        modalActive: false
    };
    handleModal = () => {
        this.setState((prevState) => ({modalActive: !prevState.modalActive}))
    };
    render(){
        return (
            <div>

                <div className="mobile-menu">
                    <button onClick={this.handleModal}>
                        <img src={menu}/>
                        <p>MENU</p>
                    </button>
                </div>

                {this.state.modalActive && <MenuModal
                    handleModal={this.handleModal}
                    modalActive={this.state.modalActive}/>}
            </div>
        )
    }
}
export {MobileMenu as default}
