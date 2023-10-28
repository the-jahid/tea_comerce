import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  Divider,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Typography,
  useMediaQuery,
} from "@mui/material";

import { pages } from "../navbarutils";
import { theme } from "@/theme/mui_theme";
import { NavDrawerItem } from "./nav_drawer_item";
import Link from "next/link";

// Component for each item in the navigation drawer


// Navigation drawer component
const NavDrawer = ({ toggleDrawer }) => {
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  // Styles for the container
  const containerStyles = {
    minWidth: isSmallScreen ? "100%" : "400px",
    [theme.breakpoints.down("sm")]: {
      minWidth: "100px",
    },
  };

  return (
    <Container sx={containerStyles}>
      {/* Header of the drawer */}
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Button onClick={() => toggleDrawer(false)}>Back</Button>
        <Typography></Typography>
      </Box>
      {/* List of items in the drawer */}
      <List sx={{ width: "100%" }}>
        {pages.map((item) =>
          item.megamenu ? (
            <NavDrawerItem
              key={item.name}
              item={item}
              toggleDrawer={toggleDrawer}
            />
          ) : (
            <React.Fragment key={item.name}>
              <ListItemButton onClick={() => toggleDrawer(false)}>
               <Link href={item.linktext} >  <ListItemText primary={item.name} /></Link>
              </ListItemButton>
              <Divider />
            </React.Fragment>
          )
        )}
      </List>
    </Container>
  );
};

export default NavDrawer;
