import Form from 'react-bootstrap/Form';
import { useState } from 'react';

function Demo() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleFile = () => {
    console.log("file submitted")
    const formData = new FormData();
    formData.append("file", selectedImage);

    fetch("http://localhost:8080/file/upload", {
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
    {selectedImage && (
      <div>
        <img
          alt="not found"
          width={"250px"}
          src={URL.createObjectURL(selectedImage)}
        />
        <br />
        <button onClick={() => setSelectedImage(null)}>Remove</button>
        <button onClick={ handleFile()}>Upload</button>
      </div>
    )}
      
        <Form.Control
          type="file"
          name="image"
          onChange={(event) => {
            console.log(event.target.files[0]);
            setSelectedImage(event.target.files[0]);
          }}
        />
  </div>
  );
}

export default Demo;
