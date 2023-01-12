import weather_rain from "../../../public/imgs/weather-wet.png";
import weather_cloud from "../../../public/imgs/weather-cloud.png";

import { useSelector } from "react-redux";
import Image from "next/image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const Weather = () => {
    const weather = useSelector(state => state.mainPageSlice.weather);
    const weatherError = useSelector(state => state.mainPageSlice.weatherError);

    const month = new Date().toDateString();
    const temp = weather.main.temp;
    const typeOfWeather = weather.weather.main;

    const content = weather ? (
        <>
            <Image
                className='weatherСard__photo'
                src={typeOfWeather === "Rain" ? weather_rain : weather_cloud}
                alt='weatherCard__photo'
            />
            <div className='weatherСard__item'>Weather in {weather.name}</div>
            <br />
            <div className='weatherСard__item'>{month}</div>
            <br />
            <div className='weatherСard__item'>{temp} C</div>
            <br />
            <div className='weatherСard__item'>{weather.weather[0].main}</div>{" "}
        </>
    ) : (
        <FontAwesomeIcon icon={faSpinner} size='2x' color='red' className='fa fa-spinner fa-spin'></FontAwesomeIcon>
    );

    return (
        <div className='weatherСard'>
            {weatherError ? <div className='weatherСard__error'>Sorry, something goes wrong...</div> : content}
        </div>
    );
};

export default Weather;
