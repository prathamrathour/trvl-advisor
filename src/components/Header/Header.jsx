import React, { useState } from "react";

import { Autocomplete } from "@react-google-maps/api";
import SearchIcon from "@material-ui/icons/Search";
import { AppBar, Toolbar, Typography, InputBase, Box } from "@material-ui/core";
import useStyles from "./styles";
const Header = ({ setCoordinates }) => {
  const classes = useStyles();
  const [autocomplete, setAutoComplete] = useState({});
  const onLoad = (autoC) => setAutoComplete(autoC);

  const onPlaceChanged = () => {
    const lat = autocomplete.getPlace().geometry.location.lat();
    const lng = autocomplete.getPlace().geometry.location.lng();
    setCoordinates({ lat, lng });
  };

  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        <Typography variant="h5" className={classes.title}>
          Travel Advisor
        </Typography>
        <Box display="flex">
          <Typography variant="h6" className={classes.title}>
            Explore new Places
          </Typography>
          <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search..."
                classes={{ root: classes.inputRoot, input: classes.inputInput }}
              />
            </div>
          </Autocomplete>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
