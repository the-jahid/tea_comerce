'use client'
import * as React from 'react';
import Typography from '@mui/material/Typography';
import { Box, Accordion, AccordionSummary, AccordionDetails, List, ListItem, Checkbox, ListItemText } from '@mui/material';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useDispatch } from 'react-redux';


export const RenderFilterCategory = (category) => {

    const [expanded, setExpanded] = React.useState(false);
  
    const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };
  
    return (
      <Accordion key={category.name} onChange={handleChange(category.name)}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls={`${category.name}-content`} id={`${category.name}-header`}>
          <Typography>{category.name}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {category.component ? (
            <Box>{category.component}</Box>
          ) : (
            <List sx={{ width: '100%' }}>
              {category.items.map((item) => {
  
                const [isChecked, setisChecked] = React.useState(false);
                const dispatch = useDispatch();
                const handleCheckbox = (checked, itemName, categoryName, colorCode) => {
                  setisChecked(checked)
  
                  const filteritemstext = {
                    checked,
                    categoryName,
                    itemName,
                    colorCode
                  }
  
                  dispatch(setfilterItems(filteritemstext))
                }
  
                const itemName = item.colorName ? item.colorName : item
  
  
                return (
                  <ListItem key={itemName} sx={{ display: 'flex' }}>
                    <Checkbox checked={isChecked} onChange={(event) => handleCheckbox(event.target.checked, itemName, category.name, item.colorCode)} />
                    <ListItemText primary={itemName} />
                  </ListItem>
                )
              })}
            </List>
          )}
        </AccordionDetails>
      </Accordion>
    );
  };