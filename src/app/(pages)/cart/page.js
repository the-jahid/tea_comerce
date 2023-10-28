'use client'
import { Container, Grid, Typography } from '@mui/material';
import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CartLeft from './components/cart_left';
import CartRight from './components/cart_right';
import { countAllItems, countSubtotal } from '@/store/cartSlice';



const Cart = () => {
  const dispatch = useDispatch()
  const {allitemsCount, subtotal, items} = useSelector((state) => state.cartItems );
  
  const data = useMemo(() => Object.values(items), [items]);
 

  useEffect(() => {
    dispatch(countSubtotal());
    dispatch(countAllItems());
  }, [data]);

  return (
    <Container maxWidth="xl" sx={{padding:3}}>
      <Typography variant="h4">Your Cart ({allitemsCount} Items)</Typography>
      <Grid container spacing={2}>
        <CartLeft data={data} />
        <CartRight subtotal={subtotal}  />
      </Grid>
    </Container>
  );
};

export default Cart;