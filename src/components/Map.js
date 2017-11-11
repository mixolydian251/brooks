import React from 'react'
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
} from "react-google-maps";

const MapWithAMarker = withScriptjs(withGoogleMap((props) =>
    <GoogleMap
        defaultZoom={13}
        defaultCenter={{ lat: 35.7971212, lng: -78.67214849999999 }}
    >
        <Marker
            position={{ lat: 35.7971212, lng: -78.67214849999999 }}
        />
    </GoogleMap>
));

export {MapWithAMarker}