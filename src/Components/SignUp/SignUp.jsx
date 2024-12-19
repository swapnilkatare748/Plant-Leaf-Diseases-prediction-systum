import React from "react";
import './SignUp.css';
import Navbar from '../Home/Navbar/Navbar';
import Footer from '../Home/Footer/Footer';


const SignUp=()=>{
    return(
     <div className="signup">
         <Navbar/>
         <div className="signup-hero">
            
            <form action="submit">
                <input type="text" placeholder="Name" className="input-s"/>
                <input type="number" placeholder="Mobile Number" className="input-s"/>
                <input type="email" placeholder="email" className="input-s"/>
               
                <input type="button"  placeholder="SignUP" id="button-signup" value='signup' />
            </form>

        </div>     
        <Footer/>   
     </div>
    )
}
export default SignUp;