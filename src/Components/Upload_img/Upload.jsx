import React, { useState } from "react";
import './Upload.css';
import logo from '../../Asets/logo.png';
import Navbar from "../Home/Navbar/Navbar";
import { Link } from 'react-router-dom';
// import Camera from "./Camera/Camera";


const Upload = (props) => {
  const [fileName, setFileName] = useState('');
  const [image, setImage] = useState(logo);
  const [file, setFile] = useState(null);
  const [pridiction, setPridiction] = useState('__'); 


  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setFileName(selectedFile.name);
      setFile(selectedFile);

      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result); // Set the image data URL
      };
      reader.readAsDataURL(selectedFile);
    } else {
      setImage(logo); // Reset to default image
      setFile(null);
    }
  };

  const handleVerify = async () => {
    if (file) {
      try {
        const formData = new FormData();
        formData.append('image', file);

        const response = await fetch('http://localhost:8000/predict', {
          method: 'POST',
          body: formData,
        });

        if (!response.ok) {
          throw new Error('Failed to fetch');
        }

        const result = await response.json();
        setPridiction(result.prediction); // Update the prediction result
        // setHistory(prevHistory => [...prevHistory, { image, prediction: result.prediction }]);
      } catch (error) {
        console.error('Error:', error);
        alert('Error processing image.');
      }
    } else {
        alert("No file to verify");
    }
  };



  return (
    <div>
    <div className="Upload-section"> 
      <Navbar />
      <div className="hero">
        <div className="hero1">
          <div className="headings"> 
            <h1 className="h1">Welcome to PD<span className="stroke-text">P</span>S</h1><br />
            <h2>Plant Disease Identifier</h2><br />
          </div>
          <div id="camera">   </div>
          <div className="file_container">
           
            <label htmlFor="file-upload" className="custom-file-upload">Choose File:</label>
            <input type="file" className="input-file" id="file-upload" onChange={handleFileChange} />
            {console.log("Uploaded file Name: ", fileName)}
          </div>
          <button onClick={handleVerify} className="verify-button button3">Verify</button>
          <br />
          <div className="prediction-result">
            <h2>Prediction result: <Link to={`/explore?pridiction=${encodeURIComponent(pridiction)}`}><span>{pridiction}</span></Link> </h2>
          </div>
        </div>
        {image && <img src={image} alt="Selected" className="Preview-image" />}
       </div>
     
    </div>
        
          
     </div>
  );
};

export default Upload;


