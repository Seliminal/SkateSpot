import {data} from "./data/data.js";
import React from 'react';
import {useState, useEffect} from 'react';
import AddSpot from './components/AddSpot.jsx';
import Spots from './components/Spots.jsx';
import Home from './components/Home.jsx';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Link } from 'react-router-dom';


function App() {
  const [skateSpotState, setSkateSpotState] = useState([...data])

    const updateSkateSpot = (skateSpot) => {
    console.log(skateSpot)
    setSkateSpotState([...skateSpotState,skateSpot])
  }

    const getSkateSpot = async () =>{
    console.log('hi')
    let res = await fetch(`http://localhost:3000/api/skatespots`);
    let json = await res.json()
    setSkateSpotState(json)
  }
  useEffect(() => {
    getSkateSpot()
  },[]);

   return (
    <div className="App" style={{ backgroundColor: '#6B7B8C', minHeight: '100vh'}}>
    <Router >
      <nav>
          <Link to="/">Home</Link> |{' '}
          <Link to="/spots">Spots</Link> |{' '}
          <Link to="/add">Add Spot</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/spots" element={<Spots skateSpotState={skateSpotState} />} />
          <Route path="/add" element={<AddSpot updateSkateSpot={updateSkateSpot} />} />
        </Routes>
    </Router>
    </div>
  );
}

export default App;