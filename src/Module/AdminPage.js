import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import * as formik from 'formik';
import * as yup from 'yup';
import { useState } from 'react';

function AdminPage() {
  const { Formik } = formik;

  const schema = yup.object().shape({
    hotelName: yup.string().required(),
    grade: yup.string().required(),
    distance: yup.string().required(),
    meals: yup.string().required(),
    propertyType: yup.string().required(),
    facilities: yup.array().required().min(1),
    place: yup.string().required(),
    placeType: yup.string().required(),

    // image: yup.mixed().required(), // Add validation for the image file
  });

  // const [adminData, setAdminData] = useState(null);
  const [imageFile, setImageFile] = useState(""); // State to hold the selected image file

  const handleSubmit = (values, { setSubmitting }) => {
    // try {
      const formData = new FormData();
      formData.append('hotelName', values.hotelName);
      formData.append('grade', values.grade);
      formData.append('distance', values.distance);
      formData.append('meals', values.meals);
      formData.append('propertyType', values.propertyType);
      formData.append('facilities', JSON.stringify(values.facilities));
      formData.append('image', imageFile); // Append the image file to the form data
      formData.append('place', values.place);
      formData.append('placeType', values.placeType);


      fetch("http://localhost:8080/file/uploadHotels", {
          method: "POST",
          // headers: {
          //   "Content-Type": "application/json"
          // },
          body: formData,
          dataType:"jsonp"
        })
        .then(response => {
          console.log("Data Received" + response);
          alert("Datas have been stored")
        })
        .catch ((error) =>{
            console.error("Error:", error);
          }) 
          .finally (() => {
            setSubmitting(false);
          })
    
      //   if (!response.ok) {
      //     throw new Error("Failed to fetch the data");
      //   }
    
      //   const data = await response.json();
      //   setAdminData(data);
      //   alert("Stored Successfully!");
      // // }
      //  catch (error) {
      //   console.error("Error:", error);
      // } finally {
      //   setSubmitting(false);
      // }
    }

  return (
    <div>
      <ul className="nav justify-content-center p-3" style={{ backgroundColor: "#28387E" }}>
        <li className="nav-item">
          <a className="text-decoration-none text-white fs-5 fw-bold" href="#">Booking.Com - Admin Page</a>
        </li>
      </ul>
      <Container>
        <Row className="justify-content-md-center">
          <div className='m-5' style={{width:"70%"}}>
            <Formik
              validationSchema={schema}
              onSubmit={handleSubmit}
              initialValues={{
                hotelName: '',
                grade: 'Five Star', // Default grade to Five Star
                distance: '',
                meals: 'Self Catering', // Default meals to Self Catering
                propertyType: 'Apartment', // Default property type to Apartment
                facilities: [],
                image: '', // Initialize image to null
                place:'',
                placeType: 'City', // Default grade to Five Star

              }}
            >
              {({ handleSubmit, handleChange, setFieldValue, values, errors }) => (
                <Form noValidate onSubmit={handleSubmit}>
                    <Row className="mb-3">
                  <Form.Group 
                    as={Col} 
                    md="4" 
                    controlId="validationFormik01"
                    className='position-relative'
                  >
                    <Form.Label>Hotel Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Hotel Name"
                      name="hotelName"
                      value={values.hotelName}
                      onChange={handleChange}
                      isInvalid={!!errors.hotelName}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.hotelName}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group as={Col} md="4" controlId="validationFormik02">
                    <Form.Label>Grade</Form.Label>
                    <Form.Select 
                      aria-label="Default select example"
                      name="grade"
                      value={values.grade}
                      onChange={handleChange}
                      isInvalid={!!errors.grade}
                    >
                      <option value="Five Star">Five Star</option>
                      <option value="Four Star">Four Star</option>
                      <option value="Three Star">Three Star</option>
                    </Form.Select>
                    <Form.Control.Feedback type="invalid">
                      {errors.grade}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group 
                    as={Col} 
                    md="4" 
                    controlId="validationFormik03"
                    className='position-relative'
                  >
                    <Form.Label>Distance</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter distance from the center"
                      name="distance"
                      value={values.distance}
                      onChange={handleChange}
                      isInvalid={!!errors.distance}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.distance}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Row>
                <Row className="mb-3">
                  <Form.Group
                    as={Col}
                    md="4"
                    className='position-relative'
                    controlId="validationFormik04"
                  >
                    <Form.Label>Meals</Form.Label>
                    <Form.Select 
                      aria-label="Default select example"
                      name="meals"
                      value={values.meals}
                      onChange={handleChange}
                      isInvalid={!!errors.meals}
                    >
                      <option value="Self Catering1">Self Catering</option>
                      <option value="Breakfast Included">Breakfast Included</option>
                      <option value="All-inclusive">All-inclusive</option>
                      <option value="Breakfast & Lunch Included">Breakfast & Lunch Included</option>
                      <option value="Breakfast & Dinner Included">Breakfast & Dinner Included</option>
                    </Form.Select>
                    <Form.Control.Feedback type="invalid">
                      {errors.meals}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group
                    as={Col}
                    md="4"
                    className='position-relative'
                    controlId="validationFormik05"
                  >
                    <Form.Label>Property Type</Form.Label>
                    <Form.Select 
                      aria-label="Default select example"
                      name="propertyType"
                      value={values.propertyType}
                      onChange={handleChange}
                      isInvalid={!!errors.propertyType}
                    >
                      <option value="Apartment">Apartment</option>
                      <option value="Hotel">Hotel</option>
                      <option value="Guest House">Guest House</option>
                      <option value="Home Stays">Home Stays</option>
                      <option value="Resorts">Resorts</option>
                      <option value="Entire homes & apartment">Entire homes & apartment</option>
                    </Form.Select>
                    <Form.Control.Feedback type="invalid">
                      {errors.propertyType}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Row>
                <Row>
                  <Form.Group
                    as={Col}
                    md="12"
                    controlId="validationFormik06"
                    className='position-relative'
                  >
                    <Form.Label>Facilities</Form.Label>
                    <div>
                    {['Pets allowed', 'Airport Shuttle', 'Room Service', 'Restuarant', 'Parking', 'Free Wifi', 'Fitness Center', 'Wheelchair accessible', 'Swimming Pool'].map((facility, index) => (
                      <Form.Check
                        key={index}
                        inline
                        label={facility}
                        name="facilities"
                        type="checkbox"
                        id={`facility-${index}`}
                        onChange={(event) => {
                          const { checked } = event.target;
                          if (checked) {
                            setFieldValue('facilities', [...values.facilities, facility]);
                          } else {
                            setFieldValue('facilities', values.facilities.filter((f) => f !== facility));
                          }
                        }}
                        isInvalid={!!errors.facilities}
                      />
                    ))}
                    <Form.Control.Feedback type="invalid">
                      {errors.facilities}
                    </Form.Control.Feedback>
                    </div>
                  </Form.Group>
                </Row>
                  <Row className="mb-3">
                    <Form.Group as={Col} md="4">
                      <Form.Label>Image</Form.Label>
                      {/* <Form.Control
                        type="file"
                        name="image"
                        onChange={(event) => {
                          console.log(event.target.files[0]);
                          setImageFile(event.target.files[0]);
                        }}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.image}
                      </Form.Control.Feedback> */}
                      <div>
                      {imageFile && (
                        <div>
                          <img
                            alt="not found"
                            width={"250px"}
                            src={URL.createObjectURL(imageFile)}
                          />
                        </div>
                      )}
                      <input
                      type='file'
                      name='image'
                      onChange={(event) => {
                        console.log(event.target.files[0]);
                        setImageFile(event.target.files[0]);
                      }}
                      />
                      </div>
                    </Form.Group>
                    <Form.Group 
                      as={Col} 
                      md="4" 
                      controlId="validationFormik07"
                      className='position-relative'
                    >
                      <Form.Label>Place</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter place"
                        name="place"
                        value={values.place}
                        onChange={handleChange}
                        isInvalid={!!errors.place}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.place}
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="validationFormik08">
                    <Form.Label>Place Type</Form.Label>
                    <Form.Select 
                      aria-label="Default select example"
                      name="placeType"
                      value={values.placeType}
                      onChange={handleChange}
                      isInvalid={!!errors.placeType}
                    >
                      <option value="City">City</option>
                      <option value="Outdoors">Outdoors</option>
                      <option value="Beach">Beach</option>
                    </Form.Select>
                    <Form.Control.Feedback type="invalid">
                      {errors.placeType}
                    </Form.Control.Feedback>
                  </Form.Group>
                  </Row>
                  <div className='text-center p-3'>
                    <Button type="submit">Store Data</Button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default AdminPage;
