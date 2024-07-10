import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import * as formik from 'formik';
import * as yup from 'yup';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function Login() {
  const { Formik } = formik;
  const navigate = useNavigate();


  const schema = yup.object().shape({
    emailAddress: yup.string().matches(/^[a-z]+\d*@gmail\.com$/,'Email is Invalid').required(),
    userPassword: yup.string().required(),
  });

  const [values,Setdata]=useState({
    emailAddress:"",
    userPassword:"",
    });

const handleSubmit =(values, {setSubmitting})=>{
// event.preventDefault();
console.log('SUBMITTING FORM:' ,values)
fetch("http://localhost:8080/registerform/login",
    {
        headers:{
            "Content-Type":"application/json"
        },
        method:"post",
        body:JSON.stringify(values)
    })
    .then((response)=>{
        if(!response.ok){
            throw new Error('Failed to fetch data');
        }
        return response.json();
    })
    .then((response)=>{
        if(response == true){
        console.log("the Fectched data is",response);
        Setdata(response);
        navigate('/admin');
        }
        else{
            alert("password incorrect")
        }
    })
    .catch((e)=>{
        console.log("error",e);
    })
    .finally(() =>{
      setSubmitting(false);
    })
  
};


    return (
        <div className="Container-fluid">
            <ul className="nav justify-content-center p-3" style={{backgroundColor:"#28387E"}}>
                <li className="nav-item">
                    <a className="text-decoration-none text-white fs-5 fw-bold" href="#">Booking.Com</a>
                </li>
            </ul>
            <div className="Container Con-Enroll">
                <div className="p-5 m-3 box">
                    <div className='text-center'>
                        <h4>Hello, Again</h4>
                        <small>We are happy to have you back.</small>
                    </div>
                    <div className='py-3'>
                        <Formik
                            validationSchema={schema}
                            onSubmit={handleSubmit}
                            initialValues={{
                                emailAddress: '',
                                userPassword:'',
                                
                            }}
                        >
                            {({ handleSubmit, handleChange, values, touched, errors }) => (
                                <Form noValidate onSubmit={handleSubmit}>
                                    <Row className="mb-3">
                                        <Form.Group as={Col} md="12" controlId="validationFormik01">
                                        <Form.Label className=''>Email address</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter your email address"
                                            name="emailAddress"
                                            value={values.emailAddress}
                                            onChange={handleChange}
                                            isInvalid={!!errors.emailAddress}
                                        />

                                        <Form.Control.Feedback type="invalid">
                                            {errors.emailAddress}
                                        </Form.Control.Feedback>
                                        </Form.Group>
                                    </Row>
                                    <Row className="mb-3">
                                        <Form.Group as={Col} md="12" controlId="validationFormik03">
                                        <Form.Label className=''>Password</Form.Label>
                                        <Form.Control
                                            type="password"
                                            placeholder="Enter Password"
                                            name="userPassword"
                                            value={values.userPassword}
                                            onChange={handleChange}
                                            isInvalid={!!errors.userPassword}
                                        />

                                        <Form.Control.Feedback type="invalid">
                                            {errors.userPassword}
                                        </Form.Control.Feedback>
                                        </Form.Group>
                                    </Row>
                                    <Row className='mx-1 my-4'>
                                        <Button type="submit">Login</Button>
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
export default Login;