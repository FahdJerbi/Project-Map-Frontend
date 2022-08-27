import * as React from "react";
import { Typography, AppBar, Toolbar, Button, Divider } from "@mui/material";

const drawerWidth = 300;

const Navbar = () => {
  return (
    <div>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            TakeMyLuggage
          </Typography>

          <Button color="inherit">Map</Button>

          <Divider />
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
