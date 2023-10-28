'use client'
import { Box, Grid, IconButton, List, Stack, Typography } from '@mui/material';
import React from 'react';
import { alpha } from '@mui/material/styles';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import InstagramIcon from '@mui/icons-material/Instagram';

const footerTable = [
  {id:1,
   name:'Shop',
   items:['Teas', 'Tea Ware', 'Loose Leaf Tea', 'Tea Bags', 'Popular Brands', 'Gift Certificates']
  },
  {id:2,
   name:'About Us',
   items:['Blog', 'Press Relases', 'About Us', 'Contact us ', 'Find A store ', 'Lookbook', 'Collection']
  },
  {id:3,
   name:'Customer Care',
   items:['Shipping', 'Returns Policy', 'Terms and conditions', 'Privacy policy ', 'Faqs ', 'Sitemap', 'Collection']
  },
]




const Footer = () => {
  return (

  

<Grid  container  sx={{ backgroundColor: alpha('#0000FF', 0.2), width:'100%', height:'full', padding:3, marginTop:'10px'}} >
      <Grid item xs={12} sm={6} md={3}    >
        <Typography variant='h6' >685 Market Street, <br /> San Francisco, <br /> CA 94105, United States</Typography>
        <Typography sx={{marginTop:'10px'}} variant='h6' >Call us: 1-800-000-8910</Typography>
        <Typography variant='h6' >Email: email@domain.com</Typography>

      </Grid>
      <Grid item xs={12} sm={6} md={6}>
        <Grid container columns={12} >
              {footerTable.map((items) => <Grid item xs={12} sm={6} md={4} >
                <Typography fontWeight={'bold'} variant='h5' >{items.name}</Typography>
                
                {items.items.map((item) => <Typography variant='h6' >{item}</Typography>    )}
                
              </Grid>  )}
        </Grid>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Typography variant="h6"  fontWeight='bold' >Follow Us On</Typography>
        <Stack direction='row' >
              <IconButton>
                <FacebookIcon />
              </IconButton>
              <IconButton>
                <TwitterIcon />
              </IconButton>
              <IconButton>
               <PinterestIcon />
              </IconButton>
              <IconButton>
                <InstagramIcon />
              </IconButton>
             
        </Stack>
      </Grid>
    </Grid>


 
  );
};

export default Footer;