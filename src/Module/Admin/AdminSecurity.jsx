import * as React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AdminLayout from '../Layout/AdminLayout';

const defaultTheme = createTheme();

export default function AdminSecurity() {
  const [formData, setFormData] = useState({
    userName: '',
    password: '',
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

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

    if (validate()) {
      const { userName, password } = formData;

      if (userName === "Admin" && password === "12345") {
        // Redirect to the desired page
        navigate('/adminDash'); // Replace with the actual path you want to redirect to
      } else {
        alert("Access Denied");
      }
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <AdminLayout />
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
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
