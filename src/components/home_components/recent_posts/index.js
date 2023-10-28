import { Box, Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Typography } from "@mui/material";
import React from "react";

const popularitems = [
  {
    title: ")olong teas",
    description:
      "Nullam aliquet vestibulum augue non varius, cras nec congue elitos lorem. Duis tristique del ante nec aliquam praesent urna tellus.",
    btnText: "Shop Oolong teas",
    img: 'https://i.ibb.co/zX0YRt8/arseniy-kapran-p99-ZKw-VGBRA-unsplash.jpg'
  },
  {
    title: "Matcha teas",
    description:
      "Nullam aliquet vestibulum augue non varius, cras nec congue elitos lorem. Duis tristique del ante nec aliquam praesent urna tellus.",
    btnText: "Shop Matcha teas",
    img: 'https://i.ibb.co/pZRhnhP/matcha-co-t2k-Afym-BHGY-unsplash.jpg'
  },
  {
    title: "Green teas",
    description:
      "Nullam aliquet vestibulum augue non varius, cras nec congue elitos lorem. Duis tristique del ante nec aliquam praesent urna tellus.",
    btnText: "Shop Green teas",
    img: 'https://i.ibb.co/5XDqbTW/matt-seymour-PVSCfkqc-MP4-unsplash.jpg'
  },
];

export const RecentPosts = () => {
  return (
    <Box>
      <Typography variant="h4" textAlign="center" sx={{padding:4}} >
        Recent Posts
      </Typography>
      <Grid container columns={12} >
        {popularitems.map((item, index) => <Grid key={index} item xs={12} md={6} lg={4} >
          <Card key={item.name}  >
            <CardMedia
              component="img"
              alt="green iguana"
              image={item.img}
              sx={{height:{xs:'30vh', md:'40vh', lg:'60vh'}}}
            />
            <CardContent  >
              <Typography gutterBottom variant="h5" component="div" fontWeight={'bold'} color={''} >
                {item.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
              {item.description}
              </Typography>
              <CardActions>
             
              <Button size="small">{item.btnText}</Button>
            </CardActions>
            </CardContent>
            
          </Card>
        </Grid>)}
      </Grid>
    </Box>
  );
};


