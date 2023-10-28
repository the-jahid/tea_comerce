'use client'
import { setfilterItems } from "@/store/page_contentSlice";
import { useDispatch } from "react-redux";
import React from "react";
import { Box, Button, TextField } from "@mui/material";

const NumberTextBox = ({ min, max }) => {
    const [value, setValue] = React.useState(min);
    const dispatch = useDispatch();
  
    const handleChange = (event) => {
      let newValue = event.target.value;
      if (newValue < min) {
        newValue = min;
      } else if (newValue > max) {
        newValue = max;
      }
      setValue(newValue);
    };
  
    const handleUpdate = () => {

        const data = {
            checked:true,
            categoryName:'price',
            itemName:'price',
            value:Number(value)
        }

        dispatch(setfilterItems(data));
        
    };
  
    return (
      <Box sx={{display:'flex', alignItems:'center'}} >
        <TextField
          type="number"
          value={value}
          onChange={handleChange}
          inputProps={{ min, max }}
        />
        <Button variant="contained" color="primary" onClick={handleUpdate}>
          Update
        </Button>
      </Box>
    );
  };
  
  export default NumberTextBox;