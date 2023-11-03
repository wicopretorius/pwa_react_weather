import axios from 'axios';

const URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = '2e9e954fefd58f6b543dfc23be119e22';

export const fetchWeather = async (query) =>{
    const {data} = await axios.get(URL, {
        params: {
            q: query,
            units: 'metric',
            APPID: API_KEY,
       }

       
    });
    //console.log(data);
    return data;
}