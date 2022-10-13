import slider1 from "../../imgs/slider-1.jpg";
import slider2 from "../../imgs/slider-2.jpg";
import slider3 from "../../imgs/slider-3.jpg";
import slider4 from "../../imgs/slider-4.jpg";
import slider5 from "../../imgs/slider-5.jpg";
import leicester_logo from "../../imgs/leicester_logo.png";
import arsenal_logo from "../../imgs/logo.svg";
import weather_rain from "../../imgs/weather-wet.png";
import weather_sunny from "../../imgs/weather-sunny.png";
import weather_cloud from "../../imgs/weather-cloud.png";
// хуки
import { useEffect, useState } from "react";
// компоненти
import Modal from "../modal/Modal";

const Main = (props) => {
    const { players } = props;
    const [slide, setSlide] = useState(0);
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [weather, setWeather] = useState({});
    const [typeOfWeather, setTypeOfWeather] = useState(null);
    const [weatherImg, setWeatherImg] = useState(null);
    const imgsArr = [slider1, slider2, slider3, slider4, slider5];

    const slidesAutoStart = () => {
        setSlide((old) => old + 1);
    };
    // якщо клікнув сам користувач, то таймер перестає йти
    useEffect(() => {
        const timer = setInterval(() => {
            slidesAutoStart()
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        if (slide > imgsArr.length - 1) {
            setSlide(0);
        }
    }, [slide]);

    const changeSlide = (i) => {
        setSlide(i);
    };

    const dots = imgsArr.map((item, i) => {
        return (
            <>
                <li
                    onClick={() => changeSlide(i)}
                    className={slide == i ? "dot active-dot" : "dot"}
                ></li>
            </>
        );
    });

    // timer
    const time = (deadline) => {
        const t = Date.parse(deadline) - Date.parse(new Date());
        const days = Math.floor(t / (1000 * 60 * 60 * 24));
        const hours = Math.floor((t / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((t / 1000 / 60) % 60);
        const seconds = Math.floor((t / 1000) % 60);

        setDays(days);
        setHours(hours);
        setMinutes(minutes);
        setSeconds(seconds);
    };

    useEffect(() => {
        getWeatherFromAPI();
        const timer = setInterval(() => {
            time("2022-11-23T15:00:00");
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const month = new Date().toDateString();

    // weather
    const getWeatherFromAPI = () => {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=london&units=metric&appid=cea91e10193139338f543bcc88a81974"
        )
            .then((res) => res.json())
            .then((data) => setWeather(data));
    };

    const temp = weather.weather ? weather.main.temp : null;

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
        <div className='slider-container'>
            <div className='slider'>
                <img src={imgsArr[slide]} alt='' />
                <div className='slider-dots'>
                    <ul>{dots}</ul>
                </div>
            </div>

            <div className='card'>
                <div className='card-wrapper'>
                    <div className='card-dateAndStadium'>
                        <div className='card-date'>Nov 23 Oct - 15:00</div>
                        <div className='card-stadium'>Emirates Stadium</div>
                    </div>
                    <div className='card-league'>Premier League</div>
                    <div className='card-teams'>
                        <div className='card-first-team'>
                            <div className='card-teams-logo'>
                                <img src={arsenal_logo} alt='' />
                            </div>
                            <div className='card-teams-text'>Arsenal</div>
                        </div>
                        <div className='card-teams-sign'>V</div>
                        <div className='card-second-team'>
                            <div className='card-teams-logo'>
                                <img src={leicester_logo} alt='' />
                            </div>
                            <div className='card-teams-text'>Leicester City</div>
                        </div>
                    </div>
                    <div>
                        <div>Match will start in:</div>
                        <div className='card-time'>
                            <div>{days} days</div>
                            <div>{hours} hours</div>
                            <div>{minutes} minutes</div>
                            <div>{seconds} seconds</div>
                        </div>
                    </div>
                </div>
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
            </div>
            <Modal />
        </div>
    );
};

export default Main;
