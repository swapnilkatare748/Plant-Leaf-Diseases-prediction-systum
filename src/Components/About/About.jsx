import React from "react";
import './About.css';
import Navbar from "../Home/Navbar/Navbar";
import Footer from "../Home/Footer/Footer";
import logo from "../../Asets/logo.png";

const About=()=>{
    return(
       <div className="about">
        <Navbar/>
        <div className="about-hero">
            <div id="main" >
            <h1> Dr. D.Y. Patil Arts, Commerce & Science College, Akurdi </h1> <br />
             <h3>Aavishkar Workshop - 2024-25</h3>
             <h3>Category:  Engineering & Technology</h3>
              <h3>Class: Ty.Bsc(cs) </h3>
           
          <div className="list">
              <img src={logo} alt="logo" />
               <div className="info">
               <h1> Plants
               Diseases prediction systum  </h1>
               <p>The Plant Leaf Diseases Prediction System is a machine learning-based web application designed to help farmers and plant enthusiasts detect whether a plant leaf is healthy or infected. By uploading an image of the plant leaf, users can receive a prediction about its health status.</p>
             </div>
          </div>
          <div id="Member-info">
            {/* <h3>Principal sir : </h3> <p></p> */}
             <h3>Guide Name :</h3> <p>Sandeep Warde sir</p>
            <h3>Project Members : </h3><br />
           <li>Kadu Kalyani</li>
           <li>Panthare Sakshi</li>
           <li>Chaudhari Sakshi</li>
           <li>Katare Swapnil</li> <br />
           <hr />
          </div>
          </div>
        </div>
        <Footer/>
       </div>
    )
}
export default About;