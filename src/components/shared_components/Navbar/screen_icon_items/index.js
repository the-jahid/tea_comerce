import { Box, IconButton, Popover, Stack, Tooltip,  Drawer } from '@mui/material'
import React from 'react'
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { StyledBadge } from '../navbarutils';
import Searchbar from './searchbar';
import Link from 'next/link';
import CartReview from '../../random/cart_review';
import { useDispatch, useSelector } from 'react-redux';
import { toggleSearchState } from '@/store/showMenuSlice';
import SignInPage from '../../../../app/(auth)/sign-in/[[...sign-in]]/page';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { useClerk } from '@clerk/nextjs';


const All_ICON_Items = () => {
  // const [anchorElSearch, setAnchorElSearch] = React.useState(null);
  const [anchorElLogin, setAnchorElLogin] = React.useState(null);
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  

  const allItemsCount = useSelector((state) => state.cartItems.allitemsCount)
  const anchorElSearch = useSelector((state) => state.showMenu.searchState)
  const { signOut } = useClerk();
  const { user } = useClerk();
 

  const dispatch = useDispatch()

  const handleDrawerOpen = () => {
    setIsDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };

 

  const handleSignOut = async () => {
    await signOut();
  };

  return  <Box>
  <Stack direction={"row"} spacing={3} flexWrap='wrap' sx={{ justifyContent: 'center' }}   >
    <Tooltip title="SEARCH">
      {/* Attach the onClick event listener directly to the IconButton component */}
      <IconButton onClick={(e) => dispatch(toggleSearchState()) }>
        <SearchIcon  />
      </IconButton>
    </Tooltip>
      <Popover

      open={Boolean(anchorElSearch)}
      anchorEl={anchorElSearch}
      onClose={ () => dispatch(toggleSearchState())}
      PaperProps={{
        style: {
          width: "100%",
          marginTop: "40px",
        },
      }}
      >
      <Searchbar  />
      </Popover>
    <Tooltip title="LOGIN/SIGNUP">
      {/* Attach the onClick event listener directly to the IconButton component */}
      <IconButton onClick={(e) => setAnchorElLogin(e.currentTarget) }>
        <PersonOutlineIcon  />
      </IconButton>
    </Tooltip>
    <Popover
       open={Boolean(anchorElLogin)}
       anchorEl={anchorElLogin}
       onClose={ () => setAnchorElLogin(null)}
       PaperProps={{
         style: {
           marginTop: "40px",
         },
       }}
     >
     <SignInPage />
     </Popover>
    <Tooltip title="WISHLIST">
      <IconButton >
        <Link href={'/wishlist'} ><FavoriteBorderIcon /></Link>
      </IconButton>
    </Tooltip>
    {/* Cart Section */}
    <Tooltip title="CART" >
      <IconButton onClick={handleDrawerOpen}>
        <StyledBadge badgeContent={allItemsCount} color="secondary">
          <ShoppingCartIcon />
        </StyledBadge>
      </IconButton>
    </Tooltip>
    <Drawer
        anchor="right"
        open={isDrawerOpen}
        onClose={handleDrawerClose}
      >
        <CartReview />
      </Drawer>
     { user && <Tooltip title="SignOut">
      <IconButton  onClick={handleSignOut} >
        <ExitToAppIcon />
      </IconButton>
    </Tooltip>}
  </Stack>
</Box>
}

export default  All_ICON_Items

