import { useEffect, useState } from "react";
import Image from "next/image";

const Slider = ({ imgs }) => {
    const imgsArr = imgs;
    const [slide, setSlide] = useState(0);

    const slidesAutoStart = () => {
        setSlide(old => old + 1);
    };

    useEffect(() => {
        const timer = setInterval(() => {
            slidesAutoStart();
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
            <li
                key={i}
                onClick={() => changeSlide(i)}
                className={slide == i ? "slider__dot active" : "slider__dot"}></li>
        );
    });

    return (
        <div className='slider'>
            <Image className='slider__image' src={imgsArr[slide]} alt='slider__image' />
            <div className='slider__dots'>
                <ul className='slider__dotsList'>{dots}</ul>
            </div>
        </div>
    );
};

export default Slider;
