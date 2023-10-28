'use client'
import { Container, Typography } from '@mui/material';
import { Avatar, Box, Card, CardContent, CardHeader, Divider, Rating } from '@mui/material';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';

import { customerReviews } from '../utils';



const CustomerReviews = () => {
  return (
    <Container maxWidth='md' sx={{ p: 4 }}>
      <Typography align="center" variant="h3" sx={{ mb: 2 }}>Customer Review</Typography>
      <Typography align="center" variant="subtitle1" sx={{ mb: 2 }}>Swipe left or right to see the Review</Typography>
      <Box sx={{width:'67vw', height:'100%'}}  >
        <Swiper
          effect={'cards'}
          grabCursor={true}
          modules={[EffectCards]}
          perSlideRotate={4}
        >
          {customerReviews.map((review) => (
            <SwiperSlide key={review.id}>
              <ReviewCard name={review.reviewer} avatar={review.reviewer_avatar_url} rating={review.rating} date={review.date_created} comment={review.review} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Container>
  )
}

const ReviewCard = ({ name, avatar, rating, date, comment }) => {
  return (
    <Card sx={{  height: '100%', border: '2px solid black' }}>
      <CardHeader
        avatar={<Avatar src={avatar} />}
        title={name}
        subheader={date}
        action={<Rating value={rating} readOnly />}
      />
      <CardContent>
        <Typography variant="body1" gutterBottom>{comment}</Typography>
      </CardContent>
      <Divider />
      <Box sx={{ p: 2 }}>
        <Typography variant="caption" color="text.secondary">Was this review helpful?</Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
          <Box sx={{ mr: 1 }}>
            <Typography variant="caption" color="text.secondary">Yes</Typography>
          </Box>
          <Box sx={{ mr: 1 }}>
            <Typography variant="caption" color="text.secondary">No</Typography>
          </Box>
          <Box sx={{ flexGrow: 1 }}>
            <Divider orientation="vertical" />
          </Box>
          <Box sx={{ ml: 1 }}>
            <Typography variant="caption" color="text.secondary">Report</Typography>
          </Box>
        </Box>
      </Box>
    </Card>
  );
};

export default CustomerReviews;

