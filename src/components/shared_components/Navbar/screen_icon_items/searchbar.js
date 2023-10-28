'use client'
import { Box, Button, Chip, Container, Grid, IconButton, TextField, Typography } from '@mui/material';
import React, { use } from 'react';

import { featuredProduct, topSearches } from '../navbarutils';
import { SwiperCard } from '../SwiperSlider';
import SearchIcon from '@mui/icons-material/Search';

import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearPreviousResult, setsearchItems } from '@/store/allProductSlice';
import ProductCard from '../../random/product_card';
import { teaItems } from '@/store/dummy_text/teastext';


const Searchbar = () => {

  const [searchText, setSearchText] = useState('');
  const dispatch = useDispatch();
  const items = useSelector((state) => state.allproducts.resultItems);
  
  const hanldeSearch = (text) => {
    dispatch(setsearchItems(text.toLowerCase()));
  } 

  const products = items.length === 0 ? teaItems.slice(0, 5) :  items; 

  return (
    <Container sx={{ mt: 2, mb: 2 }}  >
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
        <TextField  onChange={(e) => setSearchText(e.target.value) } sx={{ flexGrow: 1, mr: 1 }} id="standard-basic" label="Search for a product" variant="standard" />
        <IconButton onClick={() => hanldeSearch(searchText)} >
          <SearchIcon />
        </IconButton>
      </Box>
      <Grid container spacing={2}>
      <Grid item xs={12} md={5} lg={5}>
          <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', mb: 2 }}>
            <Typography variant="h6" sx={{ mb: 1 }}>Top Searches</Typography>
            <Grid container spacing={1}>
              {topSearches.map((search, index) => (
                <Grid item key={index}>
                  <Chip icon={<SearchIcon />} label={search.label} variant="outlined" />
                </Grid>
              ))}
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={12} md={7} lg={7}>
          <Grid container spacing={2} sx={{maxHeight:'70vh', overflowY:'scroll'}}  >
            {products.map((item, index) => (
              <Grid item xs={12} sm={6} md={6} key={index}>
                <ProductCard item={item} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Searchbar;