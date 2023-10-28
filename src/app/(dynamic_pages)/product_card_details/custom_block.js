import { Box, Grid, Typography } from "@mui/material"
import { productCustomBlockItems } from "./dummytext"
import Image from "next/image"

const ProductCustomBlock = () => {
  return (
    <Grid container columns={12} >
    {productCustomBlockItems.map((item) => <Grid alignContent='center'  key={item.title} item xs={12} sm={6} md={3} lg={3} >
      
    <Box sx={{display:'flex', flexDirection:'column', alignItems:'center', padding:1}} >
      <Image src={item.icon}  width={128} height={128} />
      
      <Typography variant="h5" >{item.title}</Typography>
      <Typography>{item.description}</Typography>
    </Box>
    </Grid>)}
</Grid>
  )
}

export default ProductCustomBlock


