import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  Divider,
  Drawer,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  useMediaQuery,
} from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import { theme } from "@/theme/mui_theme";
import NavDrawerItemsList from "./navDrawerItemslist";
import Link from "next/link";

export const NavDrawerItem = ({ item, toggleDrawer }) => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  
    // Function to toggle the drawer
    const handleToggleDrawer = () => {
      setIsDrawerOpen(!isDrawerOpen);
      // toggleDrawer(false); 
    };
  
    // Styles for the drawer
    const drawerStyles = {
      minWidth: isSmallScreen ? "100%" : "400px",
      [theme.breakpoints.down("sm")]: {
        minWidth: "250px",
      },
    };
  
    return (
      <>
        {/* Button to open the drawer */}
        <ListItemButton sx={{display:'flex', justifyContent:'space-between'}} >
          <Link href={`/all_items/${item.value}`} ><ListItemText primary={item.name} /></Link>
          {/* Show arrow icon if item has a megamenu */}
          {item.megamenu && (
            <ListItemIcon onClick={handleToggleDrawer} >
              <ArrowForwardIosIcon />
            </ListItemIcon>
          )}
        </ListItemButton>
        {/* Drawer for the item */}
        <Drawer anchor="left" open={isDrawerOpen} onClose={handleToggleDrawer}>
          {/* Header of the drawer */}
          <Box sx={{ display: "flex", justifyContent: "space-between", padding:2 }}>
            <Button onClick={handleToggleDrawer}>Back</Button>
            <Typography>{item.name}</Typography>
          </Box>
          {/* Container for the drawer items */}
          <Container sx={drawerStyles}>
            <NavDrawerItemsList />
            {item.navItemsdrawer}
          </Container>
        </Drawer>
        <Divider />
      </>
    );
  };