
import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider, Grid,  Stack,  TextField,  Typography, } from '@mui/material';

export const GiftCertificate = ({giftCertificate, setgiftCertificate}) => {
   
 

  const handleClose = () => {
    setgiftCertificate(false);
  };

  return (
    <Dialog open={giftCertificate} onClose={ handleClose }>
    <DialogTitle>Add Gift Certificate</DialogTitle>
    <DialogContent>
      
      <TextField
        autoFocus
        margin="dense"
        id="name"
        label="Enter here"
        type="email"
        fullWidth
        variant="standard"
      />
    </DialogContent>
    <DialogActions>
      <Button onClick={ handleClose}>Cancel</Button>
      <Button onClick={ handleClose}>Subscribe</Button>
    </DialogActions>
  </Dialog>
  )
}






