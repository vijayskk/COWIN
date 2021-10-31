import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './districtSearch.css'
import {Form,Button} from 'react-bootstrap'
import "./search.css"
function DistrictSearch() {
  const [states, setStates] = useState([])
  // const [districts, setDistricts] = useState([])

  useEffect(() => {   
    axios.get('https://cdn-api.co-vin.in/api/v2/admin/location/states') //FETCH ALL STATES
    .then(function (response) {
      // handle success
     console.log('working');
     console.log(response.data.states);
     setStates(response.data.states)
     console.log('states are:');
     console.log(states);
             
    })
  }, [])
  // useEffect(() => {
  //   effect
  //   return () => {
  //     cleanup
  //   }
  // }, [input])
  const handleDistricts = (e) => {
    console.log('State value is')
    console.log(e.target.innerText)
    
    // axios.get('https://cdn-api.co-vin.in/api/v2/admin/location/states') //FETCH ALL STATES
    // .then(function (response) {
    //   // handle success
    // //  console.log('working');
    // //  console.log(response.data.states);
    //  setStates(response.data.states)
    // //  console.log('states are:');
    // //  console.log(states);
             
    // })
  }
    return (
        <div className="search">        
<Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Searc State</Form.Label>
    <br />
    {/* <Form.Control type="email" placeholder="Enter email" /> */} 
  <Form.Select  onChange={handleDistricts} className="me-sm-2 selector" id="inlineFormCustomSelect">
        <option  >Choose...</option>
        {
          states? 
          states.map((obj) => {
            return(
              <option   >{obj.state_name}</option>
            )
          })
           : ""
        }

      
      </Form.Select>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Search District
    </Form.Label>
    <br />
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
 
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
        </div>
    )
}

export default DistrictSearch
