import React from 'react'
import { NavLink } from 'react-router-dom'
const menu = require('../../img/menu.svg');


class MobileMenu extends React.Component{
    state = {
        menuActive: false
    };
    handleMenu = () => {
        if (this.state.menuActive === true){
            const element = document.querySelector('.mobile-menu-active');
            element.className -= 'mobile-menu-active';
            element.className += ' mobile-menu';
            setTimeout(() => {
                this.setState((prevState) => ({menuActive: !prevState.menuActive}))
            }, 170)
        } else{
            this.setState((prevState) => ({menuActive: !prevState.menuActive}))
        }


    };
    render(){
        return (
            <div>
                <div className="mobile-menu-button">
                    <button onClick={this.handleMenu}>
                        <img src={menu}/>
                        <p>MENU</p>
                    </button>
                </div>
                {this.state.menuActive && <MobileMenuOptions handleMenu={this.handleMenu}/>}
            </div>
        )
    }
}

class MobileMenuOptions extends React.Component{
    componentDidMount = () => {
        const element = document.querySelector('.mobile-menu');
        setTimeout(() => {
            element.className += ' mobile-menu-active';
        }, 1)
    };
    render() {
        return(
            <div className="mobile-menu">
                <NavLink to="/" exact={true} onClick={this.props.handleMenu} className="menuOption" activeClassName="is-active">Home</NavLink><hr/>
                <NavLink to="/about" onClick={this.props.handleMenu} className="menuOption" activeClassName="is-active">About</NavLink><hr/>
                <NavLink to="/food" onClick={this.props.handleMenu} className="menuOption" activeClassName="is-active">Food</NavLink><hr/>
                <NavLink to="/clothing" onClick={this.props.handleMenu} className="menuOption" activeClassName="is-active">Clothing</NavLink><hr/>
                <NavLink to="/donations" onClick={this.props.handleMenu} className="menuOption" activeClassName="is-active">Donations</NavLink><hr/>
                <NavLink to="/volunteer" onClick={this.props.handleMenu} className="menuOption" activeClassName="is-active">Volunteer</NavLink><hr/>
                <NavLink to="/contact" onClick={this.props.handleMenu} className="menuOption" activeClassName="is-active">Contact</NavLink>
            </div>
        )
    }


}


export {MobileMenu as default}
