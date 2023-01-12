import slider1 from "../public/imgs/slider-1.jpg";
import slider2 from "../public/imgs/slider-2.jpg";
import slider3 from "../public/imgs/slider-3.jpg";
import slider4 from "../public/imgs/slider-4.jpg";
import slider5 from "../public/imgs/slider-5.jpg";
import leicester_logo from "../public/imgs/leicester_logo.png";
import arsenal_logo from "../public/imgs/logo.svg";

import Head from "next/head";
import Slider from "../components/common/slider/Slider";
import InfoCard from "../components/pages/main/infoCard/InfoCard";
import Weather from "../components/common/weather/Weather";

import { wrapper } from "../store/store";

import { weather__getWeatherFromPrerender } from "../components/pages/main/mainPageSlice";

export const getServerSideProps = wrapper.getServerSideProps(wrapper => async () => {
    const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=cea91e10193139338f543bcc88a81974`
    );
    const data = await res.json();
    wrapper.dispatch(weather__getWeatherFromPrerender(data));
});

const Main = () => {
    const slideImages = [slider2, slider1, slider3, slider4, slider5];

    return (
        <div className='main'>
            <Head>
                <title>Arsenal</title>
            </Head>
            <Slider imgs={slideImages} />
            <div className='main__right'>
                <InfoCard homeTeam={arsenal_logo} awayTeam={leicester_logo} dateOfTheMatch='2023-02-26T15:00:00' />
                <Weather />
            </div>
        </div>
    );
};

export default Main;
