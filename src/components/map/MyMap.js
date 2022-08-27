import React from "react";
import "./MyMap.css";
import { MapContainer, TileLayer } from "react-leaflet";
import RoutingMachine from "../routing-machine/RoutingMachine";

const MyMap = () => {
  const Tunisie = [33.88, 9.53];

  return (
    <div>
      <MapContainer center={Tunisie} zoom={7}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <RoutingMachine />
      </MapContainer>
    </div>
  );
};

export default MyMap;
