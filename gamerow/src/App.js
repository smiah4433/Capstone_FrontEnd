import React, {Component } from 'react'
import './App.css';
// import GamesInfo from './component/GamesInfo';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./component/Home"
import GamesInfo from "./component/GamesInfo"
import Navbar from './component/Navbar';
//import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      baseUrl: 'http://localhost:8000',
      searchTerm: '',
      results: []
    }
  }



  render() {
    return (
      <BrowserRouter>
      <div className="App">
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/games" element={<GamesInfo/>} />
        </Routes>
      


      </div>
      </BrowserRouter>
    );
  }
}

export default App;
