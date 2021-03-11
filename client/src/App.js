import logo from './logo.svg';
import './App.css';

import { useEffect, useState } from 'react';
import axios from 'axios';
import Bingo from './Components/Bingo/Bingo';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import MajorMonoTTF from "./Assets/Fonts/MajorMonoDisplay-Regular.ttf";

import GlobalStyle from './Assets/Fonts/_fonts';
import { Typography } from './Globals/Styles/typography';

const App = () =>  {


  return (
    <>
    <Router>
  
      <GlobalStyle />
     
      <Route path='/bingo' component={Bingo} />
  
      </Router>
    </>
  );
}

export default App;
