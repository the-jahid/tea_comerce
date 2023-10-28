'use client'
import { Box, Button, Container, Typography } from "@mui/material"
import Image from "next/image"

const HaloBanner = () => {
  return (
    <Container maxWidth='xl' sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'column', md: 'row' }, alignItems: 'center', py: 4 }}>
      <Box sx={{ flex: 1, pr: { xs: 0, md: 4 }, pb: { xs: 4, md: 0 } }}>
        <Typography variant="h3" sx={{ mb: 2 }}>Excellent quality and taste.</Typography>
        <Typography variant="subtitle1" sx={{ mb: 4 }}>Destibulum laoreet an risus porta quisque hasellus blandit lacinia neque multrices de loremous</Typography>
        <Button variant="contained">Discover</Button>
      </Box>
      <Box sx={{ flex: 1, position: 'relative', width:'100%',  minHeight: '50vh', maxHeight: '80vh' }}>
        <Image src={'https://i.ibb.co/Sd41Ryf/close-up-hands-holding-tea-glass.jpg'} layout="fill" objectFit="cover" />
      </Box>
    </Container>
  )
}

export default HaloBanner
