import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from '../components/Header';
import Menu from '../components/Menu';
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


const Router = () => (
    <BrowserRouter>
        <div className="wrapper">
            <Header className="header"/>
            <Menu className="menu"/>
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
);

export { Router as default }
