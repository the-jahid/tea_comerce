import { Grid, List, Typography, Box, ListItemText } from '@mui/material';
import React from 'react';
import { looseLeafTeaitems } from '../navbarutils';
import Image from 'next/image';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { toggleMenuState } from '@/store/showMenuSlice';

const LooseLeafTeaMegaMenu = () => {

  const dispatch = useDispatch();

  return (
    <Grid container spacing={2} justifyContent="center" columns={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 12 }}>
      {looseLeafTeaitems.map((item, index) => (
        <Grid key={index} item xs={12} sm={6} md={4} lg={3} xl={2.3}>
          <Typography onClick={() => dispatch(toggleMenuState())} sx={{ cursor:'pointer',  fontWeight: 'bold', margin: '10px 0' }}>{item.name}</Typography>
          <Box sx={{  flexGrow: 1, height: '200px', position: 'relative' }}>
            <Image src={item.image} layout="fill" objectFit="cover" alt="dark" />
          </Box>
          <List>
            {item.items.map((lstitem, index) => (
              <Link href={`/all_items/looseleaftea/${lstitem}`}><ListItemText onClick={() => dispatch(toggleMenuState())} key={index}>{lstitem}</ListItemText></Link>
            ))}
          </List>
        </Grid>
      ))}
    </Grid>
  );
};

export default LooseLeafTeaMegaMenu;