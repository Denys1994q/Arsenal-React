import { useState } from 'react';

import redShirt from '../../imgs/shirt.webp'
import redShirtSmall1 from '../../imgs/red-shirt-small1.jpg'
import redShirtSmall2 from '../../imgs/red-shirt-small2.jpg'
// import redShirtSmall3 from '../../imgs/red-shirt-small3.jpg'

import shirtYellow from '../../imgs/shirt-yellow.png'
import yellowShirtSmall1 from '../../imgs/yellow-shirt-small1.jpg'
import yellowShirtSmall2 from '../../imgs/yellow-shirt-small2.jpg'

import shirtBlack from '../../imgs/shirt-black.webp'
import blackShirtSmall1 from '../../imgs/black-shirt-small1.jpg'
import blackShirtSmall2 from '../../imgs/black-shirt-small2.jpg'

import shirtPink from '../../imgs/shirt-pink.webp'
import pinkShirtSmall1 from '../../imgs/pink-shirt-small1.jpg'
import pinkShirtSmall2 from '../../imgs/pink-shirt-small2.jpg'
// компоненти
import Basket from './Basket';
import ShopDesc from './ShopDesc';
// хуки
import { useEffect } from 'react';
import ReactImageMagnify from 'react-image-magnify';

const Shop = () => {
    const [name, setName] = useState('name');
    const [number, setNumber] = useState('?');
    const [active, setActive] = useState(0);
    const [activeSmall, setActiveSmall] = useState(0);
    const [disableBtn, setDisableBtn] = useState(false);
    const [disableNextBtn, setDisableNextBtn] = useState(false);
    const [order, setOrder] = useState([]);
    const [activeSize, setActiveSize] = useState(0);
    // к-сть замовлених товарів
    const [amount, setAmount] = useState(0);
    // повідомлення про доданий товар
    const [showMessage, setShowMessage] = useState(false);
    // приховати інпути при зумі зображення 
    const [hideInputs, setHideInputs] = useState(false);

    const [shirts, setShirts] = useState([
        {color: 'red', name: 'Arsenal 22/23 Home Shirt', img: redShirt, smallImgs: [redShirt, redShirtSmall1, redShirtSmall2], sizes: ['xs', 's', 'm', 'l', 'xl', '2xl'], chosenSize: 'xs', price: 100}, 
        {color: 'yellow', name: 'Arsenal 22/23 Second Shirt', img: shirtYellow, smallImgs: [shirtYellow, yellowShirtSmall1, yellowShirtSmall2], sizes: ['xs', 's', 'm','l', 'xl'], chosenSize: 'xs', price: 90}, 
        {color: 'black', name: 'Arsenal 22/23 Away Shirt', img: shirtBlack, smallImgs: [shirtBlack, blackShirtSmall1, blackShirtSmall2], sizes: ['s', 'm', 'l', 'xl', '2xl'], chosenSize: 'xs', price: 110}, 
        {color: 'pink', name: 'Arsenal 22/23 Third Shirt', img: shirtPink, smallImgs: [shirtPink, pinkShirtSmall1, pinkShirtSmall2], sizes: ['xs', 'm', 'l', 'xl', '2xl'], chosenSize: 'xs', price: 120}, 
    ]);

    const changeActiveShirtNext = () => {
        if (active !== shirts.length-1) {
            setActive(item => item+1)
        } else {
            setDisableNextBtn(true)
        }
    }

    const changeActiveShirtPrev = () => {
        if (active !== 0) {
            setActive(item => item-1)
        } else {
            setDisableBtn(true)
        }
    }

    const checkActiveArrow = () => {
        active === 0 ? setDisableBtn(true) : setDisableBtn(false)
        active === shirts.length-1 ? setDisableNextBtn(true) : setDisableNextBtn(false)
    } 

    useEffect(() => {
        checkActiveArrow()
    }, [active])

    const changeName = (e) => {
        if (e.target.value.length < 10) {
            setName(e.target.value)
        }    
    }

    const changeNumber = (e) => {
        if (e.target.value.length < 3) {
            setNumber(e.target.value)
        }    
    }
    
    const showInputs = activeSmall === 0 && !hideInputs ? 
    <>
        <p onMouseEnter={() => setHideInputs(true)}  style={{'color': active === 1 || active === 3 ? '#464058' : 'white', 'display': hideInputs ? 'none' : 'block'}} className='shop-shirt-title'>{name}</p>
        <p onMouseEnter={() => setHideInputs(true)} style={{'color': active === 1 || active === 3 ? '#464058' : 'white', 'display': hideInputs ? 'none' : 'block'}} className='shop-shirt-number'>{number}</p> 
        <input type="text" value={name} onChange={(e) => changeName(e)} placeholder='name' className='shop-shirt-inpText shop-shirt-inpText-1 browser-default' />
        <input type="number" value={number}  onChange={(e) => changeNumber(e)} placeholder='number' className='shop-shirt-inpText shop-shirt-inpText-2 browser-default' />
    </>                     
    : null

    const clickAddToBasket = () => {
        setAmount(prev => prev+1)
        setActiveSize(0)
        setShowMessage(true)

        let size = shirts[active].sizes[activeSize]

        const newArr = order.slice();
        const newShirt =  {...shirts[active], chosenSize: size, quantity: 1} 
        newArr.push(newShirt);

        setOrder(newArr)
    }

    const contentSizes = shirts[active].sizes.map((item, i) => {
        return (
            <li onClick={() => setActiveSize(i)} className={i === activeSize ? 'shop-shirt-sizes-list-item shop-shirt-sizes-list-item-active' : 'shop-shirt-sizes-list-item'}><div>{item}</div></li>
        )
    })

    const w = () => {
        setShowMessage(false)
    }

    useEffect(() => {
        console.log('спрацювало')
        const timer = setTimeout(() => {
            w()
        }, 2000)
        return () => {clearTimeout(timer)};
    }, [amount])


    return (
        <div className='shop'>
            <div className='shop-shirt'>
                <div className='shop-shirt-left'>
                    <div className='shop-shirt-left-title'>{shirts[active].name}</div>
                    <div onClick={() => setActiveSmall(0)} className='shop-shirt-left-item'>
                        <img className={activeSmall === 0 ? 'activeImg' : ''} src={shirts[active].smallImgs[0]} alt="" />
                    </div>
                    <div onClick={() => setActiveSmall(1)} className='shop-shirt-left-item'>
                        <img className={activeSmall === 1 ? 'activeImg' : ''} src={shirts[active].smallImgs[1]} alt="" />
                    </div>
                    <div onClick={() => setActiveSmall(2)} className='shop-shirt-left-item'>
                        <img className={activeSmall === 2 ? 'activeImg' : ''} src={shirts[active].smallImgs[2]} alt="" />
                    </div>
                </div>
                <div className='shop-shirt-right'>
                    <div className='shop-shirt-right-img' onMouseLeave={() => setHideInputs(false)}>
                        <ReactImageMagnify {...{
                        smallImage: {
                            alt: 'Wristwatch by Ted Baker London',
                            isFluidWidth: true,
                            src: shirts[active].smallImgs[activeSmall],
                        },
                        largeImage: {
                            src: shirts[active].smallImgs[activeSmall],
                            width: 1200,
                            height: 1800
                        }
                    }} />
                    </div>
                        {showInputs}
                    <div className='btns'>
                        <div className='btn-prev'><i style={{'opacity': disableBtn ? '.2' : '1'}} onClick={changeActiveShirtPrev} className='fa fa-chevron-left fa-3x'></i></div>
                        <div className='btn-next'><i style={{'opacity': disableNextBtn ? '.2' : '1'}} onClick={changeActiveShirtNext} className='fa fa-chevron-right fa-3x'></i></div>
                    </div>
                </div>
            </div>
            <div className='shop-shirt-sizes'>
                <ul className='shop-shirt-sizes-list'>
                    {contentSizes}
                </ul>
            </div>
            <div className='shop-shirt-price'>
                <div><ShopDesc /></div>
                <div className='shop-shirt-price-item'>£{shirts[active].price}.00</div>
                <button onClick={() => clickAddToBasket()} className='shop-shirt-price-btn btn'>Add to the basket</button>
            </div>
            <Basket order={order} setOrder={setOrder} amount={amount} setAmount={setAmount} showMessage={showMessage} />
        </div>
    )
}

export default Shop;