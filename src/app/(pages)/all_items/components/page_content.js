"use client";
import {
  Box,
  Typography,
  Select,
  MenuItem,
  Stack,
  Button,
  Popover,
  useMediaQuery,
  Grid,
  IconButton,
} from "@mui/material";
import GridViewIcon from "@mui/icons-material/GridView";
import ViewListIcon from "@mui/icons-material/ViewList";
import AppsIcon from '@mui/icons-material/Apps';
import { useState } from "react";
import Sidebar from "./items_sidebar";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "@/components/shared_components/random/product_card";
import { changeProductPerpage, setsortItems } from "@/store/page_contentSlice";

const PageContent = () => {
  const dispatch = useDispatch();

  const [anchorEl, setAnchorEl] = useState(null);
  const isMediumScreen = useMediaQuery((theme) => theme.breakpoints.down("md"));
  const [productsPerpage, setProductsPerpage] = useState(9);

  const handleProductsPerPageChange = (event) => {
    setProductsPerpage(event.target.value);
    dispatch(changeProductPerpage(event.target.value));
  };
  const [sortBy, setSortBy] = useState("all");

  const handleSortByChange = (event) => {
    setSortBy(event.target.value);
    dispatch(setsortItems(event.target.value))
  };

  const sortByOptions = [
    {value:'all', label:'All Items'},
    { value: "featured", label: "Featured Items" },
    { value: "newest", label: "Newest Items" },
    { value: "bestselling", label: "Best Selling" },
    { value: "atoz", label: "Alphabet: A to Z" },
    { value: "ztoa", label: "Alphabet: Z to A" },
    { value: "priceasc", label: "Price: Ascending" },
    { value: "pricedesc", label: "Price: Descending" },
  ];

  const productsPerPageOptions = [
    { value: 9, label: "9 products Per Page" },
    { value: 12, label: "12 products Per Page" },
    { value: 18, label: "18 products Per Page" },
    { value: 24, label: "24 products Per Page" },
    { value: 30, label: "30 products Per Page" },
  ];

  const pagecontentItems = useSelector((state) => state.pagecontentItems);
  const { items, itemsperPage } = pagecontentItems;

  

  return (
    <Box sx={{ width: "100%" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          padding:2
        }}
      >
        <Box>
          <IconButton
            sx={{
              cursor: "pointer",
              display: { md: "none", lg: "none", xl: "none" },
            }}
            onClick={(e) => setAnchorEl(e.currentTarget)}
          >
            <AppsIcon />
          </IconButton>
          <Popover
            open={Boolean(anchorEl)}
            anchorEl={anchorEl}
            onClose={() => setAnchorEl(null)}
            PaperProps={{
              style: {
                width: "100%",
                marginTop: "60px",
                display: isMediumScreen ? "block" : "none",
              },
            }}
          >
            <Sidebar categoryInfo={{value:'s'}} />
          </Popover>
        </Box>

        
        <Box>
          <Typography variant="subtitle2" sx={{ marginLeft: "auto" }}>
            Show
          </Typography>
          <Box>
            <Select
              sx={{ width: "100%" }}
              value={productsPerpage}
              onChange={handleProductsPerPageChange}
            >
              {productsPerPageOptions.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </Select>
          </Box>
        </Box>
        <Box>
          <Typography variant="subtitle2" sx={{ marginLeft: "auto" }}>
            Sort By:
          </Typography>
          <Select value={sortBy} onChange={handleSortByChange}>
            {sortByOptions.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
        </Box>
      </Box>
      <Grid container justifyContent="center" spacing={2} >
        {items.slice(0, itemsperPage).map((item, index) => (
          <Grid key={index} item xs={12} sm={6} md={4} lg={4}>
            <ProductCard item={item} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default PageContent;
