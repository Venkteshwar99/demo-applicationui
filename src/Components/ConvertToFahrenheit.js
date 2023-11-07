import React, { useState } from 'react';
import { convertCelsiusToFahrenheit } from './Api.js';

const ConvertToFahrenheit = () => {
 const [celsius, setCelsius] = useState('');
 const [result, setResult] = useState(null);
 const [error, setError] = useState(null);

 const handleConvert = () => {
   if (celsius.trim() === '') {
     setError('Please enter a temperature value');
     return;
   }
   convertCelsiusToFahrenheit(celsius)
     .then((response) => {
       setResult(response.data);
       setError(null);
     })
     .catch((error) => {
       setResult(null);
       setError('Error converting temperature');
     });
 };
 return (
<div className='res'>
<h2>Convert Celsius to Fahrenheit</h2>
<input
       type="text"
       value={celsius}
       onChange={(e) => {
         setCelsius(e.target.value);
         setResult(null);
         setError(null);
       }}
       placeholder="Enter temperature in Celsius"
     />
<button onClick={handleConvert}>Convert</button>
     {error && <div className="error">{error}</div>}
     {result && <div className="result">Result: {result}</div>}
</div>
 );
};
export default ConvertToFahrenheit;