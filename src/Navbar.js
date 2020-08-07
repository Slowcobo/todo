import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

export default function Navbar() {
  return (
    <AppBar color="default" position="static">
      <Toolbar>
        <Typography>Todos</Typography>
      </Toolbar>
    </AppBar>
  );
}
