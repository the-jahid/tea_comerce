'use client'
import { Container, Box } from '@mui/material';
import { SignIn } from '@clerk/clerk-react';


const SignInPage = () => {
  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
          padding:5
        }}
      >
        <SignIn />
      </Box>
    </Container>
  );
};

export default SignInPage;

