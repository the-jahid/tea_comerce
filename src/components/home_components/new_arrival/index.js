'use client'
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from "@mui/material";
import React from "react";

const newArrivalItems = [
  {
    title: "Black Tea Collection",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit",
    img: "https://i.ibb.co/chv1Kyp/cup-tea-near-cloth-with-leaves.jpg",
  },
  {
    title: "East Tea Collection",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit",
    img: "https://i.ibb.co/3TTVTnc/teapot-with-apple-copy-space.jpg",
  },
];

const NewArrival = () => {
  return (
    <Container maxWidth="xl" sx={{ padding: "2rem" }}>
      <Typography
        variant="h4"
        color="black"
        sx={{ textAlign: "center", my: 4 }}
      >
        New arrivals
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 3,
        }}
      >
        {newArrivalItems.map((item, index) => (
          <Card sx={{ position: "relative", width: "100%" }} key={index}>
            <CardMedia
              component="img"
              alt={item.title}
              image={item.img}
              sx={{ height: { xs: 240, md: 360 } }}
            />
            <CardContent
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography
                gutterBottom
                variant="h3"
                component="div"
                sx={{
                  color: "white",
                  fontSize: { xs: "2rem", md: "3" },
                  textAlign: "center",
                  textShadow: "2px 2px 4px #000000",
                }}
              >
                {item.title}
              </Typography>
              <Typography
                variant="subtitle1"
                color="white"
                sx={{
                  fontSize: { xs: "0.5rem", md: "0.8rem" },
                  textAlign: "center",
                  textShadow: "2px 2px 4px #000000",
                }}
              >
                {item.description}
              </Typography>
              <CardActions
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: "1rem",
                }}
              >
                <Button variant="outlined" size="small">Shop Now</Button>
              </CardActions>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Container>
  );
};

export default NewArrival;
