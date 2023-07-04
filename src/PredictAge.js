import React , { useState,useEffect } from "react"
import Axios from "axios"

const PredictAge = () => {
const [name, setName] = useState("");   
const [predictedAge, setPredictedAge] = useState(0);

const fetchData = () => {
    Axios.get(`https://api.agify.io/?name=${name}`)
    .then((res) => {
        setPredictedAge(res.data.age);
    });
};
    return (
        <div>
            <input 
            onChange={(event) => {setName(event.target.value);}}
            placeholder="Ex: Adrian.."/>
            <button
            onClick={fetchData}>Predict Age Of Any Name</button>
        <div>
            <h1>Predicted Age: {predictedAge}</h1>
        </div>
        </div>
    )
}

export default PredictAge;