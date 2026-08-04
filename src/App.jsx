import { useState, useEffect } from 'react';
import { getWeather } from "src/services/weatherApi.js";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import WeatherStats from "./components/WeatherStats";

const App = () => {
  const [weatherData, setWeatherData] = useState(null);

  const [city, setCity] = useState("Dhaka");

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");


  const fetchWeather = async (city) => {
    city = city.trim();

    if (!city) {
      setError("Please enter a city name.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await getWeather(city);
      setWeatherData(response.data);
    } catch (error) {
      setError(
        error.response?.data?.error?.message ||
        "Unable to fetch weather."
      );
      setWeatherData(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeather(city);
  }, []);

  return (
    <>
      <div className=" w-md mx-auto h-[600px] items-center border-2 border-gray-300 rounded-lg shadow-lg mt-20 bg-linear-to-r/srgb from-indigo-200 to-teal-400">
        <h1 className="text-3xl font-bold  font-lobster text-center text-green mb-4 m-4">Weather UpDate</h1>
        <SearchBar city={city} setCity={setCity} fetchWeather={fetchWeather} loading={loading} />
        {error && (
          <p className="text-center text-red-600 mt-2 font-bold text-lg font-poppins">
            {error}
          </p>
        )}

       <WeatherCard weatherData={weatherData} loading={loading} />
       < WeatherStats weatherData={weatherData} />

      </div>
    </>
  )
}

export default App
