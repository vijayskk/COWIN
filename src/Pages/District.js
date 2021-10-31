import React from 'react'
import { useLocation } from 'react-router-dom'
import DistrictSearch from '../components/districtSearch';
import Nav from '../components/Nav';

function District(state) {
    let location = useLocation()
    const handleDis= ()=> {
        console.log(location.state.districts);
    }
    return (
        <div>
        <Nav/>
        <h1 onClick={handleDis}>sssss</h1>
        <DistrictSearch/>
          
        </div>
    )
}

export default District
