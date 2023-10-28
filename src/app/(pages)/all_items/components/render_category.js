import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {  useState } from 'react';
import { useDispatch } from 'react-redux';
import { setItemsByCategory } from '@/store/page_contentSlice';

export const RenderCategory = ({category, categoryInfo}) => {

  const selected = category.value === categoryInfo[0]
  const dispatch = useDispatch();

  if(selected) {
    dispatch(setItemsByCategory(category.name))
  }

  const [expanded, setExpanded] = useState(selected)

  
  const handleChange = () => {
    setExpanded(prevExpanded => !prevExpanded);
  };

  const handleCategoryChange = (name) => {
    setExpanded(false)
    dispatch(setItemsByCategory(name))
  } 


  return (
    <Accordion expanded={expanded} key={category.name}>
      <AccordionSummary  onClick={handleChange} expandIcon={<ExpandMoreIcon />}   >
        <Typography onClick={ () => handleCategoryChange(category.name)} >{category.name}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        {category.categoryItems.map((subcategory) => {

          const selected2 = subcategory.name === categoryInfo[1]
          const [expanded2, setExpanded2] = useState(selected2)

          const handleSubChange = () => {
            setExpanded2(prevExpanded => !prevExpanded);
          };

          const handleSubCategoryChange = (name) => {
            setExpanded2(false)
          }

          return (<Accordion expanded={expanded2} key={subcategory.name}>
            <AccordionSummary onClick={handleSubChange} expandIcon={<ExpandMoreIcon />}>
              <Typography onClick={ () => handleSubCategoryChange(subcategory.name)} >{subcategory.name}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              {subcategory.listItems.map((item) => (
                <Typography key={item}>{item}</Typography>
              ))}
            </AccordionDetails>
          </Accordion>)
        } )}
      </AccordionDetails>
    </Accordion>
  );
};