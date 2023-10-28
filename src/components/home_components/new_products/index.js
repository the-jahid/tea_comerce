'use client'
import { Box, Container, Typography } from "@mui/material"

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import { useSelector } from "react-redux";
import ProductCard from "@/components/shared_components/random/product_card";

const styles = {
  swiper: {
    width: '100%',
    height: '100%',
  },
  'swiper-slide': {
    textAlign: 'center',
    fontSize: '18px',
    background: '#fff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  'swiper-slide img': {
    display: 'block',
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  'swiper-pagination-bullet': {
    width: '20px',
    height: '20px',
    textAlign: 'center',
    lineHeight: '20px',
    fontSize: '12px',
    color: '#000',
    opacity: 1,
    background: 'rgba(0, 0, 0, 0.2)',
  },
  'swiper-pagination-bullet-active': {
    color: '#fff',
    background: '#007aff',
  },
};

const NewProducts = () => {

  const items = useSelector((state) => state.allproducts.items  )

  return (
    <Container maxWidth="xl">
      <Typography variant="h4" textAlign="center" sx={{ padding: 4 }}>
        New Products
      </Typography>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          960: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1280: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }}
        pagination={{ clickable: true,  }}
        modules={[Pagination]}
        style={styles.swiper}
      >
        {items.slice(0, 9).filter((fil) => fil.tags.includes('New')).map((item) => (
            <SwiperSlide key={item.id} style={styles['swiper-slide']}>
              <Box sx={{ backgroundColor: 'white', p: 2 }}>
                <ProductCard item={item} />
              </Box>
            </SwiperSlide>
          ))}
      </Swiper>
    </Container>
  );
};

// const ProductCard = () => {
//   return (
//     <Card sx={{ maxWidth: 345 }}>
//       <CardMedia
//         sx={{ height: 140 }}
//         image="https://i.ibb.co/KqjWKtt/tea-10-56547-1608023396-1280-1280-48489.jpg"
//         title="green iguana"
//       />
//       <CardContent>
//         <Typography gutterBottom variant="h5" component="div">
//           Lizard
//         </Typography>
//         <Typography variant="body2" color="text.secondary">
//           Lizards are a widespread group of squamate reptiles, with over 6,000
//           species, ranging across all continents except Antarctica
//         </Typography>
//       </CardContent>
//       <CardActions>
//         <Button size="small">Share</Button>
//         <Button size="small">Learn More</Button>
//       </CardActions>
//     </Card>
//   )
// }

export default NewProducts;

