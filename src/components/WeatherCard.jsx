import sunny from "../assets/sunny.png";
const WeatherCard = ({ weatherData , loading}) => {
    return (
        <>
            <div>
                <img
                    src={
                        weatherData
                            ? `https:${weatherData.current.condition.icon}`
                            : sunny
                    }
                    alt="Weather"
                    className="mx-auto w-40"
                />
            </div>
            <div className="text-center mt-4">
                {loading ? (
                    <p className="text-xl font-semibold">Loading weather...</p>
                ) : weatherData ? (
                    <>
                        <h2 className="text-2xl font-bold">
                            {weatherData.current.temp_c}°C
                        </h2>

                        <p className="text-lg font-poppins">
                            {weatherData.location.name}, {weatherData.location.country}
                        </p>

                        <p className="text-lg font-poppins">
                            {weatherData.current.condition.text}
                        </p>

                        <p className="text-lg font-poppins">
                            Feels like: {weatherData.current.feelslike_c}°C
                        </p>
                    </>
                ) : (
                    <p className="text-lg">No weather data available.</p>
                )}
            </div>
        </>
    );
};


export default WeatherCard;