import axios from 'axios';

const API_KEY = 'b84876196b3c59b8c78eaf6b91ac8a9b';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

// action creator responsible for creating an action and making a request to the API
export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url); // returns a promise

  return {
    type: FETCH_WEATHER,
    // the promise returned from request will be passed here as the action's payload
    payload: request 
  };
}