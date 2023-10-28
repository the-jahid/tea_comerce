import React from 'react';
import {Box, Button, Divider, Stack, Typography} from '@mui/material';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import ChangeQuantity from './qunatityChange';
import { removeFromCart } from '@/store/cartSlice';

const CartReview = () => {

  const {allitemsCount, items, subtotal} = useSelector((state) => state.cartItems);
  const dispatch = useDispatch();
  const reviewItems = Object.values(items);
  
  return (
    <Box sx={{   width:{xs:'85vw', sm:'50vw', md:'40vw', lg:'30vw'}}} >
        <Box sx={{ width:'100%', backgroundColor:'gray', display:'flex', padding:3, justifyContent:'space-between'}} >
            <Typography>Review Your Cart</Typography>
            <Typography> {allitemsCount} Items Here</Typography>
        </Box>
      <Box sx={{display:'flex' , flexDirection:'column',  alignItems:'center' }}  >
      {reviewItems && reviewItems.map((item, index) => <Box  sx={{ marginTop:1, margin:'6px', minWidth:'90%',  display:'flex', padding:1, justifyContent:'flex-start', border:'1px solid black', borderRadius:'10px'}} >
          <Box padding='10px' sx={{width:'80px', height:'80px', position:'relative', padding:2}} >
             <Image src={item.image} fill alt='review image' />
          </Box>
          <Stack spacing={1}  sx={{display:'flex',  }}   >
            <Typography  variant='h6' >{item.title}</Typography>
            <Typography> Total: 4000</Typography>

              <ChangeQuantity item={item} />
              <Button sx={{width:'100px'}} variant='outlined' onClick={() => dispatch(removeFromCart(item.id))} >
                Delete
          </Button>
          </Stack>
        </Box> 
        
        )}
   
     </Box>
    </Box>
  )
}

export default CartReview