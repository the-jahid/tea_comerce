import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider, Grid, Input, MenuItem, Select, Stack, TextField, Typography } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import { countrylist } from './countrylist';

const AddInfo = ({ info, setInfo }) => {
    const { control, handleSubmit, reset, formState: { errors } } = useForm({
        defaultValues: {
          country: '',
          state: '',
          city: '',
          postcode: ''
        }
      });

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  const handleClose = () => {
    setInfo(false);
  };

  return (
    <Dialog open={info} onClose={handleClose}>
      <DialogTitle>Add Shipping Info</DialogTitle>
      <DialogContent>
        <form onSubmit={handleSubmit(onSubmit)} >

<Controller
  name="country"
  control={control}
  render={({ field }) => (
    <Select fullWidth {...field}>
      {countrylist.map((item) => (
        <MenuItem key={item.name} value={item.name}>
          {item.name}
        </MenuItem>
      ))}
    </Select>
  )}
/>

          <Controller
            name="state"
            control={control}
            rules={{ required: true }}
            render={({ field }) => <TextField
              {...field}
              autoFocus
              margin="dense"
              label="State/province"
              type="text"
              fullWidth
              variant="standard"
              error={Boolean(errors.state)}
              helperText={
                errors.state ? "State is required" : " "
              }
            />}
          />
          <Controller
            name="city"
            control={control}
            rules={{ required: true }}
            render={({ field }) => <TextField
              {...field}
              autoFocus
              margin="dense"
              label="Suburb/city"
              type="text"
              fullWidth
              variant="standard"
              error={Boolean(errors.city)}
              helperText={
                errors.city ? "City is required" : " "
              }
            />}
          />
          <Controller
            name="postcode"
            control={control}
            rules={{ required: true }}
            render={({ field }) => <TextField
              {...field}
              autoFocus
              margin="dense"
              label="Zip/postcode"
              type="number"
              fullWidth
              variant="standard"
              error={Boolean(errors.postcode)}
              helperText={
                errors.postcode ? "Postcode is required" : " "
              }
            />}
          />
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button type='submit' >Estimate Shipping</Button>
          </DialogActions>
        </form>
      </DialogContent>
    </Dialog>
  )
}

export default AddInfo