import * as React from 'react';
import { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import { Link as RouterLink } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Layout from '../Layout/Layout';

function Copyright(props) {
  return (
    <p style={{ textAlign: 'center', color: 'gray', marginTop: 12, marginBottom: 4 }}>
      {'Copyright © '}
      <Link color="inherit" href="#">
        Booking.Com
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </p>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignIn() {

  const [formData, setFormData] = useState({
    userName: '',
    password: '',
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    let tempErrors = {};
    tempErrors.userName = formData.userName ? "" : "User Name is required";
    tempErrors.password = formData.password ? "" : "Password is required";

    setErrors(tempErrors);

    return Object.values(tempErrors).every(x => x === "");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("=================",formData);
  
    if(validate()){
      fetch("http://localhost:8080/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData) // Convert formData to JSON string
      })
        .then(response => response.json()) // Assuming the response is JSON
        .then(data => {
          console.log("Success:", data);
          if(data == true)
            alert("Logged in successfully")
          else
            alert("Login failed")
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
        <Layout/>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 12,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: '#28387E' }}>
            <LockOutlinedIcon />
          </Avatar>
          <h1>Sign in</h1>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="userName"
              label="User Name"
              name="userName"
              autoComplete="userName"
              onChange={handleInputChange}
              autoFocus
              inputProps={{ maxLength: 25 }}
              error={!!errors.userName}
              helperText={errors.userName}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={handleInputChange}
              inputProps={{ maxLength: 20 }}
              error={!!errors.password}
              helperText={errors.password}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, bgcolor: '#28387E' }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link component={RouterLink} to='/reg' variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright />
      </Container>
    </ThemeProvider>
  );
}
