import axios from "axios";

const API_KEY = import.meta.env.VITE_API_KEY;
const API_URL = import.meta.env.VITE_API_URL;

export const getWeather = (city) => {
  return axios.get(
    `${API_URL}/current.json?key=${API_KEY}&q=${encodeURIComponent(city.trim())}`
  );
};