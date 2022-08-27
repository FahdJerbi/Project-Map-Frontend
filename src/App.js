import ClientMap from "./client-map-pathselector/ClientMap";
import TestComp from "./client-map-pathselector/TestComp";
import Register from "./views/Register";
import Login from "./views/Login";
import { Routes, Router, Route, Link } from "react-router-dom";
import "./styles.css";
import Layout from "./views/Layout";

export default function App() {
  return (
    <div className="App">
      {/* client map with custom path control */}
      {/* <ClientMap /> */}

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />

          {/* create a private route for client map */}
          <Route path="/map" element={<ClientMap />} />
        </Route>
      </Routes>
    </div>
  );
}
