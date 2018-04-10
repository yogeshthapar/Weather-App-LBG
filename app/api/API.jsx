import axios from 'axios'

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/';
const KEY = 'appid=3e28b2fac4581adaf1dc367138935447&units=metric';
export const getWeather = (location) => {
   const encodedLocation = encodeURIComponent(location);
   const requestUrl = `${OPEN_WEATHER_MAP_URL}forecast?q=${encodedLocation}&${KEY}`;
   console.log(requestUrl);
    return axios.get(requestUrl).then((res) => {
          return res.data;
    },(res) => {
      throw new Error(res);
    })
}
