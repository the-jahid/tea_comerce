"use client";

// Importing necessary components from MUI library and React
import {
  Container,
  Grid,
  Typography,
  Box,
  Rating,
  Stack,
  Button,
} from "@mui/material";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";
import ReviewForm from "./review_form";
import { useDispatch } from "react-redux";
import { addTocart } from "@/store/cartSlice";
import { useRouter } from "next/navigation";
import { productCustomBlockItems } from "./dummytext";
import ProductCustomBlock from "./custom_block";

// Component that displays the details of a product
const ProductCardDetails = ({ searchParams }) => {
  // Parsing the item from the search parameters
  const item = JSON.parse(searchParams.item);
  const {
    id,
    title,
    subtitle,
    rating_count,
    average_rating,
    total_sales,
    userReviews,
    oldPrice,
    newPrice,
    sku,
    upc,
    condition,
    giftWrapping,
    colors,
    shortDescription,
    Images,
    sizes,
  } = item;

  const [open, setOpen] = React.useState(false);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState(sizes[0]);
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const dispatch = useDispatch();
  const router = useRouter()

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // State variables for quantity and selected size

  // Event handler for changing the quantity
  const handleQuantityChange = (event) => {
    const newQuantity = parseInt(event.target.value);
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };

  const handleColorClick = (color) => {
    setSelectedColor(color);
  };

  // Event handler for increasing the quantity
  const handleQuantityIncrease = () => {
    setQuantity(quantity + 1);
  };

  // Event handler for decreasing the quantity
  const handleQuantityDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  // Event handler for selecting a size
  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  const handleCartSubmit = () => {
    const data = {
      id,
      title,
      subtitle,
      rating_count,
      average_rating,
      total_sales,
      userReviews,
      oldPrice,
      price:newPrice,
      sku,
      upc,
      condition,
      giftWrapping,
      shortDescription,
      Images,
      sizes,
      quantity,
      selectedSize,
      selectedColor,
      image:Images[0].link
    }
    
    dispatch(addTocart(data));
    router.push('/cart');
    
  };

  // Rendering the product details
  return (
    <Container
      maxWidth="xl"
      sx={{ height: "full", width: "100%", margin: "auto", padding: "2rem" }}
    >
      <Grid container columns={12}>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Box
            sx={{
              width: "100%",
              height: { xs: "300px", sm: "60vh", md: "70vh", lg: "90vh" },
            }}
          >
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              keyboard={{
                enabled: true,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Keyboard, Pagination, Navigation]}
              style={{ width: "100%", height: "100%" }}
            >
              {Images.map((image) => (
                <SwiperSlide
                  style={{
                    width: "100%",
                    height: "100%",
                    position: "relative",
                  }}
                >
                  <Image src={image.link} layout="fill" alt="image" />
                 
                </SwiperSlide>
              ))}
            </Swiper>
          </Box>
          <Box sx={{textAlign:'center', margin:'10px 0px'}} >
                    <Typography variant="h6" >Custom Cms Block</Typography>
                    <Typography>{shortDescription}</Typography>
             </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          {/* Product title and subtitle */}
          <Typography variant="subtitle1">{subtitle}</Typography>
          <Typography variant="h5">{title}</Typography>

          {/* Product rating and reviews */}
          <Stack
            direction={"row"}
            spacing={4}
            flexWrap={"wrap"}
            sx={{ padding: "1rem" }}
          >
            <Box>
              <Rating value={average_rating} disabled />
              {average_rating === 0 && (
                <Typography variant="p">No Reviews Yet</Typography>
              )}
            </Box>
            <Button onClick={handleClickOpen} variant="outlined">
              Write A review
            </Button>
            <Typography>15 Sold in last 15 hours</Typography>
          </Stack>

          {/* Product price */}
          <Stack sx={{ padding: "1rem" }} spacing={1}>
            <Typography variant="body1">
              {" "}
              Limited-time offer, end in:{" "}
            </Typography>
            <Typography variant="h6">
              ${newPrice} <del style={{ color: "red" }}>${oldPrice}</del>{" "}
            </Typography>
            <Typography variant="body1">
              You save ${oldPrice - newPrice}{" "}
            </Typography>
          </Stack>

          {/* Product details */}
          <Stack sx={{ padding: "1rem" }} spacing={1}>
            <Typography variant="body1"> SKU: {sku} </Typography>
            <Typography variant="body1"> UPC: {upc} </Typography>
            <Typography variant="body1"> condition: {condition} </Typography>
            <Typography variant="body1">
              Gift wrapping: {giftWrapping ? "option Available" : "None"}
            </Typography>
          </Stack>

          {/* Product colors */}
          <Stack
            direction="row"
            spacing={1}
            sx={{ flexWrap: "wrap", alignItems: "center", padding: "1rem" }}
          >
            <Typography variant="body1">Colors:</Typography>
            {colors.map((color) => (
              <Box
                key={color}
                sx={{
                  width: "38px",
                  height: "38px",
                  borderRadius: "50%",
                  border:
                    selectedColor === color
                      ? "2px solid black"
                      : "1px solid grey",
                  backgroundColor: color,
                  cursor: "pointer",
                  opacity: selectedColor === color ? 1 : 0.5,
                }}
                onClick={() => handleColorClick(color)}
              />
            ))}
          </Stack>

          {/* Product sizes */}
          <Stack
            sx={{ padding: "1rem" }}
            direction="row"
            alignItems="center"
            spacing={2}
            flexWrap={"wrap"}
          >
            <Typography variant="body1">Size: </Typography>
            {sizes.map((size) => (
              <Button
                key={size}
                variant={selectedSize === size ? "contained" : "outlined"}
                onClick={() => handleSizeClick(size)}
              >
                {size}
              </Button>
            ))}
          </Stack>

          {/* Product quantity */}
          <Stack
            sx={{ padding: "1rem" }}
            direction="row"
            spacing={1}
            alignItems="center"
            flexWrap={"wrap"}
          >
            <Typography variant="body1">Quantity:</Typography>
            <Box display="flex" alignItems="center">
              <Button variant="outlined" onClick={handleQuantityDecrease}>
                -
              </Button>
              <input
                type="number"
                value={quantity}
                onChange={handleQuantityChange}
                style={{ width: "50px", textAlign: "center" }}
              />
              <Button variant="outlined" onClick={handleQuantityIncrease}>
                +
              </Button>
            </Box>
          </Stack>

          {/* Product actions */}
          <Stack sx={{ padding: "1rem" }} spacing={2} direction={"row"}>
            {/* Your other components */}
            <Stack direction="row" spacing={2}>
              <Button
                variant="contained"
                color="primary"
                onClick={() =>
                  handleCartSubmit()
                }
              >
                Add to cart
              </Button>
              <Button variant="outlined" color="primary">
                Wishlist
              </Button>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
      <ReviewForm open={open} handleClose={handleClose} />
        
      {/* Product Custom Block */}

     <ProductCustomBlock />
   
      
    </Container>
  );
};

export default ProductCardDetails;
