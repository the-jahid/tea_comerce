"use client";
// Import React and useState hook from react library
import React, { useEffect, useReducer, useState } from "react";

// Import MUI components and icons
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Popover,
  SwipeableDrawer,
  Toolbar,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";


// Import Next.js components
import Image from "next/image";
import Link from "next/link";

// Import custom components and utilities
import { pages } from "./navbarutils";
import NavDrawer from "./nav_drawer";
import All_ICON_Items from "./screen_icon_items";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenuState, toggleTeaWareState, toggleteaState } from "@/store/showMenuSlice";
import { set } from "react-hook-form";

// Define a function to render the menu items
const RenderMenuItems = () => {
  // Use the useMediaQuery hook to determine the screen size
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const isMediumScreen = useMediaQuery((theme) => theme.breakpoints.down("md"));


  // Map over the pages array and render each page as a button or a popover
  return pages.map((page) => {
    const dispatch = useDispatch();

    const { menuState, teaState, teaBagsState, looseLeafTeaState, teaWareState} = useSelector((state) => state.showMenu);

    const [anchorEl, setAnchorEl] = useState(null );

    if(menuState  && anchorEl ) {
      
        setAnchorEl(false)
        dispatch(toggleMenuState())
    } else {
      console.log('I am false')
    }
    
    const handleMenuClick = (event, pageName) => {   

      setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = (pageName) => {
      setAnchorEl(false)
      // dispatch(toggleMenuState())
    };




    return (
      <Box key={page.id}>
        {!page.megamenu ? (
          // Render a regular button for pages without a megamenu
          <Button
            sx={{
              my: 2,
              color: "black",
              fontWeight: "600",
              display: isSmallScreen ? "none" : "block",
            }}
          >
            <Link href={page.linktext}>{page.name}</Link>
          </Button>
        ) : (
          // Render a button and a popover for pages with a megamenu
          <Box key={page.id}>
            <Button
              onClick={ (e) => handleMenuClick(e, page.name)}
              
              sx={{
                my: 2,
                color: "black",
                fontWeight: "600",
                display: isSmallScreen ? "none" : "block",
              }}
            >
              {page.name}
            </Button>
            <Popover
              id="simple_menu"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={ () =>  handleMenuClose(page.name)}
          
              PaperProps={{
                style: {
                  width: "100%",
                  marginTop: "60px",
                  display: isMediumScreen ? "none" : "block",
                },
                
              }}
            >
              <Box>{page.megamenuComponent}</Box>
            </Popover>
          </Box>
        )}
      </Box>
    );
  });
};

// Define the Navbar component
function Navbar() {
  // Use the useState hook to manage the state of the drawer
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Use the useMediaQuery hook to determine the screen size
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  // Define a function to toggle the drawer
  const toggleDrawer = (open) => {
    setIsDrawerOpen(open);
  };

  // Render the AppBar and Toolbar components
  return (
    <AppBar position="static" sx={{ backgroundColor: "white" }}>
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: isSmallScreen ? "column" : "row", // Set the flexDirection to column on small screens and row on larger screens
          }}
        >
          {/* Render the logo */}
<Box
  sx={{
    backgroundColor: "white",
    minWidth: "178.5px",
    height: "53px",
    position: "relative",
    display: { xs: "none", md: "flex" }, // Hide the logo on small screens and show it on larger screens
    mr: 1,
  }}
>
  <Link href={"/"}>
      <Image
      src="https://i.ibb.co/jg7zvps/hl-tea-and-coffee-logo-1600340179-90686-original.png"
      alt="header_logo"
    
      layout="fill"
      objectFit="cover"
      objectPosition="center"
      sizes="(max-width: 600px) 100vw, 600px"
      priority
    />
  </Link>
</Box>

          {/* Render the menu items */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexGrow: 1,
            }}
          >
            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              {/* Render the menu icon and drawer */}
              <IconButton
                size="large"
                onClick={() => toggleDrawer(true)}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <SwipeableDrawer
                anchor="left"
                open={isDrawerOpen}
                onClose={() => toggleDrawer(false)}
                onOpen={() => {}}
              >
                <NavDrawer toggleDrawer={toggleDrawer} />
              </SwipeableDrawer>
            </Box>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexGrow: 1,
              }}
            >
              <Box sx={{ display: { xs: "none", md: "flex" }, flexWrap: 'wrap' }}>
                {RenderMenuItems()}
              </Box>

              {/* Render the search, login/signup, wishlist, and cart icons */}
              <All_ICON_Items />
            </Box>
          </Box>

          {/* Render the logo for small screens */}
          <Box
            sx={{
              backgroundColor: "white",
              width: "178.5px",
              height: "53px",
              position: "relative",
              display: { xs: "flex", md: "none" },
            }}
          >
            <Link href={'/'} >
            <Image
  src="https://i.ibb.co/jg7zvps/hl-tea-and-coffee-logo-1600340179-90686-original.png"
  alt="header_logo"
  layout="fill"
  objectFit="cover"
  objectPosition="center"
  sizes="(max-width: 600px) 100vw, 600px"
/>
            </Link>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

// Export the Navbar component
export default Navbar;