import Navbar from '../Home/Navbar/Navbar';
import Footer from '../Home/Footer/Footer';
import './Charts.css';
import Apple from './Apple';

const Charts=()=>{
    return(
          <div className='Charts-main'>
             <Navbar/>
              <div className="Charts">
              <h1 id='main-heading'>Charts</h1> <br />
              
            <hr /><br />
              <Apple/>
               

            
              </div>
            <Footer/>
           </div>
    );
}

export default Charts;