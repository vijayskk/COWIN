import React from 'react';
import './App.css';
// import Text from './Text';
// import Nav from './components/Nav';
// import Banner from './components/banner';
// import DistrictSearch from './components/districtSearch';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import Home from './Pages/home';
import District from './Pages/District';
function App() {
  return (
    <div className="App">
     <Router>
        <Route exact path="/">
          <Home/>   
        </Route>

        <Route path ="/district">
          <District/>            
        </Route>
            
        </Router>
        
         
    </div>
  );
}

export default App;
