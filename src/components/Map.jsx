import React from 'react';
import "leaflet/dist/leaflet.css"
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import {Icon,divIcon} from "leaflet";
import iconUrl from "../assets/map-icon.png";

function Map(location) {


  const customIcon = new Icon({
    iconUrl: iconUrl,
    iconSize: [38,38] // size of the icon
  });

    return (
      <MapContainer center={[location.lat, location.lon]} zoom={3}   scrollWheelZoom={true}>
        <TileLayer attribution="Stadia Maps" url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"/>
        <Marker position={[location.lat, location.lon]} icon={customIcon}>
          <Popup>{location.display_name}</Popup>
        </Marker>
      </MapContainer>
    );
  }



  export default Map;