import React from "react";
import './Login.css';
import Navbar from "../Home/Navbar/Navbar";


const Login=()=>{
    return(
       <div className="login">
         <Navbar/>
           
           <div className="login-hero">
             <div className="login-first">
                 <form action="submit">
                    <input type="email" placeholder="Email " />
                    <input type="password" placeholder="Password" />
                    <div className="buttons-log">
                        <button id="forgot">Forgot Password</button>
                        <button id="login-button">Login</button>
                    </div>
                 </form>
              </div>
             
           </div>

       </div>
    )
}
export default Login;