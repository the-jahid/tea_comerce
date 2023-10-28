'use client'
import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider, Grid,  Stack,  TextField,  Typography, } from '@mui/material';
import {useState} from 'react';
import AddInfo from './add_info';
import AddCoupon from './add_coupon';
import { GiftCertificate } from './gift_certificate';


const CartRight = ({subtotal, totalPrice}) => {
  const [info, setInfo] = useState(false);
  const [couponCode, setCouponCode] = useState(false);
  const [giftCertificate, setgiftCertificate] = useState(false);

  return (
<Grid item xs={12} md={4} spacing={2} >
    <Typography variant="h4">Order Summary:</Typography>
  <Stack spacing={2} >
    <Divider />
    <Box sx={{display:'flex', justifyContent:'space-between'}} >
      <Typography variant='h6'>Subtotal: </Typography>
      <Typography fontWeight='bold' >${subtotal}</Typography>
    </Box>
    <Divider />
    <Box sx={{display:'flex', justifyContent:'space-between'}} >
      <Typography variant='h6'>Shipping:</Typography>
      <Button variant='outlined' onClick={() => setInfo(true)} >Add info</Button>
      <AddInfo info={info} setInfo={setInfo} />
    </Box>
    <Divider />
    <Box sx={{display:'flex', justifyContent:'space-between'}} >
      <Typography variant='h6'>Coupon Code:</Typography>
      <Button variant='outlined'onClick={() => setCouponCode(true)} >Add Coupon</Button>
      <AddCoupon couponCode={couponCode} setCouponCode={setCouponCode} />
    </Box>
    <Divider />
    <Box sx={{display:'flex', justifyContent:'space-between'}} >
      <Typography variant='h6'>Gift Certificate:</Typography>
      <Button variant='outlined' onClick={() => setgiftCertificate(true)} >Gift Certificate</Button>
      <GiftCertificate giftCertificate={giftCertificate} setgiftCertificate={setgiftCertificate} />
    </Box>
    <Divider />
    <Box sx={{display:'flex', justifyContent:'space-between'}} >
      <Typography variant='h6'>Total:</Typography>
      <Typography fontWeight='bold' >$0</Typography>
    </Box>
    <Divider />
    <Button variant='outlined' >Check Out</Button>
  </Stack>
</Grid>
  )
}

export default CartRight