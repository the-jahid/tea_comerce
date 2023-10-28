import { toggleMenuState } from "@/store/showMenuSlice";
import { Grid, List, ListItemText, Typography } from "@mui/material"
import Link from "next/link"
import { useDispatch } from "react-redux"

export const MegamenuItems = ({megaMenuListItems, categoryName}) => {

   const dispatch = useDispatch();

    return (
         <Grid container columns={3} sx={{ padding:'10px'}} >
                   {megaMenuListItems.map((items) =>  
                 <Grid key={items.name} item md={1.5} lg={1}>
                   <Link href={`/all_items/${categoryName}`} > <Typography onClick={() => dispatch(toggleMenuState())}  variant='text' sx={{ cursor:'pointer', fontWeight:'bold'}} >{items.name}</Typography></Link>
                     <List sx={{marginLeft:2}} >
                       {items.listItems.map((item) => 
                      <Link href={`/all_items/${categoryName}/${items.name}`} > <ListItemText onClick={() => dispatch(toggleMenuState())} key={item}  sx={{cursor:'pointer'}}  >{item}</ListItemText></Link> )}
                     </List>
                 </Grid> )}
         </Grid>
    )
   }