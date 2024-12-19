import React from "react";
import "./Home.css";
import Navbar from "./Navbar/Navbar";
import logo from "../../Asets/logo.png";
import { useNavigate } from 'react-router-dom';
import Footer from './Footer/Footer'

const Home = () => {

  const navigate = useNavigate();

  const ClickHero = () => {
      navigate('/Upload');
  };

  return (
    <div className="Home">
      <Navbar /> 
      <div className="Hero">
        <div className="Hero-left">
          {/* headings */}

          <div className="heading">
            <div className="heding-1">
              <div className="logo-heading">
                <img src={logo} alt="logo_img" className="logo2" />
              </div>
              <div className="pdps">
                <h1>
                  pd<span className="stroke-text">p</span>s
                </h1>
              </div>
            </div>
            <div className="heading-2">
              <div className="h2-1">
              <span > Identify </span><span className="stroke-text"> Plants </span>
              </div> 
              <span className="identify" >Diseases Instantly</span> 
        
            </div>
          </div>
          <div className="hero-button">
          <button className="button-hero" onClick={ClickHero}> Get Started </button>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};
export default Home;
