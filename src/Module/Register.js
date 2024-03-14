import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import * as formik from 'formik';
import * as yup from 'yup';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Register() {
  const { Formik } = formik;
  const navigate = useNavigate();

  const schema = yup.object().shape({
    emailAddress: yup.string().required(),
    userName: yup.string().required(),
    userPassword: yup.string().required(),
  });

  const [formData, setFormData] = useState({
    emailAddress: '',
    userName: '',
    userPassword: '',
  });

  const handleSubmit = (values, { setSubmitting }) => {
    fetch("http://localhost:8080/registerform/register", {
      headers: {
        "Content-Type": "application/json"
      },
      method: "post",
      body: JSON.stringify(values)
    })
    .then(response => {
      if (!response.ok) {
        throw new Error("Failed to fetch the data");
      }
      return response.json();
    })
    .then(formData => {
      console.log("Fetched data:", formData);
      setFormData(formData);
      navigate('/log');
    })
    .catch(error => {
      console.error("Error:", error);
    })
    .finally(() => {
      setSubmitting(false);
    });
  };

  return (
    <div className="Container-fluid">
      <ul className="nav justify-content-center p-3" style={{ backgroundColor: "#28387E" }}>
        <li className="nav-item">
          <a className="text-decoration-none text-white fs-5 fw-bold" href="#">Booking.Com</a>
        </li>
      </ul>
      <div className="Container Con-Enroll">
        <div className="p-5 m-3 box">
          <div className='text-center'>
            <h4>Sign Up, Now</h4>
            <small>Already have an account? <a href="/log">Sign In</a></small>
          </div>
          <div className='py-3'>
            <Formik
              validationSchema={schema}
              onSubmit={handleSubmit}
              initialValues={{
                emailAddress: '',
                userName: '',
                userPassword: '',
              }}
            >
              {({ handleSubmit, handleChange, values, errors }) => (
                <Form noValidate onSubmit={handleSubmit}>
                  <Row className="my-3">
                    <Form.Group as={Col} md="12" controlId="validationFormik01">
                      <Form.Label className=''>Email address</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Enter your email address"
                        name="emailAddress"
                        value={values.emailAddress}
                        onChange={handleChange}
                        isInvalid={!!errors.emailAddress}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.emailAddress}
                      </Form.Control.Feedback>
                        {/* {errors.emailAddress && <div className="text-danger">{errors.emailAddress}</div>} */}
                    </Form.Group>
                  </Row>
                  <Row className="my-3">
                      <Form.Group as={Col} md="12" controlId="validationFormik02">
                      <Form.Label className=''>User name</Form.Label>
                      <Form.Control
                          type="text"
                          placeholder="Enter Name"
                          name="userName"
                          value={FormData.userName}
                          onChange={handleChange}
                          isInvalid={!!errors.userName}
                      />

                      <Form.Control.Feedback type="invalid">
                          {errors.userName}
                      </Form.Control.Feedback>
                      </Form.Group>
                  </Row>
                  <Row className="my-3">
                      <Form.Group as={Col} md="12" controlId="validationFormik03">
                      <Form.Label className=''>Password</Form.Label>
                      <Form.Control
                          type="password"
                          placeholder="Enter Password"
                          name="userPassword"
                          value={FormData.userPassword}
                          onChange={handleChange}
                          isInvalid={!!errors.userPassword}
                      />

                      <Form.Control.Feedback type="invalid">
                          {errors.userPassword}
                      </Form.Control.Feedback>
                      </Form.Group>
                  </Row>
                  <Row>
                    <Button type="submit">Register</Button>
                  </Row>
                </Form>
              )}
            </Formik>
          </div>
          <div>
            <div className='text-center termsfont'>
              By signing in or creating an account, you agree with our <a href="#">Terms & conditions</a> and Privacy statement
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
