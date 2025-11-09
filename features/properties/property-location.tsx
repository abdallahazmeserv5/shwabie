"use client";

import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

// Fix default marker icon (important for Leaflet in React)
const markerIcon = new L.Icon({
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

const LocationMap = () => {
  const position: [number, number] = [30.0444, 31.2357];

  return (
    <section className="w-full py-2">
      <div className="rounded-2xl overflow-hidden shadow-md border border-gray-200">
        <MapContainer
          center={position}
          zoom={16}
          scrollWheelZoom={false}
          className="h-[400px] w-full"
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={position} icon={markerIcon}>
            <Popup>موقعنا هنا</Popup>
          </Marker>
        </MapContainer>
      </div>
    </section>
  );
};

export default LocationMap;
