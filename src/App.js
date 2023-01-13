import React from 'react';
import InputForm from './InputForm';
import Output from './Output';

function App() {
  return (
    <div className="App">
        <InputForm />
        <Output response={response} />
    </div>
  );
}

export default App;
