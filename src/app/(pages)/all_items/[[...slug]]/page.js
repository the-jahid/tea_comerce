'use client'
import { Box, Button, Container } from '@mui/material';
import React from 'react';

import { useDispatch } from 'react-redux';
import {  showMore } from '@/store/page_contentSlice';
import Sidebar from '../components/items_sidebar';
import PageContent from '../components/page_content';

const AllItems = ({params}) => {

  const dispatch = useDispatch();

 

  return (
    <Container maxWidth="xl" sx={{ display:'flex'}} >
        <Box sx={{flex:4, display:{xs:'none' , sm:'none', md:'block' }}} >
            <Sidebar categoryInfo={params.slug} />
        </Box>
        <Box sx={{flex:8}}>
          <PageContent />
          <Button onClick={ () => dispatch(showMore())} >Show More</Button>
        </Box>
    </Container>
  )
}

export default AllItems