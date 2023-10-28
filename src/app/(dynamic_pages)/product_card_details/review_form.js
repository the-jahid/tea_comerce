import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { useForm, Controller } from "react-hook-form";
import {
  TextField,
  Grid,
  TextareaAutosize,
  Select,
  MenuItem,
  Typography,
} from "@mui/material";

// import Select from "react-select"

// Define a styled version of the Dialog component
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

// Define the ReviewForm component
export default function ReviewForm({ open, handleClose }) {
  // Use the useForm hook to manage form state
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);


  // Render the form using Material UI components
  return (
    <BootstrapDialog
      onClose={handleClose}
      aria-labelledby="customized-dialog-title"
      open={open}
    >
      <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
        Write a Review
      </DialogTitle>
      <IconButton
        aria-label="close"
        onClick={handleClose}
        sx={{
          position: "absolute",
          right: 8,
          top: 8,
          color: (theme) => theme.palette.grey[500],
        }}
      >
        <CloseIcon />
      </IconButton>
      <DialogContent dividers>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2}>
          <Grid item xs={12}>
              <Controller
                name="rating"
                control={control}
                defaultValue={0}
                render={({ field }) => (
                  <Select {...field} variant="outlined" fullWidth>
                    
                    {[0, 1, 2, 3, 4, 5].map((value) => (
                      <MenuItem key={value} value={value}>
                        {value} Star{value > 1 ? "s" : ""}
                      </MenuItem>
                    ))}
                  </Select>
                )}
              />
            </Grid>
            <Grid item xs={12}>
              {/* Use the Controller component to manage the state of the Name field */}
              <Controller
                name="review"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Review"
                    fullWidth
                    multiline
                    rows={4}
                    error={Boolean(errors.review)}
                    helperText={errors.review ? "Review is required" : ""}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12}>
              {/* Use the Controller component to manage the state of the Review Subject field */}
              <Controller
                name="reviewsubject"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    id="reviewSubject"
                    label="Review Subject"
                    variant="outlined"
                    fullWidth
                    error={Boolean(errors.reviewsubject)}
                    helperText={
                      errors.reviewsubject ? "Review Subject is required" : " "
                    }
                  />
                )}
              />
            </Grid>
            <Grid item xs={12}>
              {/* Use the Controller component to manage the state of the Comments field */}
              <Controller
                name="comments"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label='Comments'
                    error={Boolean(errors.comments)}
                    helperText={
                      errors.comments ? "Comment is required" : " "
                    }
                    style={{
                      width: "100%",
                     
                    }}
                  />
                )}
              />
            </Grid>
          </Grid>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button type="submit">Submit</Button>
          </DialogActions>
        </form>
      </DialogContent>
    </BootstrapDialog>
  );
}
