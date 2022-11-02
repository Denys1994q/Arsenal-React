import weather_rain from "../../../src/imgs/weather-wet.png";
import weather_sunny from "../../../src/imgs/weather-sunny.png";
import weather_cloud from "../../../src/imgs/weather-cloud.png";

import { useState, useEffect } from "react";
import { fetchWeatherForecast } from "../../main/mainPageSlice";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";

const Weather = () => {
    const dispatch = useDispatch();

    const weather = useSelector(state => state.mainPageSlice.weather);
    const [typeOfWeather, setTypeOfWeather] = useState(null);
    const [weatherImg, setWeatherImg] = useState(weather_rain);

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
        <div className='weather-card'>
            <div className='weather-card-info'>
                <Image className='weather-card-info-photo' src={weatherImg} />
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
