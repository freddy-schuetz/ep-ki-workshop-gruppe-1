"use client";

import { MapContainer, TileLayer, CircleMarker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import skigebiete from "@/data/skigebiete.json";

export default function KarteClient() {
  return (
    <MapContainer center={[46.8, 10.5]} zoom={6} className="h-full w-full">
      <TileLayer
        attribution="&copy; OpenStreetMap"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {skigebiete.gebiete.map((g) => (
        <CircleMarker
          key={g.id}
          center={[g.lat, g.lng]}
          radius={9}
          pathOptions={{ color: "#0b3a8c", fillColor: "#1457c8", fillOpacity: 0.9 }}
        >
          <Popup>{g.name}</Popup>
        </CircleMarker>
      ))}
    </MapContainer>
  );
}
