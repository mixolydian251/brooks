import React from 'react';
import Invite from '../components/Invite';
import NextDate from '../components/NextDate';
import CalendarButton from '../components/CalendarButton';
import CalendarModal from '../components/calendar/CalendarModal'
import Address from '../components/Address'
import {MapWithAMarker} from '../components/Map';
import '../styles/front-page-grid.scss'

class FrontPage extends React.Component{
    state = {
        desktop: true,
        modalActive: false,
    };
    handleCalendarModal = () => {
        this.setState((prevState) => ({modalActive: !prevState.modalActive}))
    };
    render(){
         return (
             <div>
                 <div className="front-page-wrapper">
                     <div className="grid-date" >{<NextDate/>}</div>
                     <div className="grid-invite">{<Invite/>}</div>
                     <div className="grid-calendar">{<button  className='modalButton'
                                                              onClick={this.handleCalendarModal}>
                                                              {<CalendarButton/>}
                                                              </button>}
                     </div>
                     <div className="grid-address">{<Address/>}</div>
                     <div className="grid-map"> {<MapWithAMarker
                                                googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDcYLSbh7lFZ2ePYlp-rVnNk2szL-onrkM&v=3.exp&libraries=geometry,drawing,places"
                                                loadingElement={<div style={{ height: `50%` }} />}
                                                containerElement={<div className="map" />}
                                                mapElement={<div style={{ height: `100%` }} />} />}
                     </div>
                </div>
                 {this.state.modalActive &&
                                            <CalendarModal
                                            handleCalendarModal={this.handleCalendarModal}
                                            modalActive={this.state.modalActive}/>}
             </div>
         )
     }
}
export {FrontPage as default}

