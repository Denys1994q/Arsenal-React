import slider1 from "../../../imgs/slider-1.jpg";
import slider2 from "../../../imgs/slider-2.jpg";
import slider3 from "../../../imgs/slider-3.jpg";
import slider4 from "../../../imgs/slider-4.jpg";
import slider5 from "../../../imgs/slider-5.jpg";

import { useEffect, useState } from "react";

const Slider = () => {
    const [slide, setSlide] = useState(0);

    const imgsArr = [slider1, slider2, slider3, slider4, slider5];

    const slidesAutoStart = () => {
        setSlide(old => old + 1);
    };

    useEffect(() => {
        const timer = setInterval(() => {
            // slidesAutoStart()
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        if (slide > imgsArr.length - 1) {
            setSlide(0);
        }
    }, [slide]);

    const changeSlide = i => {
        setSlide(i);
    };

    const dots = imgsArr.map((item, i) => {
        return (
            <>
                <li onClick={() => changeSlide(i)} className={slide == i ? "dot active-dot" : "dot"}></li>
            </>
        );
    });

    return (
        <div className='slider'>
            <img src={imgsArr[slide]} alt='' />
            <div className='slider-dots'>
                <ul>{dots}</ul>
            </div>
        </div>
    );
};

export default Slider;
