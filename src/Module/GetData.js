import { useEffect, useState } from 'react';
import axios from 'axios';
import { Table } from 'react-bootstrap';

function GetData() {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/file/getAllHotels')
      .then(response => {
        setHotels(response.data);
      })
      .catch(error => {
        console.error('Error fetching hotels:', error);
      });
  }, []);
  const deleteProduct = (adminId) => {
    fetch(`http://localhost:8080/adminpage/delete/${adminId}`, {
            headers:{
                "Content-Type": "application/json"
            },
            method: "delete",
            body: JSON.stringify({adminId:adminId})
        })
        .then(response => {
            console.log("Data Received " + response)
            window.location.reload();
        })
        .catch((e)=>{
          console.log("error",e);
        })   
  }

  return (
    <div>
      <h1>Hotels</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>Hotel Name</th>
            <th>Grade</th>
            <th>Distance</th>
            <th>Meals</th>
            <th>Property Type</th>
            <th>Facilities</th> {/* Add a column for facilities */}
            <th>Image</th>
            <th>Place</th>
            <th>Place Type</th>
            {/* Add more columns if needed */}
          </tr>
        </thead>
        <tbody>
          {hotels.map(hotel => (
            <tr key={hotel.adminId}>
              <td>{hotel.adminId}</td>
              <td>{hotel.hotelName}</td>
              <td>{hotel.grade}</td>
              <td>{hotel.distance}</td>
              <td>{hotel.meals}</td>
              <td>{hotel.propertyType}</td>
              <td>
                {JSON.parse(hotel.facilities).map((facility, index) => (
                  <li key={index}>
                    {facility}
                    {index !== JSON.parse(hotel.facilities).length - 1 && ''}
                  </li>
                ))}
              </td>

              <td><img src={"http://localhost:8080/uploads/"+hotel.image} style={{height:"80px", width:"100%"}}></img></td>
              <td>{hotel.place}</td>
              <td>{hotel.placeType}</td>
              <td><button className='btn btn-danger' onClick={() => deleteProduct(hotel.adminId)}>DELETE</button></td>{/* Render more columns if needed */}
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default GetData;
