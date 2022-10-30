import { shirts } from "./data";
// компоненти
import Basket from "./shop_Basket/Basket";
import ShopDesc from "./shop_Description/ShopDesc";
// хуки
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactImageMagnify from "react-image-magnify";

import { shop_addToOrder, shop_plusAmount, shop_showMessage } from "./shopSlice";

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
                        <img
                            className={activeSmall === 0 ? "activeImg" : ""}
                            src={shirts[active].smallImgs[0]}
                            alt=''
                        />
                    </div>
                    <div onClick={() => setActiveSmall(1)} className='shop-shirt-left-item'>
                        <img
                            className={activeSmall === 1 ? "activeImg" : ""}
                            src={shirts[active].smallImgs[1]}
                            alt=''
                        />
                    </div>
                    <div onClick={() => setActiveSmall(2)} className='shop-shirt-left-item'>
                        <img
                            className={activeSmall === 2 ? "activeImg" : ""}
                            src={shirts[active].smallImgs[2]}
                            alt=''
                        />
                    </div>
                </div>
                <div className='shop-shirt-right'>
                    <div className='shop-shirt-right-img' onMouseLeave={() => setHideInputs(false)}>
                        <ReactImageMagnify
                            {...{
                                smallImage: {
                                    alt: "Wristwatch by Ted Baker London",
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
                            <i
                                style={{ opacity: disableBtn ? ".2" : "1" }}
                                onClick={changeActiveShirtPrev}
                                className='fa fa-chevron-left fa-3x'></i>
                        </div>
                        <div className='btn-next'>
                            <i
                                style={{ opacity: disableNextBtn ? ".2" : "1" }}
                                onClick={changeActiveShirtNext}
                                className='fa fa-chevron-right fa-3x'></i>
                        </div>
                    </div>
                </div>
            </div>
            <div className='shop-shirt-sizes'>
                <ul className='shop-shirt-sizes-list'>{contentSizes}</ul>
            </div>
            <div className='shop-shirt-price'>
                <div>
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
