'use client'
import * as React from 'react';
import Typography from '@mui/material/Typography';
import { Box} from '@mui/material';
import { FILTER_CATEGORIES, productCategories } from './utils';
import { RenderCategory } from './render_category';
import { RenderFilterCategory } from './render_filter_category';


export default function Sidebar({categoryInfo}) {

  return (
    <Box style={{ height: '100%', width: '100%', padding: '16px' }}>
      <Typography sx={{ padding: 2 }} variant='h5'>Categories</Typography>
      <Box>{productCategories.map((category) => <RenderCategory key={category.name} category={category} categoryInfo={categoryInfo}  />)}</Box>

      <Box style={{ marginTop: '16px' }}>
        <Box sx={{ marginBottom: 2 }} >
          <Typography variant='h5'>Refine By</Typography>
          <Typography>No Filter Applied</Typography>
        </Box>
        {FILTER_CATEGORIES.map(RenderFilterCategory)}
      </Box>
    </Box>
  );
}



