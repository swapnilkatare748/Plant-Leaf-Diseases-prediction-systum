import React from "react";
import './Navbar.css';
import { FaBars } from 'react-icons/fa';
import Logo  from "../../../Asets/logo.png";
const Navbar=()=>{

    const Menu=()=>{
    //    const display =  document.getElementById('ul-list');
    //    display.remove('hidden');
    }

    return(
        <div className="nav">
            <div className="logo-div">
                <a href="/">
                <img src={Logo} alt="logo img" className="logo"/>
                </a>
            </div>
           
            <div className='nav-list'>
                <ul className="ul-list">
                    <div className="first-nav">
                    <li><a href="/" >Home</a></li>
                    <li><a href="/Upload">Test</a></li>
                    <li><a href="/Explore">Explore</a></li>
                    <li><a href="/History">History</a></li>
                    <li><a href="/Charts">Charts</a></li>
                    <li><a href="/About">About</a></li>
                    </div>
                 
                   <div className="last-nav">
                    <li><a href="/SignUp">SignUp</a></li>
                    <li><a href="/Login">Login</a></li>

                   </div>
                </ul>
                
            </div>
            <div className="menubar">
                <button id="menubar" onClick={Menu()}><FaBars size={25}/></button>
            </div>

        </div>
    )
}
export default Navbar;