import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import './Style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faCalendarAlt, faUser } from '@fortawesome/free-solid-svg-icons';


function SearchForm() {
  return (
    <div>
      <Container>
          <Form className='m-3'>
            <Row className="align-items-center justify-content-center">
              <InputGroup className='d-flex flex-column flex-md-row justify-content-center align-items-center'>
                <Col sm={3}  className="m-2 m-sm-0  custom-col">
                  <InputGroup>
                    <InputGroup.Text style={{ backgroundColor: "white" }}>
                      <FontAwesomeIcon icon={ faBed} />
                    </InputGroup.Text>
                    <Form.Control className='p-3' placeholder="Where are you going?" />
                  </InputGroup>
                </Col>
                <Col sm={3} className="m-2 m-sm-0 custom-col">
                  <InputGroup>
                    <InputGroup.Text style={{ backgroundColor: "white" }}>
                      <FontAwesomeIcon icon={ faCalendarAlt} />
                    </InputGroup.Text>
                    <Form.Control className='p-3' placeholder="Check-in date to Check-out date" />
                  </InputGroup>
                </Col>
                <Col sm={4} className="m-2 m-sm-0 custom-col">
                  <InputGroup>
                    <InputGroup.Text style={{ backgroundColor: "white" }}>
                      <FontAwesomeIcon icon={ faUser} />
                    </InputGroup.Text>
                    <Form.Control className='p-3' placeholder="Jane Doe" />
                  </InputGroup>
                </Col>
                <Col sm={2} className='m-2 m-sm-0 custom-col' style={{ backgroundColor: "blue" }}>
                  <Button className='p-3' style={{width:"100%"}} type="submit">Submit</Button>
                </Col>
              </InputGroup>
            </Row>
          </Form>
      </Container>
    </div>
  );
}

export default SearchForm;
