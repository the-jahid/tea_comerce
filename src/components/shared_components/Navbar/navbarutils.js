
import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import TeasMegamenu from "./allmegamenus/teas_megamenu";
import TeaWareMegaMenu from "./allmegamenus/teaware_megamenu";
import LooseLeafTeMegaMenu from "./allmegamenus/loose_leaf_tea_megamenu";
import TeaBagsMengaMenu from "./allmegamenus/teabags_megamenu";
import { Grid, List, ListItemText, Typography } from "@mui/material";
import TeasDrawer from "./nav_drawer/teas_drawer";
import TeaWareDrawer from "./nav_drawer/teaware_drawer";
import LooseLeafTeaDrawer from "./nav_drawer/looseleaftea_drawer";
import TeaBagsDrawer from "./nav_drawer/tea_bags_drawer";
import Link from "next/link";

export const pages = [
  {
    id: 1,
    name: "TEAS",
    value:'teas',
    linktext: "/teas",
    megamenu: true,
    megamenuComponent: <TeasMegamenu />,
    navItemsdrawer:<TeasDrawer />
  },
  {
    id: 2,
    name: "TEAWARE",
    value:'teaware',
    linktext: "/tea_ware",
    megamenu: true,
    megamenuComponent: <TeaWareMegaMenu />,
    navItemsdrawer:<TeaWareDrawer />
  },
  {
    id: 3,
    name: "LOOSE LEAF TEA",
    value:'looseleaftea',
    linktext: "/loose_leaf_tea",
    megamenu: true,
    megamenuComponent: <LooseLeafTeMegaMenu />,
    navItemsdrawer:<LooseLeafTeaDrawer />
  },
  {
    id: 4,
    name: "TEA BAGS",
    value:'teabags',
    linktext: "/tea_bags",
    megamenu: true,
    megamenuComponent: <TeaBagsMengaMenu />,
    navItemsdrawer:<TeaBagsDrawer />
  },
  
  { id: 5, name: "COLLECTION", linktext: "/collection" },
  { id: 6, name: "LOOKBOOK", linktext: "/lookbook" },
  { id: 7, name: "FAQS", linktext: "/faqs" },
];

export const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

export const megaMenuListItems = [
  {
    name: "Cosmopolis",
    listItems: [
      "All cosmopolis",
      "commodos",
      "fermentumous",
      "habitasse",
      "Sarcus",
    ],
  },
  {
    name: "Dincidunteros",
    listItems: [
      "All Dincidunteros",
      "Dincidunteros",
      "loremous Comodous",
      "Namdos Hempus",
      "Solutmades",
    ],
  },
  {
    name: "Loremica",
    listItems: [
      "All Loremica",
      "commodos",
      "fermentumous",
      "habitasse",
      "Sarcus",
    ],
  },
  {
    name: "Metropolitanos",
    listItems: [
      "All Metropolitanos",
      "commodos",
      "fermentumous",
      "habitasse",
      "Sarcus",
    ],
  },
  {
    name: "Sarcuso",
    listItems: [
      "All Sarcuso",
      "Cosmo Loremous",
      "Maecenas",
      "Malesuada",
      "Molateas",
    ],
  },
  {
    name: "Milancelos",
    listItems: [
      "All Milancelos",
      "Cosmo Loremous",
      "Maecenas",
      "Malesuada",
      "Molateas",
    ],
  },
];

export const Shopby = {
  name: 'Shop by',
  listItems: [
    { id: 1, name: 'Black Tea' },
    { id: 2, name: 'Green Tea' },
    { id: 3, name: 'Oolong Tea' },
    { id: 4, name: 'White Tea' },
    { id: 5, name: 'Herbal Tea' },
    { id: 6, name: 'Fruit Tea' },
    { id: 7, name: 'Rooibos Tea' },
    { id: 8, name: 'Matcha Tea' },
  ],
};





export const featuredProduct = [
  {
    name: "Magnis darturien meros laciniado",
    price: 9.9,
    offerPrice: 8.0,
    image: "https://i.ibb.co/qd7nLmL/tea-2-67414-1.jpg",
  },
  {
    name: "Magnis darturien meros laciniado",
    price: 9.9,
    offerPrice: 8.0,
    image: "https://i.ibb.co/qd7nLmL/tea-2-67414-1.jpg",
  },
  {
    name: "Loremous saliduar a cosmopolito",
    price: 9.9,
    offerPrice: 8.0,
    image: "https://i.ibb.co/8gG5Vj9/42-source-1599491274.jpg",
  },
  {
    name: "Loremous saliduar a cosmopolito",
    price: 9.9,
    offerPrice: 8.0,
    image: "https://i.ibb.co/8gG5Vj9/42-source-1599491274.jpg",
  },
];

export const typesofTea = [
  "https://i.ibb.co/mGM6bYg/mega-menu-brand-1.jpg",
  "https://i.ibb.co/hmJV03B/mega-menu-brand-4.jpg",
  "https://i.ibb.co/s2g16GC/mega-menu-brand-2.jpg",
  "https://i.ibb.co/mGM6bYg/mega-menu-brand-1.jpg",
];

export const teawarecard = [
  { id: 1, image: "https://i.ibb.co/S58Cqvc/decorative-tea-still-life.jpg" },
  {
    id: 2,
    image:
      "https://i.ibb.co/G5d5j12/bottom-view-cups-tea-cookies-cinnamons-anises-coffee-beans-bowl-dark.jpg",
  },
];

export const looseLeafTeaitems = [
  {
    name: "BLACK TEA",
    image: "https://i.ibb.co/VMxJkTR/hot-coffee-steams-wooden-table-indoors-generated-by-ai.jpg",
    items: ["Commodos", "Fermentumos", "Habitasse", "Milancelos", "Sarcus"],
  },
  {
    name: "ROOIBOUS",
    image: "https://i.ibb.co/KLtpYWK/home-decor-living-room-cup-tea-with-spring-flowers.jpg",
    items: ["Cosmo Loremous", "Maecenas", "Malesuada", "Molateas"],
  },
  {
    name: "GREEN TEA",
    image: "https://i.ibb.co/pzLzVDF/still-life-with-cup-tea-teapot-bouquet-tulips.jpg",
    items: ["Commodos", "Fermentumos", "Habitasse", "Milancelos", "Sarcus"],
  },
  {
    name: "HERBAL Tea",
    image: "https://i.ibb.co/YBJ0Wy5/autumn-composition-with-cups-coffee-leaves-white-background.jpg",
    items: ["Cosmo Loremous", "Maecenas", "Malesuada", "Molateas"],
  },
  {
    name: "I LOVE CHAI ",
    image: "https://i.ibb.co/NmpRFdS/cozy-still-life-with-glass-cup-tea-candles-knitted-element-blurred-background-copy-space.jpg",
    items: ["Commodos", "Fermentumos", "Habitasse", "Milancelos", "Sarcus"],
  },
];

// reusable component

export const MegamenuItems = ({megaMenuListItems}) => {

 return (
      <Grid container columns={3} sx={{ padding:'10px'}}  >
                {megaMenuListItems.map((items) =>  
              <Grid key={items.name} item md={1.5} lg={1}>
                  <Typography variant='text' sx={{fontWeight:'bold'}} >{items.name}</Typography>
                  <List sx={{marginLeft:2}} >
                    {items.listItems.map((item) => 
                   <Link href={'/all_items'} > <ListItemText key={item}  sx={{cursor:'pointer'}}  >{item}</ListItemText></Link> )}
                  </List>
              </Grid> )}
      </Grid>
 )
}

// reusable component ends

export const topSearches = [
  { label: 'Bc Templates' },
  { label: 'Woo commerce' },
  { label: 'Mist' },
  { label: 'How to be a frontend Developer' },
];



