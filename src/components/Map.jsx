import React from 'react';
import "leaflet/dist/leaflet.css"
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

function Map(location) {
    return (
      <MapContainer center={[location.lat, location.lon]} zoom={5}   scrollWheelZoom={true}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='© OpenStreetMap contributors'
        />
        <Marker position={[location.lat, location.lon]}>
          <Popup>{location.display_name}</Popup>
        </Marker>
      </MapContainer>
    );
  }
  
  export default Map;