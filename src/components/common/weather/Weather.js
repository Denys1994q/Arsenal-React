import weather_rain from "../../../imgs/weather-wet.png";
import weather_sunny from "../../../imgs/weather-sunny.png";
import weather_cloud from "../../../imgs/weather-cloud.png";

import { useState, useEffect } from "react";
import { fetchWeatherForecast } from "../../main/mainPageSlice";
import { useDispatch, useSelector } from "react-redux";

const Weather = () => {
    const dispatch = useDispatch();

    const weather = useSelector(state => state.mainPageSlice.weather);
    const [typeOfWeather, setTypeOfWeather] = useState(null);
    const [weatherImg, setWeatherImg] = useState(null);

    const month = new Date().toDateString();

    const temp = weather.weather ? weather.main.temp : null;

    useEffect(() => {
        dispatch(fetchWeatherForecast());
    }, []);

    const getType = () => {
        return weather.weather ? setTypeOfWeather(weather.weather[0].main) : null;
    };

    useEffect(() => {
        getType();
    }, [weather]);

    const getWeatherImg = () => {
        switch (typeOfWeather) {
            case "Rain":
                return setWeatherImg(weather_rain);
            case "Clouds":
                return setWeatherImg(weather_cloud);
            case "Mist":
                return setWeatherImg(weather_cloud);
            case "Clear":
                return setWeatherImg(weather_sunny);
        }
    };

    useEffect(() => {
        getWeatherImg();
    }, [typeOfWeather]);

    return (
        <div className='weather-card' style={{ backgroundImage: `url(${weatherImg})` }}>
            <div className='weather-card-info'>
                <div className='weather-card-info-title'>Weather in London</div>
                <br />
                <div className='weather-card-info-month'>{month}</div>
                <br />
                <div className='weather-card-info-deg'>{temp} C</div>
                <br />
                <div className='weather-card-info-rain'>{typeOfWeather}</div>
            </div>
        </div>
    );
};

export default Weather;
