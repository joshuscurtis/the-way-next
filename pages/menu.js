import React, { useState, useEffect } from "react";

//import ReactDOM from "react-dom";
import "../styles/Menu.module.css";
import Head from "next/head"
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import Button from "@material-ui/core/Button";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import CakeIcon from "@material-ui/icons/Cake";
import LocalCafeIcon from "@material-ui/icons/LocalCafe";
import FastfoodIcon from "@material-ui/icons/Fastfood";
//import NewReleasesIcon from "@material-ui/icons/NewReleases";
import InfoIcon from "@material-ui/icons/Info";
import MenuPage from "../components/menuPage";

import axios from "axios";

//const menu = require("./menu.json");

const drawerWidth = 330;
const useStyles = makeStyles((theme) => ({
}));

export default function PersistentDrawerLeft() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [type, setType] = React.useState("cakes");
  const [menuData, setMenuData] = useState("loading");

  useEffect(() => {
    document.title = "Menu | The Way Coffee House | Coffee & Cake Dunstable";
    async function fetchData() {
      const request = await axios.get(
        "https://christchurchdunstable.org.uk/theway/json/menu.json"
      );
      const request2 = await axios.get(
        "https://christchurchdunstable.org.uk/wp-json/wp/v2/posts/?filter%5Bp%5D=7912"
      );
      console.log(request2.data);

      setMenuData(request.data.items);
      return request;
    }
    fetchData();
  }, []);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const cakesTypeClick = () => {
    setType("cakes");
    handleDrawerClose();
    window.scrollTo(0, 0);
  };
  const drinksTypeClick = () => {
    setType("drinks");
    handleDrawerClose();
    window.scrollTo(0, 0);
  };
  const foodTypeClick = () => {
    setType("food");
    handleDrawerClose();
    window.scrollTo(0, 0);
  };
  /*const specialsTypeClick = () => {
    setType("specials");
    handleDrawerClose();
    window.scrollTo(0, 0);
  };
*/
  const infoClick = () => {
    handleDrawerClose();
    alert("Made by Josh :)");
  };

  return (
    <div className="menu">
       <Head>
        <title>The Way Coffee House | Coffee & Cake in Dunstable</title>
        <link rel="icon" href="/favicon.ico" />
        <meta charset="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="theme-color" content="#000000" />
        <link
      href="https://fonts.googleapis.com/css2?family=Sacramento&display=swap"
      rel="stylesheet"
    />
        <link
      href="https://fonts.googleapis.com/css2?family=Raleway:wght@100&display=swap"
      rel="stylesheet"
    />
        <link
      href="https://fonts.googleapis.com/css2?family=Raleway:ital@0;1&display=swap"
      rel="stylesheet"
    />
      </Head>
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
        >
          <div className="Nav">
            <Toolbar>
              <div className="Nav_cont">
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  onClick={handleDrawerOpen}
                  edge="start"
                >
                  <MenuIcon />
                </IconButton>
                <a className="Menu__Button" href="/" variant="contained">Back</a>
              </div>
            </Toolbar>
          </div>
        </AppBar>
        <Drawer
          variant="persistent"
          anchor="left"
          open={open}
          className="Drawer"
        >
          <div className={"Drawer"}>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "ltr" ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
          </div>
          <Divider />
          <List className={classes.icons}>
            <ListItem button onClick={cakesTypeClick}>
              <ListItemIcon>
                <CakeIcon style={{ fill: "#00204e" }} />
              </ListItemIcon>
              <ListItemText primary="Cakes" />
            </ListItem>
            <ListItem button onClick={drinksTypeClick}>
              <ListItemIcon>
                <LocalCafeIcon style={{ fill: "#00204e" }} />
              </ListItemIcon>
              <ListItemText primary="Drinks" />
            </ListItem>
            <ListItem button onClick={foodTypeClick}>
              <ListItemIcon>
                <FastfoodIcon style={{ fill: "#00204e" }} />
              </ListItemIcon>
              <ListItemText primary="Food" />
            </ListItem>
            {/*
            <ListItem button onClick={specialsTypeClick}>
              <ListItemIcon>
                <NewReleasesIcon style={{ fill: "#00204e" }} />
              </ListItemIcon>
              <ListItemText primary="Specials" />
            </ListItem>
           */}
            <Divider />
            <ListItem className="Drawer__info" button onClick={infoClick}>
              <ListItemIcon>
                <InfoIcon style={{ fill: "#00204e" }} />
              </ListItemIcon>
              <ListItemText primary="Info" />
            </ListItem>
          </List>
        </Drawer>
        <main
          className={clsx(classes.content, {
            [classes.contentShift]: open
          })}
        ></main>
      </div>
      <MenuPage menu={menuData} type={type} />
    </div>
  );
}
