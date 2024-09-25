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
import HotelIcon from '@mui/icons-material/Hotel';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AdminCrudLayout from '../Layout/AdminCrudLayout';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import FormLabel from '@mui/material/FormLabel';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';

const defaultTheme = createTheme();

export default function HotelForm() {
  const [formData, setFormData] = useState({
    hotelName: '',
    grade: '',
    distance: '',
    meals: '',
    propertyType: '',
    facilities: [],
    image: null,
    place: '',
    placeType: '',
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    let tempErrors = {};
    tempErrors.hotelName = formData.hotelName ? "" : "Hotel Name is required";
    tempErrors.distance = formData.distance ? "" : "Distance is required";
    tempErrors.place = formData.place ? "" : "Place is required";
    tempErrors.grade = formData.grade ? "" : "Grade is required";
    tempErrors.meals = formData.meals ? "" : "Meals are required";
    tempErrors.propertyType = formData.propertyType ? "" : "Property Type is required";
    tempErrors.placeType = formData.placeType ? "" : "Place Type is required";
    tempErrors.facilities = formData.facilities.length > 0 ? "" : "At least one facility must be selected";

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

  const handleFacilityChange = (event) => {
    const { checked, value } = event.target;
    setFormData(prevData => {
      const newFacilities = checked
        ? [...prevData.facilities, value]
        : prevData.facilities.filter(facility => facility !== value);

      return {
        ...prevData,
        facilities: newFacilities
      };
    });
  };

  const handleImageChange = (event) => {
    setFormData(prevData => ({
      ...prevData,
      image: event.target.files[0]
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validate()) {
      const formDataToSubmit = new FormData();
      for (let key in formData) {
        formDataToSubmit.append(key, formData[key]);
      }

      fetch("http://localhost:8080/file/uploadHotels", {
        method: "POST",
        body: formDataToSubmit,
        dataType:"jsonp"
      })
        .then(response => response.json())
        .then(data => {
          console.log("Success:", data);
          toast.success('Hotel registered successfully');
        })
        .catch((error) => {
          console.error("Error:", error);
          toast.error('Hotel registration failed');
        });
    } else {
      console.log("Validation failed");
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <AdminCrudLayout />
      <Container component="main" maxWidth="sm">
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
            <HotelIcon />
          </Avatar>

          <h1>Register Hotel</h1>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="hotel-name"
                  name="hotelName"
                  required
                  fullWidth
                  id="hotelName"
                  label="Hotel Name"
                  value={formData.hotelName}
                  onChange={handleInputChange}
                  autoFocus
                  error={!!errors.hotelName}
                  helperText={errors.hotelName}
                  inputProps={{ maxLength: 50 }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="distance"
                  label="Distance"
                  name="distance"
                  value={formData.distance}
                  onChange={handleInputChange}
                  error={!!errors.distance}
                  helperText={errors.distance}
                  inputProps={{ maxLength: 50 }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth required error={!!errors.grade}>
                  <InputLabel id="grade-label">Grade</InputLabel>
                  <Select
                    labelId="grade-label"
                    id="grade"
                    name="grade"
                    value={formData.grade}
                    onChange={handleInputChange}
                    label="Grade"
                  >
                    <MenuItem value="Five Star">Five Star</MenuItem>
                    <MenuItem value="Four Star">Four Star</MenuItem>
                    <MenuItem value="Three Star">Three Star</MenuItem>
                  </Select>
                  {errors.grade && <p style={{ color: 'red' }}>{errors.grade}</p>}
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth required error={!!errors.meals}>
                  <InputLabel id="meals-label">Meals</InputLabel>
                  <Select
                    labelId="meals-label"
                    id="meals"
                    name="meals"
                    value={formData.meals}
                    onChange={handleInputChange}
                    label="Meals"
                  >
                    <MenuItem value="Self Catering">Self Catering</MenuItem>
                    <MenuItem value="Breakfast Included">Breakfast Included</MenuItem>
                    <MenuItem value="All-inclusive">All-inclusive</MenuItem>
                    <MenuItem value="Breakfast & Lunch Included">Breakfast & Lunch Included</MenuItem>
                    <MenuItem value="Breakfast & Dinner Included">Breakfast & Dinner Included</MenuItem>
                  </Select>
                  {errors.meals && <p style={{ color: 'red' }}>{errors.meals}</p>}
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth required error={!!errors.propertyType}>
                  <InputLabel id="propertyType-label">Property Type</InputLabel>
                  <Select
                    labelId="propertyType-label"
                    id="propertyType"
                    name="propertyType"
                    value={formData.propertyType}
                    onChange={handleInputChange}
                    label="Property Type"
                  >
                    <MenuItem value="Apartment">Apartment</MenuItem>
                    <MenuItem value="Hotel">Hotel</MenuItem>
                    <MenuItem value="Guest House">Guest House</MenuItem>
                    <MenuItem value="Home Stays">Home Stays</MenuItem>
                    <MenuItem value="Resorts">Resorts</MenuItem>
                    <MenuItem value="Entire homes & apartment">Entire homes & apartment</MenuItem>
                  </Select>
                  {errors.propertyType && <p style={{ color: 'red' }}>{errors.propertyType}</p>}
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth required error={!!errors.placeType}>
                  <InputLabel id="placeType-label">Place Type</InputLabel>
                  <Select
                    labelId="placeType-label"
                    id="placeType"
                    name="placeType"
                    value={formData.placeType}
                    onChange={handleInputChange}
                    label="Place Type"
                  >
                    <MenuItem value="City">City</MenuItem>
                    <MenuItem value="Outdoors">Outdoors</MenuItem>
                    <MenuItem value="Beach">Beach</MenuItem>
                  </Select>
                  {errors.placeType && <p style={{ color: 'red' }}>{errors.placeType}</p>}
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="place"
                  label="Place"
                  name="place"
                  value={formData.place}
                  onChange={handleInputChange}
                  error={!!errors.place}
                  helperText={errors.place}
                  inputProps={{ maxLength: 50 }}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl component="fieldset" required error={!!errors.facilities}>
                  <FormLabel component="legend">Facilities</FormLabel>
                  <FormGroup row>
                    {['Gym', 'Swimming Pool', 'Free Wi-Fi', 'Parking', 'Spa', 'Restaurant', 'Bar'].map((facility) => (
                      <FormControlLabel
                        key={facility}
                        control={
                          <Checkbox
                            checked={formData.facilities.includes(facility)}
                            onChange={handleFacilityChange}
                            name="facilities"
                            value={facility}
                          />
                        }
                        label={facility}
                      />
                    ))}
                  </FormGroup>
                  {errors.facilities && <p style={{ color: 'red' }}>{errors.facilities}</p>}
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="image"
                  name="image"
                  type="file"
                  inputProps={{ accept: 'image/*' }}
                  onChange={handleImageChange}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, bgcolor: '#28387E', color: 'white' }}
            >
              Register Hotel
            </Button>
            <Grid container justifyContent="center">
              <Grid item>
                <Link to="/admin/hotels" variant="body2" component={RouterLink}>
                  Go Back
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
      <ToastContainer />
    </ThemeProvider>
  );
}
