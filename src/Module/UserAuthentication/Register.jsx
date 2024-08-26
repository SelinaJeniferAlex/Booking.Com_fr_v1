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
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Layout from '../Layout/Layout';

function Copyright(props) {
  return (
    <p style={{ textAlign: 'center', color: 'gray', marginTop: 5 }}>
      {'Copyright © '}
      <Link color="inherit" href="#">
        Booking.Com
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </p>
  );
}

const defaultTheme = createTheme();

export default function Demo() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    userName: '',
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    let tempErrors = {};
    tempErrors.firstName = formData.firstName ? "" : "First Name is required";
    tempErrors.lastName = formData.lastName ? "" : "Last Name is required";
    tempErrors.userName = formData.userName ? "" : "User Name is required";
    tempErrors.email = (/^[^\s@]+@[^\s@]+\.[^\s@]+$/).test(formData.email) ? "" : "Email is not valid";
    tempErrors.password = formData.password.length > 5 ? "" : "Password must be at least 6 characters long";

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
    if (validate()) {
      console.log("=================", formData);
  
      fetch("http://localhost:8080/user/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData)
      })
        .then(response => response.json())
        .then(data => {
          console.log("Success:", data);
          toast.success('Registration Successful');
        })
        .catch((error) => {
          console.error("Error:", error);
          toast.error('Registration Failed');
        });
    } else {
      console.log("Validation failed");
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Layout />
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

          <h1>Sign up</h1>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  autoFocus
                  error={!!errors.firstName}
                  helperText={errors.firstName}
                  inputProps={{ maxLength: 25 }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  autoComplete="family-name"
                  error={!!errors.lastName}
                  helperText={errors.lastName}
                  inputProps={{ maxLength: 25 }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="userName"
                  label="User Name"
                  name="userName"
                  value={formData.userName}
                  onChange={handleInputChange}
                  autoComplete="userName"
                  error={!!errors.userName}
                  helperText={errors.userName}
                  inputProps={{ maxLength: 25 }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  autoComplete="email"
                  error={!!errors.email}
                  helperText={errors.email}
                  inputProps={{ maxLength: 40 }}

                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  autoComplete="new-password"
                  error={!!errors.password}
                  helperText={errors.password}
                  inputProps={{ maxLength: 20 }}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, bgcolor: '#28387E' }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="center">
              <Grid item sx={{ mt: 2, mb: 2 }}>
                <Link component={RouterLink} to="/log" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright />
      </Container>
      <ToastContainer />
    </ThemeProvider>
  );
}
