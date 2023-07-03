import React, {useState,useEffect} from "react"
import './App.css';
import Axios from "axios";

// fetch("https://catfact.ninja/fact")
//   .then((response) => response.json())
//   .then((data) => {console.log(data)});
function App() {

const [leftClick, setLeftClick] = useState([])

const fetchCatFact = () => { 
    Axios.get("https://catfact.ninja/fact")
      .then((response) => {setLeftClick(response.data.fact)})
}

  useEffect(() => {
    fetchCatFact();
  }, []);
  return (
    <div className="App">
      <button
      onClick={fetchCatFact}>
        Generate Cat Fact</button>
      <p>{leftClick}</p>
    </div>
  );
}

export default App;
