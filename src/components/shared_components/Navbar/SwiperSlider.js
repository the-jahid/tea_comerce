'use client'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Import the base CSS styles
import { featuredProduct } from './navbarutils';
import { Card, CardActions, CardContent, CardMedia, Stack, Typography } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

export const SwiperCard = ({item}) => {
  return <Card sx={{ margin:'15px'}} >

  <CardMedia
    sx={{minWidth:'80px', height:'120px'}} 
    image={item.image}
    alt='image'
  />
   
  <CardContent>
      <Typography variant='subtitle1'>
        {item.name}
      </Typography>
      <Typography variant='subtitle1' >
        ${item.price}
      </Typography>
      <CardActions sx={{color:'#00bcd4'}} >
          <AddCircleOutlineIcon />
          <Typography>Details</Typography>
      </CardActions>
  </CardContent>
</Card>
}

const SwiperSlider = () => {
  return (
    <Swiper>
      <SwiperSlide>
          {featuredProduct.slice(0, 2).map((item, index) => <SwiperCard key={index} item = {item} />  )}
      </SwiperSlide>
      <SwiperSlide>{featuredProduct.slice(2, 4).map((item,index) => <SwiperCard  key={index} item = {item} />  )}</SwiperSlide>
      
    </Swiper>
  );
};

export default SwiperSlider;




