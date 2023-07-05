import React, {useState, useEffect} from "react"
import Axios from "axios"

const GenerateExcuse = () => {
    const [generatedExcuse, setGeneratedExcuse] = useState("");

    const fetchExcuse = (arg) => {
        Axios.get(`https://excuser.herokuapp.com/v1/excuse/${arg}`)
            .then((res) => {setGeneratedExcuse(res.data[0].arg);
            }
        );
    };
    
    return (
        <div>
            <h1>Generate Excuses For:</h1>
            <div>
                <button onClick = {() => fetchExcuse("party")} >Party</button>
                <button onClick = {() => fetchExcuse("family")}>Family</button>
                <button onClick = {() => fetchExcuse("office")}>Office</button>
            </div>

            <p> {generatedExcuse} </p>
        </div>
    )
}

export default GenerateExcuse;