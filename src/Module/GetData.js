import { useEffect, useState } from 'react';
import axios from 'axios';
import { Table } from 'react-bootstrap';

function Demo() {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/adminpage/hotels')
      .then(response => {
        setHotels(response.data);
      })
      .catch(error => {
        console.error('Error fetching hotels:', error);
      });
  }, []);

  return (
    <div>
      <h1>Hotels</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Hotel Name</th>
            <th>Grade</th>
            <th>Distance</th>
            <th>Meals</th>
            <th>Property Type</th>
            <th>Facilities</th> {/* Add a column for facilities */}
            <th>Image</th>
            {/* Add more columns if needed */}
          </tr>
        </thead>
        <tbody>
          {hotels.map(hotel => (
            <tr key={hotel.id}>
              <td>{hotel.hotelName}</td>
              <td>{hotel.grade}</td>
              <td>{hotel.distance}</td>
              <td>{hotel.meals}</td>
              <td>{hotel.propertyType}</td>
              <td>
                <ul>
                  {hotel.facilities.map((facility, index) => (
                    <li key={index}>{facility}</li>
                  ))}
                </ul>
              </td>
              <td>{hotel.image}</td>
              {/* Render more columns if needed */}
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Demo;
