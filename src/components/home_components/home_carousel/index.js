'use client'
import React from 'react';
import {  Box, Button, Typography, Grid } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { useTheme } from '@mui/material/styles';
import Image from 'next/image';
import './home.css';


const slides = [
  {
    imageSrc: 'https://i.ibb.co/djrJJYs/tea-ceremony-concept-close-up-image-process-brewing-tea-using-glass-teapot.jpg',
    subTitle: 'Special Offer',
    title: 'Sale 70% off',
    description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
    buttonText: 'Shop Now',
  },
  {
    imageSrc: 'https://i.ibb.co/mGPsm6Q/candle-table-hot-drink-relaxation-generated-by-ai.jpg',
    subTitle: 'Special Offer',
    title: 'TeaWare Collection From $80',
    description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
    buttonText: 'Shop Now',
  },
  {
    imageSrc: 'https://i.ibb.co/1b43xKt/high-angle-view-dry-leaves-herb-tea-textured-backdrop.jpg',
    subTitle: false,
    title: 'Milancelos',
    description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
    buttonText: 'Shop Now',
  },
  // {
  //   imageSrc: 'https://i.ibb.co/NVrLMqg/panoramic-view-herbal-tea-set-with-two-sugar-cubes-pastel-background.jpg',
  //   subTitle: false,
  //   title: 'Milancelos',
  //   description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
  //   buttonText: 'Shop Now',
  // },
  // {
  //   imageSrc: 'https://i.ibb.co/3TTVTnc/teapot-with-apple-copy-space.jpg',
  //   subTitle: false,
  //   title: 'Milancelos',
  //   description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
  //   buttonText: 'Shop Now',
  // },
  // {
  //   imageSrc: 'https://i.ibb.co/GPwK8zq/ceramic-cup-near-plate-with-twig.jpg',
  //   subTitle: false,
  //   title: 'Milancelos',
  //   description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
  //   buttonText: 'Shop Now',
  // },
];


export default function HomeCarousel() {
  const theme = useTheme();

  return (
    
      <Swiper
       
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} style={{textAlign:'center', }}  >
          {/* <img src={slide.imageSrc} alt="image" /> */}
          <Box sx={{width:'100%', height:{xs:'40vh', sm:'60vh', md:'50vh', lg:'100vh'}, position:'relative'}} >
            <Image src={slide.imageSrc} alt='image' layout='fill' objectFit='center'  />
          </Box>
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              textAlign: 'center',
              color: 'white',
              padding: theme.spacing(2),
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              borderRadius: theme.shape.borderRadius,
            }}
          >
            <Typography variant="subtitle1" sx={{ fontSize: { xs: '1rem', sm: '1.5rem', md: '2rem' } }}>
              {slide?.subTitle && slide.subTitle}
            </Typography>
            <Typography variant="h3" sx={{ fontSize: { xs: '1rem', sm: '3rem', md: '4rem' } }}>
              {slide.title}
            </Typography>
            <Typography variant="body1" sx={{ fontSize: { xs: '0.5rem', sm: '0.7rem', md: '1rem' } }}>
              {slide.description}
            </Typography>
            <Grid container spacing={2} justifyContent="center">
              <Grid item>
                <Button variant="outlined" sx={{color:'white'}}>
                  {slide.buttonText}
                </Button>
              </Grid>
            </Grid>
          </Box>
        </SwiperSlide>
        ))}
      </Swiper>
  

  );
}
