import React from 'react';
import Introduction from '../components/Introduction';
import NextDate from '../components/NextDate';
import CalendarButton from '../components/CalendarButton';
import CalendarModal from '../components/Calendar/CalendarModal'
import Address from '../components/Address'
import {MapWithAMarker} from '../components/Map';

class FrontPage extends React.Component{
    state = {
        desktop: true,
        modalActive: false,
    };
    checkScreenWidth = () => {
        if(window.innerWidth > 950){
            this.setState(() => ({
                desktop: true
            }))
        } else{
            this.setState(() => ({
                desktop: false
            }))
        }
    };
    componentDidMount = () => {
        this.checkScreenWidth();
        window.addEventListener("resize", this.checkScreenWidth);
    };
    handleCalendarModal = () => {
        this.setState((prevState) => ({modalActive: !prevState.modalActive}))
    };
    render(){
         return (
             <div>
                 <div className="frontPageContainer">
                     {this.state.desktop &&
                     <div className="frontPageLeft">
                     </div>
                     }
                     <div className="frontPageMiddle">
                         <div className="introBox">
                             <NextDate/>
                             <Introduction/>
                         </div>
                     </div>
                     {this.state.desktop &&
                     <div className="frontPageRight">
                         <button className='modalButton' onClick={this.handleCalendarModal}>{<CalendarButton/>}</button>
                         <Address/>
                         <MapWithAMarker
                             googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDcYLSbh7lFZ2ePYlp-rVnNk2szL-onrkM&v=3.exp&libraries=geometry,drawing,places"
                             loadingElement={<div style={{ height: `50%` }} />}
                             containerElement={<div className="map" />}
                             mapElement={<div style={{ height: `100%` }} />}
                         />
                     </div>
                     }
                </div>
                 {!this.state.desktop &&
                     <div className="frontPageContainer">
                         <div className="frontPageMiddle" style={{backgroundColor: 'white', border: 'none', width: '100%'}}>
                             <button className='modalButton' onClick={this.handleCalendarModal}>{<CalendarButton/>}</button>
                             <Address/>
                             <MapWithAMarker
                                 googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDcYLSbh7lFZ2ePYlp-rVnNk2szL-onrkM&v=3.exp&libraries=geometry,drawing,places"
                                 loadingElement={<div style={{ height: `100%` }} />}
                                 containerElement={<div className="map" />}
                                 mapElement={<div style={{ height: `100%` }} />}
                             />
                         </div>
                     </div>


                 }
                 {this.state.modalActive &&
                                            <CalendarModal
                                            handleCalendarModal={this.handleCalendarModal}
                                            modalActive={this.state.modalActive}/>}
             </div>
         )
     }
}

export {FrontPage as default}

