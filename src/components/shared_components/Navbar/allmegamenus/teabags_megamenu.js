import { Box, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import SwiperSlider from '../SwiperSlider';

import {  megaMenuListItems } from '../navbarutils';
import { MegamenuItems } from '../../random/mega_menu_items';

const TeaBagsMegaMenu = () => {
  return (
    <Grid container spacing={2} columns={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 12 }}>
      <Grid item xs={12} md={6} lg={4}>
        <Box sx={{ flexGrow: 1, position: 'relative', height: '350px' }}>
          <Image src={'https://i.ibb.co/MsHVvxv/delicious-coffee-cup-with-plants.jpg'} layout="fill" objectFit="cover" alt='plants' />
        </Box>
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <MegamenuItems megaMenuListItems={megaMenuListItems} categoryName='teabags' />
      </Grid>
      <Grid item xs={12} md={6} lg={2}>
        <SwiperSlider />
      </Grid>
      <Grid item xs={12} md={6} lg={2}>
        <Typography variant="h6">Placeholder</Typography>
      </Grid>
    </Grid>
  );
};

export default TeaBagsMegaMenu;
