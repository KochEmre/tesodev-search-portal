import React from "react";
import GoogleMapReact from 'google-map-react';
import "./googleMap.scss";
import { ImLocation } from 'react-icons/im';


const LocationPin = ({ text }) => (
    
    <div className="pin">
      {/* <ImLocation size={24} style={{color: 'red'}} /> */}
      <p className="pin-text">asdad : {text}</p>
    </div>
  )

export default function MarkedLocationMap(){
  const defaultProps = {
    center: {
      lat: 41.01914500623063,
      lng: 28.890948156712973
    },
    zoom: 19
  };

  return (
    // Important! Always set the container height explicitly
    <div className="google-map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <LocationPin
          lat={59.955413}
          lng={30.337844}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
  );
}