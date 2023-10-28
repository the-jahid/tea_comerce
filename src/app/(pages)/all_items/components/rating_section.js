import { Box, Rating, Stack, Typography } from "@mui/material";

 export const RatingSection = () => {
    const rating = [1,2,3,4];

      return (
          <Box>
              {rating.map((rate) => <Stack direction={'column'} >
                <Typography variant="subtitle2" sx={{cursor:'pointer'}} ><Rating name="read-only" value={rate} readOnly /> & UP</Typography>
              </Stack> )}
          </Box>
      )
  };