'use client'
import { Box, Typography } from "@mui/material"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';


// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

const ImageItems = [
  'https://i.ibb.co/GdWjWyY/carli-jeen-15-YDf39-RIVc-unsplash-min.jpg',
  'https://i.ibb.co/gVtmQ3g/abuzar-xheikh-VLNjrp-JSKDw-unsplash-min.jpg',
  'https://i.ibb.co/bWRRLfR/debby-hudson-FO4gzq-I2t84-unsplash-min.jpg',
  'https://i.ibb.co/y5MG8MT/drew-jemmett-q-Ec-Wgr-TG578-unsplash-min.jpg',
  'https://i.ibb.co/FnY0F2B/ioann-mark-kuznietsov-S6e-V1-Uz5-A8-unsplash-min.jpg',
  'https://i.ibb.co/4JfLsfr/jason-leung-Nkdn7qd-Bq-AM-unsplash-min.jpg',
  'https://i.ibb.co/cDtbTk6/joanna-kosinska-XA7q-FZdr-Wv8-unsplash-min.jpg',
  'https://i.ibb.co/X2J3Rs3/manki-kim-L82-kk-EBOd0-unsplash-min.jpg',
  'https://i.ibb.co/Yk7GDCw/massimo-rinaldi-Fmg-Z5xz-DG-s-unsplash-min.jpg',
  'https://i.ibb.co/X3jcsj0/oriento-MCN7x-TTe-Akw-unsplash-min.jpg',
  'https://i.ibb.co/M8T7vTR/oleg-guijinsky-2-CRg-KZAy-PXg-unsplash-min.jpg',

]



export default function ImageGallery() {
  return (
    <Box>
      <Box sx={{ pr: { xs: 0, md: 4 }, pb: { xs: 4, md: 0 } }}>
        <Typography align="center" variant="h3" sx={{ mb: 2 }}>Image Gallery</Typography>
        <Typography align="center" variant="subtitle1" sx={{ mb: 4 }}>You can change the image gallery block to instagram gallery apps</Typography>
      </Box>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
        style={{
          width:'100%',
          paddingTop:'50px',
          paddingBottom:'50px'
        }}
      >
        {ImageItems.map((item , index) => <SwiperSlide key={index} style={{
          backgroundPosition: 'center',
          backgroundSize:'cover',
          width:'300px',
          height:'300px'

        }} >
          <img src={item} alt="mine" />
        </SwiperSlide> )}
      </Swiper>
    </Box>
  );
}
