import React, { useState } from 'react';
import { convertFahrenheitToCelsius }  from './Api.js';
const ConvertToCelsius = () => {
 const [fahrenheit, setFahrenheit] = useState('');
 const [result, setResult] = useState(null);
 const [error, setError] = useState(null);

 const handleConvert = () => {
   if (fahrenheit.trim() === '') {
     setError('Please enter a temperature value');
     return;
   }
   convertFahrenheitToCelsius(fahrenheit)
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
<h2>Convert Fahrenheit to Celsius</h2>
<input
       type="text"
       value={fahrenheit}
       onChange={(e) => {
         setFahrenheit(e.target.value);
         setResult(null);
         setError(null);
       }}
       placeholder="Enter temperature in Fahrenheit"
     />
<button onClick={handleConvert}>Convert</button>
     {error && <div className="error">{error}</div>}
     {result && <div className="result-box"><div className="result">Result: {result}</div></div>}
</div>
 );
};
export default ConvertToCelsius;
