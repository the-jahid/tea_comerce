import { Button, Card, CardActions, CardContent, CardMedia, Grid, List, ListItem, ListItemText, Typography } from '@mui/material';
import Container from '@mui/material/Container';
import { Shopby, megaMenuListItems } from '../navbarutils';
import SwiperSlider from '../SwiperSlider';
import { MegamenuItems } from '../../random/mega_menu_items';

const TeasMegamenu = () => {
  // Render the component
  return (
    <Container maxWidth="xl" sx={{ py: 8 }}>
      <Grid container spacing={4} alignItems="center">
        {/* Use Grid item to create a column for Shop by */}
        <Grid item xs={12} md={2} lg={2} sx={{ color: 'black', bgcolor: 'grey', borderRadius: '10px' }}>
          <List sx={{ borderRadius: '10px' }}>
            <ListItemText sx={{ fontWeight: 'bold', ml: 1 }}>{Shopby.name}</ListItemText>
            {Shopby.listItems.map((item, index) => (
              <ListItem key={item.id}>
                <ListItemText>{item.name}</ListItemText>
              </ListItem>
            ))}
          </List>
        </Grid>

        {/* Use Grid item to create a column for Megamenu items */}
        <Grid item xs={12} md={4} lg={4}>
          <MegamenuItems megaMenuListItems={megaMenuListItems} categoryName='teas' />
        </Grid>

        {/* Render the SwiperSlider component */}
        <Grid item xs={12} md={3} lg={2}>
          <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>Featured Products</Typography>
          <SwiperSlider />
        </Grid>

        {/* Render the featured product card */}
        <Grid item xs={12} md={12} lg={4}>
          <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <CardMedia
              component="img"
              alt="green iguana"
              image={'https://i.ibb.co/yFVh3Nh/young-woman-arranging-her-cake-shop.jpg'}
              sx={{ width: '100%', height: '100%' }}
            />
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography gutterBottom variant="h5" component="div">
                Featured Product
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Quisque eget turpis vel purus malesuada aliquam de cosmopolis.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="medium">Shop now</Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default TeasMegamenu;