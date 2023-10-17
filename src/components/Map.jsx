import React from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon, divIcon } from "leaflet";
import iconUrl from "../assets/map-icon.png";

function Map(location) {
  const customIcon = new Icon({
    iconUrl: iconUrl,
    iconSize: [38, 38],
  });

  return (
    <MapContainer
      center={[location.lat, location.lon]}
      zoom={3}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[location.lat, location.lon]} icon={customIcon}>
        <Popup>{location.display_name}</Popup>
      </Marker>
    </MapContainer>
  );
}

export default Map;
