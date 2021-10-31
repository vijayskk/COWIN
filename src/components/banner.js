import React from 'react'
import {useHistory} from 'react-router-dom'
// import axios from 'axios';
import vaccine from '../images/vaccine.jpg';
import "./banner.css"
// import { useHistory, useParams } from 'react-router';

function Banner() {

    // const [states,setStates]= useState([])
    const history = useHistory()
 const  handleStates = ()=> {
       
     
      history.push({pathname:"/district"}) 
                  
    }
    return (
        <div className="banner">
            {/* <h2>banner working</h2> */}
         <div className="buttons">

            <button className="rg-vcn" >Register Vaccine</button>
            <button className="pin-search">Search By Pin</button>
            <button className="dis-search" onClick={handleStates}>Search By District</button>
         </div>
            <div className="banner-img">

            <img className="bnr-img" src={vaccine} alt="" />
           </div>
        </div>
    )
}

export default Banner
