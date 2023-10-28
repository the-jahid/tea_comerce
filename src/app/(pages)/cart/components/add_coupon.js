'use client'
import { useState } from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider, Grid,  Stack,  TextField,  Typography, } from '@mui/material';

const AddCoupon = ({couponCode, setCouponCode}) => {
    
    const [couponCodeText, setCouponCodeText] = useState('')

  const handleClose = () => {
    setCouponCode(false);
  };
  console.log(couponCodeText)


  return (
    <Dialog open={couponCode} onClose={ handleClose }>
    <DialogTitle>Add Coupon Code</DialogTitle>
    <DialogContent>
    
      <TextField
        autoFocus
        margin="dense"
    
        label="Add Coupon Code"
        type="text"
        fullWidth
        variant="standard"
        onChange={(e) => setCouponCodeText(e.target.value) }
      />
    </DialogContent>
    <DialogActions>
      <Button onClick={ handleClose}>Cancel</Button>
      <Button >Add</Button>
    </DialogActions>
  </Dialog>
  )
}

export default AddCoupon