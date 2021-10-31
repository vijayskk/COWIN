import React, { useState } from 'react';
import axios from 'axios';
import './text.css'
import image from "./images/vaccine.jpg"


function Text() {
 const [states, setStates] = useState([])
 const [stateId, setStateId] = useState([])
     
  const handleStates = ()=>{
    axios.get('https://cdn-api.co-vin.in/api/v2/admin/location/states')
    .then(function (response) {
      // handle success
      console.log(response.data.states);
      let newStates = response.data.states
      setStates(newStates)
      console.log(newStates);
      console.log('States are :' );
      console.log(states);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
   
  }
  const handleId = (e)=>{
    // e.preventDefault()
    console.log('button value is')
    console.log(e.target.innerText)
    // console.log(e.currentTarget.value)
    // let stateId = states.map((obj)=>{return obj.state_id === e.target.innerText})
    // console.log(stateId);
    let stateData = states.filter((obj)=> obj.state_name === e.target.innerText)

    console.log(`states id is  `);
    console.log(stateData[0].state_id);
      
    let stateValue = stateData[0].state_id
    setStateId(stateValue)
    console.log(`id is `);
    console.log(stateId);
  }
   
      
        return (

            <div  >

                <button onClick={handleStates}>Click for states</button>
                {/* {
                   states.map((obj)=> <button id = {obj.state_id} onClick={handleId}>{obj.state_name}</button>)
                  //  states.map((obj)=> <button id = {obj.state_id} onClick={handleId}>{obj.state_name}</button>)
                } */}
                
                 

                      
                        <div>

                       <label for="cars">Select states</label>
                       <select >
                        {
                        states.map((obj)=>{
                        return(
                        <option className='opt' >{obj.state_name}</option>
                        )
                      })
                        }
                      </select>
                        </div>
                        
                        {/* <img className='banner-img' src="https://image.freepik.com/free-vector/flat-coronavirus-vaccination-campaign_23-2148969469.jpg" alt="" /> */}
                        <img className='banner-img' src={image} alt="" />
                        

                  
                  
            </div>
        );
      
}

export default Text



