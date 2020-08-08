import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";
import Typography from "@material-ui/core/Typography";
import { TodoFormContext } from "./contexts/todoForm.context";

const useStyles = makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Navbar() {
  const { handleOpen } = useContext(TodoFormContext);
  const classes = useStyles();

  return (
    <AppBar color="default" position="fixed" className={classes.appBar}>
      <Toolbar>
        <Typography className={classes.title} variant="h6" noWrap>
          Todos
        </Typography>
        <IconButton onClick={handleOpen}>
          <AddIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
