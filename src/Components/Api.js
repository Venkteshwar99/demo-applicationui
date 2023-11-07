import axios from 'axios';
const API_BASE_URL = 'http://localhost:8080';
const api = axios.create({
 baseURL: API_BASE_URL,
});
export const convertFahrenheitToCelsius = (farenheit) => {
 return api.post('/convert/celcius', null, {
   params: {
    farenheit: farenheit
   },
 });
};

export const convertCelsiusToFahrenheit = (celcius) => {
    return api.post('/convert/farenheit', null, {
      params: {
        celcius: celcius
      },
    });
   };
   