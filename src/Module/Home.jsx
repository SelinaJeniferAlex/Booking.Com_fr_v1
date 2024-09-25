import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SearchForm from './SearchForm';
import Property from './Property';
import MainLayout from './Layout/MainLayout';

function Home() {
  return (
    <div>
      <MainLayout/>
      <div className="p-4 mt-5" style={{ backgroundColor: "#003b95" }}>
        <Container>
          <Row>
            <Col sm={8} className='my-3 text-white px-3 py-5 d-flex flex-column justify-content-center align-items-center align-items-sm-start'>
              <h1 className='fw-bold py-2'>Sign in, save money</h1>
              <h4 className='py-2 text-center text-md-start'>Save 10% or more at participating properties. Just look for the blue Genius label.</h4>
              <Button className='my-3' variant="primary" size="lg">
                Sign in or register
              </Button>
            </Col>
            <Col sm={4} className='my-3 d-flex flex-column justify-content-center align-items-center'>
              <figure class="figure">
                <img className='ps-5 ps-lg-1'width={290} src="https://q-xx.bstatic.com/xdata/images/xphoto/300x300/316543397.png?k=c42a7cb04035fb44ee49b1f539e6b2bfb745955a8fe8df2db662c938077cd021&o="/>           
                <figcaption
                  class="figure-caption text-start text-white"
                >
                  Booking.com's loyalty programme <span className='fw-bold fs-5'>Genius</span>
                </figcaption>
              </figure>              
            </Col>
          </Row>
        </Container>
      </div>
      <div className='pos'>
        <SearchForm/>
      </div>
      <div>
        <Container>
          <div className='py-4 text-center text-md-start'>
            <h3>Trending destinations</h3>
            <p>Most popular choices for travellers from India</p>
          </div>
          <div className='py-2'>
            <Property/>
          </div>
        </Container>
      </div>
      <div>
        <Container>
          <div className='fw-bold py-4 text-center text-md-start'>
            <h3>Browse by property type</h3>
          </div>
          <div className='py-2'>
            <Property/>
          </div>
        </Container>
      </div>
      <div>
        <Container>
          <div className='py-4 text-center text-md-start'>
            <h3 className='pb-2'>Explore India</h3>
            <p>These popular destinations have a lot to offer</p>
          </div>
          <div className='py-2'>
            <Property/>
          </div>
        </Container>
      </div>
      <div className='py-4' style={{ backgroundColor: "rgb(0, 34, 79)" }}>
        <Container>
          <div className='text-center text-white p-4'>
            <h4>Stay in the know</h4>
            <p>Sign up to get marketing emails from Booking.com, including promotions, rewards, travel experiences and information about Booking.com’s and Booking.com Transport Limited’s products and services.</p>
            <p>You can opt out any time. See our <a href='#'>privacy statement</a>.</p>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Home;