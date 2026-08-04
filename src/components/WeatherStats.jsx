import humidity from '../assets/humidity.png';
import wind from '../assets/wind2.png';

const WeatherStats = ({ weatherData }) => {
    return (
        <>
            <div className="flex justify-between items-center px-8 mt-8">
                <div className="flex items-center gap-3">
                    <img src={humidity} alt="Humidity" className="w-12 h-12" />

                    <div>
                        <h3 className="text-xl font-bold">
                            {weatherData ? `${weatherData.current.humidity}%` : "--"}
                        </h3>
                        <p className="text-sm">Humidity</p>
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <img src={wind} alt="Wind" className="w-12 h-12" />

                    <div>
                        <h3 className="text-xl font-bold">
                            {weatherData ? `${weatherData.current.wind_kph} km/h` : "--"}
                        </h3>
                        <p className="text-sm">Wind Speed</p>
                    </div>
                </div>
            </div>
        </>
    );
}
export default WeatherStats;