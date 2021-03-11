import logo from './logo.svg';
import './App.css';

import { useEffect, useState } from 'react';
import axios from 'axios';
import Bingo from './Components/Bingo/Bingo';
import {BrowserRouter as Router, Route} from 'react-router-dom';

function App() {


  return (
    <Router>
      <Route path='/bingo' component={Bingo} />
    </Router>
  );
}

export default App;
