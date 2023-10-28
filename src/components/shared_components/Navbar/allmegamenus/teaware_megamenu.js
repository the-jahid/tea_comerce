import { Grid, List, ListItemText, ListItem, Typography, Button, Box, Stack, Card, CardMedia, CardActions, CardContent } from '@mui/material';
import React from 'react';
import {  Shopby, megaMenuListItems, teawarecard, typesofTea } from '../navbarutils';
import Image from 'next/image';
import { MegamenuItems } from '../../random/mega_menu_items';

const TeaWareMegaMenu = () => {
  return (
    // Use Grid container to create a responsive layout with 12 columns
    <Grid container columns={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 12 }}>

      {/* Use Grid item to create a column for Shop by */}
      <Grid item xs={12} md={2} lg={2} sx={{ color: 'black', backgroundColor: 'grey' }}>
        <List sx={{ borderRadius: '10px' }}>
          <ListItemText primaryTypographyProps={{ style: { fontWeight: 'bold', marginLeft: 10 } }}>{Shopby.name}</ListItemText>
          {Shopby.listItems.map((item, index) => (
            <ListItem key={item.name}>
              <ListItemText>{item.name}</ListItemText>
            </ListItem>
          ))}
        </List>
      </Grid>
      {/* Use Grid item to create a column for Megamenu items */}
      <Grid item xs={12} md={4} lg={4}>
        <MegamenuItems megaMenuListItems={megaMenuListItems} categoryName='teaware' />
      </Grid>

      {/* Use Grid item to create a column for Types of Tea */}
      <Grid item xs={12} md={2} lg={2} sx={{ padding: 1 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant='subtitle2' sx={{ fontWeight: 'bold' }}>Types of Tea</Typography>
          <Button size='small' variant='outlined'>View All</Button>
        </Box>
        <Stack direction={{ xs: 'row', sm: 'column' }}>
  {typesofTea.map((item, index) => (
    <Box key={index} sx={{ flexGrow: 1, height: '100px', position: 'relative', margin: 1 }}>
      <Image src={item} layout="fill" objectFit="cover" alt={`tea-${index}`} />
    </Box>
  ))}
</Stack>
      </Grid>

      {/* Use Grid item to create a column for Teaware cards */}
      <Grid item xs={12} md={4} lg={4} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 3 }}>
        {teawarecard.map((item, index) => (
          <Card key={index} sx={{ flexGrow: 1, height: '80%', position: 'relative' }}>

            <CardMedia
              image={item.image}
              component={'image'}
              alt='card'
              sx={{ height: '100%', width: '100%' }}
            />
            <CardContent>
              <CardActions>
                <Button variant='outlined' sx={{ position: 'absolute', bottom: 0, border: '2px solid blue', color: 'black', fontWeight: 'bold', right: 0 }}>Shop Now</Button>
              </CardActions>
            </CardContent>
          </Card>
        ))}
      </Grid>
    </Grid>
  );
};

export default TeaWareMegaMenu;