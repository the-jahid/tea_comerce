'use client'
import { SignUp } from "@clerk/clerk-react";
import { Box } from "@mui/material";


export default function SignUpPage() {
  return <Box
  sx={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    padding:5
  }}
  >
    <SignUp afterSignUpUrl='/' redirectUrl='/'  />
  </Box>
}



