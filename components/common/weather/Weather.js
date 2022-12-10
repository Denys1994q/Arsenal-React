import weather_rain from "../../../public/imgs/weather-wet.png";
import weather_sunny from "../../../public/imgs/weather-sunny.png";
import weather_cloud from "../../../public/imgs/weather-cloud.png";

import { useState, useEffect } from "react";
import { fetchWeatherForecast } from "../../main/mainPageSlice";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";

const Weather = ({ city }) => {
    const dispatch = useDispatch();

    const weather = useSelector(state => state.mainPageSlice.weather);
    const [typeOfWeather, setTypeOfWeather] = useState(null);
    const [weatherImg, setWeatherImg] = useState(weather_rain);

    const month = new Date().toDateString();

    const temp = weather.weather ? weather.main.temp : null;

    useEffect(() => {
        dispatch(fetchWeatherForecast(city));
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
        <div className='weatherСard'>
            <Image className='weatherСard__photo' src={weatherImg} alt='weatherCard__photo' />
            <div className='weatherСard__item'>Weather in {city}</div>
            <br />
            <div className='weatherСard__item'>{month}</div>
            <br />
            <div className='weatherСard__item'>{temp} C</div>
            <br />
            <div className='weatherСard__item'>{typeOfWeather}</div>
        </div>
    );
};

export default Weather;
