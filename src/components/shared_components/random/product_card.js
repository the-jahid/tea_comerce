import { Box, Button, Card, CardActions, CardContent, CardMedia, IconButton, Stack, Tooltip, Typography } from '@mui/material';
import Image from 'next/image';
import React, { useState } from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { toggleSearchState } from '@/store/showMenuSlice';

const ProductCard = ({ item }) => {

  const { Images, title, subtitle, newPrice, oldPrice } = item;
  const [showButton, setShowButton] = useState(false);
  const dispatch = useDispatch();

  const handleCardClick = () => {
    dispatch(toggleSearchState('cardAction'));
  };

  return (
    <Link href={{ pathname: '/product_card_details', query: { item: JSON.stringify(item) } }}>
      <Card sx={{ cursor: 'pointer' }} onClick={handleCardClick}>
        <Box sx={{ position: 'relative', display: 'flex', justifyContent: 'space-between', width: '100%', height: '300px' }}>
          <Image src={Images[0].link} fill alt={title} />
          <Box>
              <Tooltip title="Wishlist" placement="right-start">
                <IconButton>
                  <FavoriteBorderIcon />
                </IconButton>
              </Tooltip>
          </Box>
        </Box>
        <CardContent>
          <Typography gutterBottom variant="subtitle2" component="div">
            {subtitle}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="subtitle1">
            ${newPrice} <del>${oldPrice}</del>
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </Link>
  );
};

export default ProductCard;