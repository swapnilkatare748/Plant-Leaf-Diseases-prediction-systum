import React from "react";
import './Footer.css';
import logo from '../../../Asets/logo.png';
import {  FaTwitter ,FaLinkedin ,FaGithub} from 'react-icons/fa'

const  Footer = () =>{
    return(
      <div className="Footer">
            <div className="pro-logo">
              <img src={logo}alt="logo" className="logo"/>
              <h3> @PD<span className="stroke-text">P</span>S.com</h3>
            </div>
            <div className="icons-div">
                <a href="https://www.linkedin.com"target="_blank"rel="noopener noreferrer" className="icons"><FaGithub className="icons"/></a>
                <a href="https://www.linkedin.com"target="_blank"rel="noopener noreferrer" className="icons"><FaLinkedin className="icons" /></a>
                <a href="https://www.linkedin.com"target="_blank"rel="noopener noreferrer" className="icons"><FaTwitter className="icons"/></a>

            </div>
            
      </div>
    )
}
export default Footer;