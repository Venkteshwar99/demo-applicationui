import React, { useState } from 'react';
import { BrowserRouter as Router, Route ,Link,Switch} from 'react-router-dom';
import ConvertToFahrenheit from './Components/ConvertToFahrenheit.js';
import ConvertToCelsius from './Components/ConvertToCelsius.js';
import './Components/styles.css'
const App = () => {
    const [conversionType, setConversionType] = useState(null);
    return (
   <Router>
   <div className="container">
   <h1 className="title">Temperature Converter</h1>
   <Link to="/convert-to-fahrenheit">
   <button onClick={() => setConversionType('farenheit')}>Convert to Fahrenheit</button>
   </Link>
   <Link to="/convert-to-celsius">
   <button onClick={() => setConversionType('celsius')}>Convert to Celsius</button>
   </Link>
   </div>
   <Switch>
   <Route
            exact
            path="/convert-to-fahrenheit"
            render={() => <ConvertToFahrenheit conversionType={conversionType} />}
          />
   <Route
            exact
            path="/convert-to-celsius"
            render={() => <ConvertToCelsius conversionType={conversionType} />}
          />
   </Switch>
   </Router>
    );
   };
   export default App;