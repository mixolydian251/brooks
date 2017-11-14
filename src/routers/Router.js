import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from '../components/Header';
import Menu from '../components/menus/Menu';
import MobileMenu from '../components/menus/MobileMenu'
import Footer from '../components/Footer';
import FrontPage from '../pages/FrontPage';
import AboutPage from '../pages/AboutPage';
import FoodPage from '../pages/FoodPage';
import ClothingPage from '../pages/ClothingPage';
import DonationsPage from '../pages/DonationsPage';
import VolunteerPage from '../pages/VolunteerPage';
import ContactPage from '../pages/ContactPage';
import PageNotFound from '../pages/PageNotFound';
import '../styles/app-grid.scss'


class Router extends React.Component {
    state = {
        desktop: undefined
    };
    windowSize = () => {
        this.setState(() => {
            if (window.innerWidth > 804){
                return {desktop: true}
            }
            return {desktop: false}
        });
    };
    componentDidMount = () => {
        this.windowSize();
        window.addEventListener('resize', () => {
            this.windowSize()
        });
    };
    render() {
        return (
            <BrowserRouter>
                <div className="wrapper">
                    <Header className="header"/>
                    {this.state.desktop ? <Menu className="menu"/> : <MobileMenu className="mobile-menu-button"/>}
                    <div className="content">
                        <Switch>
                            <Route path="/" component={FrontPage} exact={true}/>
                            <Route path="/about" component={AboutPage}/>
                            <Route path="/food" component={FoodPage}/>
                            <Route path="/clothing" component={ClothingPage}/>
                            <Route path="/donations" component={DonationsPage}/>
                            <Route path="/volunteer" component={VolunteerPage}/>
                            <Route path="/contact" component={ContactPage}/>
                            <Route component={PageNotFound}/>
                        </Switch>
                    </div>
                    <Footer className="footer"/>
                </div>
            </BrowserRouter>
        )
    }
}

export { Router as default }
