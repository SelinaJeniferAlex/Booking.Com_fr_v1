import React, { useState } from "react";
import * as formik from 'formik';
import Form from 'react-bootstrap/Form';
import * as yup from 'yup';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

const HotelImage = () => {

  const { Formik } = formik;

  const schema = yup.object().shape({
    imageFile: yup.mixed().required(),
  });

  const [selectedImage, setSelectedImage] = useState(null);

  const handleFileSubmit = (values) => {
    console.log("file selected");
    const formData = new FormData();
    formData.append("file", values.imageFile);

    fetch("http://localhost:8080/adminpage/store", {
        method: 'POST',
        body: formData,
        dataType: "jsonp"
    })
    .then(response => response.text())
    .then(text => {
        console.log(text)
    })
  }

  return (
    <div>
      <Container>
      {selectedImage && (
        <div>
          <img
            alt="not found"
            width={"250px"}
            src={URL.createObjectURL(selectedImage)}
          />
          <br />
          <button onClick={() => setSelectedImage(null)}>Remove</button>
        </div>
      )}
      <br />
      <br />
      
      <Formik
        validationSchema={schema}
        onSubmit={handleFileSubmit}
        initialValues={{
          imageFile: null,
        }}
      >
        {({ handleSubmit, setFieldValue, errors }) => (
          <Form onSubmit={handleSubmit}>
            <Form.Label>Image File</Form.Label>
            <Form.Control
              type="file"
              required
              name="imageFile"
              onChange={(event) => {
                console.log(event.target.files[0]);
                setSelectedImage(event.target.files[0]);
                setFieldValue("imageFile", event.target.files[0]);
              }}
              isInvalid={!!errors.imageFile}
            />
            <Form.Control.Feedback type="invalid">
              {errors.imageFile}
            </Form.Control.Feedback>
            <div className='text-center p-3'>
                  <Button type="submit">Upload</Button>
                </div>
          </Form>
        )}
      </Formik>
      </Container>
    </div>
  );
};

export default HotelImage;
