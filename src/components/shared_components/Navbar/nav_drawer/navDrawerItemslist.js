'use client'
import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  Divider,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  useMediaQuery,
} from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import { megaMenuListItems } from "../navbarutils";
import { theme } from "@/theme/mui_theme";

const NavDrawerItemsList = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const toggleDrawer = (item) => {
    setSelectedItem(item);
    setIsDrawerOpen(true);
  };

  const drawerStyles = {
    minWidth: isSmallScreen ? "100%" : "400px",
    [theme.breakpoints.down("sm")]: {
      minWidth: "250px",
    },
  };

  return (
    <Container sx={{ maxWidth: "100%" }}>
      <List>
        {megaMenuListItems.map((item) => (
          <React.Fragment key={item.name}>
            <ListItemButton onClick={() => toggleDrawer(item)}>
              <ListItemText primary={item.name} />
              {item.listItems && <ListItemIcon><ArrowForwardIosIcon /></ListItemIcon>}
            </ListItemButton>
            <Divider />
          </React.Fragment>
        ))}
      </List>
      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        hideBackdrop
      >
        <Container sx={drawerStyles}>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Button onClick={() => setIsDrawerOpen(false)}>Back</Button>
            <Typography>{selectedItem?.name}</Typography>
          </Box>
          {selectedItem?.listItems?.map((singleitem) => (
            <ListItemText sx={{padding:1}} >
              {singleitem}
            </ListItemText>
          ))}
        </Container>
      </Drawer>
    </Container>
  );
};

export default NavDrawerItemsList;