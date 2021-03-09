import logo from './logo.svg';
import './App.css';

import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  let [data,setData] = useState(null);
  // useEffect(() => {
  //   let getResults = async() => {
  //     let results = await axios.get('http://localhost:5000');
  //     setData(results);
  //   }
  //   getResults();
  // }, [data])
  return (
    <div className="App">
      <p>Testing to see if its served</p>
    </div>
  );
}

export default App;
