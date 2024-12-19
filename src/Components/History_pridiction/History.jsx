import './History.css';
import React from 'react';
import { useEffect,useState } from 'react';
import Navbar from '../Home/Navbar/Navbar';
import Footer from '../Home/Footer/Footer';
import axios from 'axios';
import { Link } from 'react-router-dom';

const History=()=>{
    const [data,setData] = useState([]);

    useEffect(()=>{
       //fach the data from backen
       axios.get('http://localhost:8000/history')
            .then(response =>{
                setData(response.data);
            })
            .catch(error =>{
                console.error('there was an error featching the history!',error);
            });
    
    },[]   );


    return(
        <div className="History">
      <Navbar/>                   
                 
        <div className="History-hero">
            <h1>History</h1>
            {data.length ===0 ? (
                <p>No data fond </p>
            ):
            (
               <ul >
                {data.map((item,index)=>(
                    <li id='list-history' kay={index}>
                        <img src={item.image} alt={`Prediction ${index}`} id='history-img' />
                        <p id="result-history"><h1> Prediction : </h1>
                             <span id='history-span'>
                             <Link to={`/explore?pridiction=${encodeURIComponent(item.prediction)}`}><span id="result">{item.prediction} </span></Link>
                            </span></p>
                        {/* <p id="result-history"><h1> Prediction : </h1><span> </span>{item.prediction}</p> */}
                    </li>
                ))};
               </ul>
            )
            
            }
                
        </div>         

       <Footer/>
        </div>
    );
}
export default History;