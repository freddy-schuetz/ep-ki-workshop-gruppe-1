"use client";

import { MapContainer, TileLayer, CircleMarker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import skigebiete from "@/data/skigebiete.json";

export default function KarteClient() {
  return (
    <MapContainer center={[46.8, 10.5]} zoom={7} className="h-full w-full">
      <TileLayer
        attribution="Tiles &copy; Esri"
        url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
      />
      {skigebiete.gebiete.map((g) => (
        <CircleMarker
          key={g.id}
          center={[g.lat, g.lng]}
          radius={9}
          pathOptions={{ color: "#0b3a8c", fillColor: "#1457c8", fillOpacity: 0.9 }}
        >
          <Popup>
            <div style={{ minWidth: 200 }}>
              <div style={{ fontWeight: 700, fontSize: 15, color: "#0b3a8c", marginBottom: 4 }}>
                {g.name}
              </div>
              <div style={{ color: "#555", marginBottom: 6 }}>
                {g.region} · {g.land}
              </div>
              <div style={{ marginBottom: 4 }}>
                🎿 <strong>{g.pistenKm} Pistenkilometer</strong>
              </div>
              <div style={{ marginBottom: 4 }}>
                ⛰️ bis <strong>{g.hoeheMeter} m</strong> Höhe
              </div>
              <div style={{ marginBottom: 6, fontStyle: "italic", color: "#333" }}>
                „{g.highlight}"
              </div>
              {g.skipassInklusive && (
                <div style={{ color: "#2fae66", fontWeight: 600 }}>
                  ✓ Skipass inklusive
                </div>
              )}
              <div style={{ color: "#1457c8", fontWeight: 600, marginTop: 4 }}>
                🚌 Skibus inklusive
              </div>
            </div>
          </Popup>
        </CircleMarker>
      ))}
    </MapContainer>
  );
}
