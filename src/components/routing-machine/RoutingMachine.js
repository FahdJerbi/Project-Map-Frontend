import L from "leaflet";
import { createControlComponent } from "@react-leaflet/core";
import "leaflet-routing-machine";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";

const createRoutingMachine = () => {
  // const map = useMap
  const myRoute = L.Routing.control({
    waypoints: [L.latLng(36.72, 9.19), L.latLng(36.87, 10.32)],
    lineOptions: {
      styles: [{ color: "red", opacity: 1, weight: 2 }]
    },
    show: true,
    addWaypoints: false,
    routeWhileDragging: true,
    draggableWaypoints: true,
    fitSelectedRoutes: true
  });

  return myRoute;
};

const RoutingMachine = createControlComponent(createRoutingMachine);
export default RoutingMachine;
