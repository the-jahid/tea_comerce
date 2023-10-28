import React from 'react';
import { Button, Container, TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
import { css } from '@emotion/react';

const FormContainer = styled(Container)(({ theme }) => css`
  padding: ${theme.spacing(4)};
`);

const Form = styled('form')(({ theme }) => css`
  display: flex;
  flex-direction: column;
  align-items: center;
  & > * {
    margin: ${theme.spacing(2)};
    width: 100%;
    ${theme.breakpoints.up('sm')} {
      max-width: 400px;
    }
    ${theme.breakpoints.up('md')} {
      max-width: 600px;
    }
  }
`);

const LoginForm = () => {
  return (
    <FormContainer>
      <Form noValidate autoComplete="off">
        <TextField id="email" label="Email" variant="outlined" />
        <TextField id="password" label="Password" type="password" variant="outlined" />
        <Button variant="contained" color="primary">Login</Button>
        <Button variant="text" color="primary">Forgot Password</Button>
        <Button variant="text" color="primary">Create Account</Button>
      </Form>
    </FormContainer>
  );
};

export default LoginForm;