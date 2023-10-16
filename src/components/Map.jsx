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
      <MapContainer center={[location.lat, location.lon]} zoom={5}   scrollWheelZoom={true}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='© OpenStreetMap contributors'
        />
        <Marker position={[location.lat, location.lon]} icon={customIcon}>
          <Popup>{location.display_name}</Popup>
        </Marker>
      </MapContainer>
    );
  }
  
  export default Map;