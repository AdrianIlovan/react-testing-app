import React , { useState,useEffect } from "react"
import Axios from "axios"

const PredictAge = () => {
const [name, setName] = useState("");   
const [predictedAge, setPredictedAge] = useState(null);

const fetchData = () => {
    Axios.get(`https://api.agify.io/?name=${name}`)
    .then((res) => {
        setPredictedAge(res.data);
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
                <h1>Name: {predictedAge && predictedAge.name}</h1>
                <h1>Predicted Age: {predictedAge && predictedAge.age}</h1>
                <h1>Count: {predictedAge && predictedAge.count}</h1>
            </div>
        </div>
    )
}

export default PredictAge;