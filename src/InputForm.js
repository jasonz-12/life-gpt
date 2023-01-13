import React, { useState } from "react";
import axios from "axios";

const InputForm = () => {
    const [inputValue, setInputValue] = useState("");
    const [response, setResponse] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {userInput: inputValue};
        axios.post("https://us-central1-life-gpt.cloudfunctions.net/gpt3ApiCall", data)
            .then(response => {
                setResponse(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={inputValue} onChange={e => setInputValue(e.target.value)} />
            <button type="submit">Submit</button>
            {response && <div>{response}</div>}
        </form>
    );
};

const btn = document.getElementById("btn");

btn.addEventListener('click', function(){
  var name = document.getElementById("myName").value;
  alert("Name: "+ name);
});

export default InputForm;
