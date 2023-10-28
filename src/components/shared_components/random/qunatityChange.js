import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import { addquantity, minusquantity } from '@/store/cartSlice';

const ChangeQuantity = ({ item }) => {
  
  const dispatch = useDispatch();

  
  return (
    <Box sx={{ display: 'flex',   alignItems: 'center' }}>
      
      <Button
        variant="contained"
        onClick={() =>   dispatch(minusquantity(item))}
        disabled={item.quantity === 1
        }
      >
        -
      </Button>
        <Typography sx={{ mr: 2, ml:2 }}>{item.quantity}</Typography>
      <Button
        variant="contained"
        onClick={() =>  dispatch(addquantity((item)))}
      >
        +
      </Button>
    </Box>
  );
};

export default ChangeQuantity;