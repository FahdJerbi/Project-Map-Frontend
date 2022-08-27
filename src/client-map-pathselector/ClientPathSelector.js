import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import AirlineStopsIcon from "@mui/icons-material/AirlineStops";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { useSelector } from "react-redux";
import { FormControl } from "@mui/material";
import OrderForm from "./OrderForm";
// import "./styles.css";

const drawerWidth = 300;

const ClientPathSelector = () => {
  // make a state to hold data store
  const [showApiRoute, setShowApiRoute] = useState();

  // call the state from store
  const ApiRoute = useSelector((state) =>
    state.routingMachineData.userPaths.at(-1)
  );

  // assign the store state to the Setter to update whenever new Route from api is found
  useEffect(() => {
    setShowApiRoute(ApiRoute);
  }, [ApiRoute]);

  // console.log(showApiRoute);

  return (
    <div style={{ width: "300px" }}>
      {/* <Toolbar /> */}

      {/* new component  */}
      <OrderForm {...showApiRoute} />

      <h5>Select your start and End point:</h5>
      <FormControl>
        {/* <TextField
          name="firstname"
          placeholder="Pickup location"
          sx={{ m: 1, width: "25ch" }}
          id="standard-basic"
          label="Source"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton edge="end">
                  <MyLocationIcon />
                </IconButton>
              </InputAdornment>
            )
          }}
        />

        <TextField
          name="lastname"
          placeholder="Delivery Location"
          sx={{ m: 1, width: "25ch" }}
          id="standard-basic"
          label="Destination"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <AirlineStopsIcon />
              </InputAdornment>
            )
          }}
        /> */}
        <br />

        {/* Map over the Api Route data */}
        {/* {showApiRoute
          ? Object.values(showApiRoute).map((data) => console.log(data))
          : // console.log("it's still empty")
            null} */}

        {/* {showApiRoute
          ? Object.values(showApiRoute).map((data) => (
              <TextField
                value={data}
                placeholder="Delivery Location"
                sx={{ m: 1, width: "25ch" }}
                // label="Destination"
              />
            ))
          : null} */}

        <Button startIcon={<CheckCircleOutlineIcon />} variant="contained">
          Confirm
        </Button>
      </FormControl>
      {/* ///////////////////////////////////////// */}

      <div></div>
    </div>
  );
};

export default ClientPathSelector;
