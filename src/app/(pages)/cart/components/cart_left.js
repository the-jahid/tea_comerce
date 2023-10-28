
'use client'
import ChangeQuantity from '@/components/shared_components/random/qunatityChange';
import { countAllItems, removeFromCart } from '@/store/cartSlice';
import { Box,  Grid, IconButton, Stack, Typography, useMediaQuery } from '@mui/material';
import Image from 'next/image';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DeleteIcon from '@mui/icons-material/Delete';

const CartLeft = ({data}) => {

    const dispatch = useDispatch();
    const isSmallScreen = useMediaQuery('(max-width:600px)');
  


  return (
    <Grid item xs={12} md={8}>
    {/* header */}
    <Box
      sx={{
        display: {xs:'none', sm:'none', md:'flex'},
        backgroundColor: 'gray',
        padding: 2,
        margin: '10px',
      }}
    >
      <Box sx={{ display: 'flex', flexBasis: '50%' }}>
        <Typography>Item</Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          flexBasis: '50%',
        }}
      >
        <Typography>Price</Typography>
        <Typography>Quantity</Typography>
        <Typography>Total </Typography>
        <Typography></Typography>
      </Box>
    </Box>
    {data.map((item) => (
      <Box
        key={item.id}
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'center',
          margin: '10px',
          borderRadius: '10px',
          border: '1px solid black',
          padding: 2,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            flexBasis: { xs: '100%', md: '50%' },
            marginBottom: { xs: 2, md: 0 },
          }}
        >
          <Image src={item.image} width={100} height={100} alt="all" />
          <Stack sx={{ margin: '0px 10px' }}  >
            <Typography>{item.subtitle}</Typography>
            <Typography variant='h6' >{item.title}</Typography>
            <Typography>Color: {item.selectedColor}</Typography>
            <Typography>Size: {item.selectedSize}</Typography>
            <Typography>Change</Typography>
            <Typography>Gift Wrapping</Typography>
          </Stack>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection:{xs:'column', sm:'column', md:'row'},
            alignItems: 'center',
            flexBasis: { xs: '100%', md: '50%' },
          }}
        >
          <Typography variant='h6' >  {isSmallScreen ? `Price:${item.price}`:`${item.price}`}</Typography>
          <ChangeQuantity item={item} />
          <Typography variant='h6' >${item.price * item.quantity}</Typography>
          
          <IconButton onClick={() => dispatch(removeFromCart(item.id))} >
            <DeleteIcon />
          </IconButton>
        </Box>
      </Box>
    ))}
  </Grid>
  )
}

export default CartLeft