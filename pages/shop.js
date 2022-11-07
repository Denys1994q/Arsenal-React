import { shirts } from "../components/shop/data";
// хуки
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactImageMagnify from "react-image-magnify";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
// компоненти
import Basket from "../components/shop/shop_Basket/Basket";
import ShopDesc from "../components/shop/shop_Description/ShopDesc";

import {
    shop_addToOrder,
    shop_plusAmount,
    shop_showMessage,
    shop_showThanksMessage,
} from "../components/shop/shopSlice";

const Shop = () => {
    const dispatch = useDispatch();

    const [name, setName] = useState("name");
    const [number, setNumber] = useState("?");
    const [active, setActive] = useState(0);
    const [activeSmall, setActiveSmall] = useState(0);
    const [disableBtn, setDisableBtn] = useState(false);
    const [disableNextBtn, setDisableNextBtn] = useState(false);
    const [activeSize, setActiveSize] = useState(0);
    // приховати інпути при зумі зображення
    const [hideInputs, setHideInputs] = useState(false);

    const amount = useSelector(state => state.shopSlice.amount);

    const changeActiveShirtNext = () => {
        if (active !== shirts.length - 1) {
            setActive(item => item + 1);
        } else {
            setDisableNextBtn(true);
        }
    };

    const changeActiveShirtPrev = () => {
        if (active !== 0) {
            setActive(item => item - 1);
        } else {
            setDisableBtn(true);
        }
    };

    const checkActiveArrow = () => {
        active === 0 ? setDisableBtn(true) : setDisableBtn(false);
        active === shirts.length - 1 ? setDisableNextBtn(true) : setDisableNextBtn(false);
    };

    useEffect(() => {
        checkActiveArrow();
    }, [active]);

    const changeName = e => {
        if (e.target.value.length < 10) {
            setName(e.target.value);
        }
    };

    const changeNumber = e => {
        if (e.target.value.length < 3) {
            setNumber(e.target.value);
        }
    };

    const showInputs =
        activeSmall === 0 && !hideInputs ? (
            <>
                <p
                    onMouseEnter={() => setHideInputs(true)}
                    style={{
                        color: active === 1 || active === 3 ? "#464058" : "white",
                        display: hideInputs ? "none" : "block",
                    }}
                    className='shop-shirt-title'>
                    {name}
                </p>
                <p
                    onMouseEnter={() => setHideInputs(true)}
                    style={{
                        color: active === 1 || active === 3 ? "#464058" : "white",
                        display: hideInputs ? "none" : "block",
                    }}
                    className='shop-shirt-number'>
                    {number}
                </p>
                <input
                    type='text'
                    value={name}
                    onChange={e => changeName(e)}
                    placeholder='name'
                    className='shop-shirt-inpText shop-shirt-inpText-1 browser-default'
                />
                <input
                    type='number'
                    value={number}
                    onChange={e => changeNumber(e)}
                    placeholder='number'
                    className='shop-shirt-inpText shop-shirt-inpText-2 browser-default'
                />
            </>
        ) : null;

    const clickAddToBasket = () => {
        dispatch(shop_plusAmount());
        setActiveSize(0);

        dispatch(shop_showMessage(true));

        let size = shirts[active].sizes[activeSize];

        const newShirt = { ...shirts[active], chosenSize: size, quantity: 1 };

        dispatch(shop_addToOrder(newShirt));
        dispatch(shop_showThanksMessage(false));
    };

    const contentSizes = shirts[active].sizes.map((item, i) => {
        return (
            <li
                onClick={() => setActiveSize(i)}
                className={
                    i === activeSize
                        ? "shop-shirt-sizes-list-item shop-shirt-sizes-list-item-active"
                        : "shop-shirt-sizes-list-item"
                }>
                <div>{item}</div>
            </li>
        );
    });

    const w = () => {
        dispatch(shop_showMessage(false));
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            w();
        }, 2000);
        return () => {
            clearTimeout(timer);
        };
    }, [amount]);

    return (
        <div className='shop'>
            <div className='shop-shirt'>
                <div className='shop-shirt-left'>
                    <div className='shop-shirt-left-title'>{shirts[active].name}</div>
                    <div onClick={() => setActiveSmall(0)} className='shop-shirt-left-item'>
                        <Image
                            className={activeSmall === 0 ? "activeImg" : ""}
                            src={shirts[active].smallImgs[0]}
                            alt=''
                            width={100}
                            height={150}
                        />
                    </div>
                    <div onClick={() => setActiveSmall(1)} className='shop-shirt-left-item'>
                        <Image
                            className={activeSmall === 1 ? "activeImg" : ""}
                            src={shirts[active].smallImgs[1]}
                            alt='arsenal-shirt'
                            width={100}
                            height={150}
                        />
                    </div>
                    <div onClick={() => setActiveSmall(2)} className='shop-shirt-left-item'>
                        <Image
                            className={activeSmall === 2 ? "activeImg" : ""}
                            src={shirts[active].smallImgs[2]}
                            alt='arsenal-shirt'
                            width={100}
                            height={150}
                        />
                    </div>
                </div>
                <div className='shop-shirt-right'>
                    <div className='shop-shirt-right-img' onMouseLeave={() => setHideInputs(false)}>
                        <ReactImageMagnify
                            {...{
                                smallImage: {
                                    alt: "arsenal-shirt-zoomed",
                                    isFluidWidth: true,
                                    src: shirts[active].smallImgs[activeSmall],
                                },
                                largeImage: {
                                    src: shirts[active].smallImgs[activeSmall],
                                    width: 1200,
                                    height: 1800,
                                },
                            }}
                        />
                    </div>
                    {showInputs}
                    <div className='btns'>
                        <div className='btn-prev'>
                            <FontAwesomeIcon
                                icon={faChevronLeft}
                                className='fa fa-chevron-left fa-3x'
                                onClick={changeActiveShirtPrev}
                                style={{ opacity: disableBtn ? ".2" : "1" }}></FontAwesomeIcon>
                        </div>
                        <div className='btn-next'>
                            <FontAwesomeIcon
                                icon={faChevronRight}
                                className='fa fa-chevron-right fa-3x'
                                onClick={changeActiveShirtNext}
                                style={{ opacity: disableNextBtn ? ".2" : "1" }}></FontAwesomeIcon>
                        </div>
                    </div>
                </div>
            </div>
            <div className='shop-shirt-sizes'>
                <ul className='shop-shirt-sizes-list'>{contentSizes}</ul>
            </div>
            <div className='shop-shirt-price'>
                <div className='shopDesc'>
                    <ShopDesc />
                </div>
                <div className='shop-shirt-price-item'>£{shirts[active].price}.00</div>
                <button onClick={() => clickAddToBasket()} className='shop-shirt-price-btn btn'>
                    Add to the basket
                </button>
            </div>
            <Basket />
        </div>
    );
};

export default Shop;
