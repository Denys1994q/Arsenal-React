import { useEffect, useState } from 'react';
import redShirt from '../../imgs/shirt.webp'
import emptyCart from '../../imgs/empty-cart.png'

const BasketList = (props) => {
    // кількість товарів показувати
    // сповіщення, що додано до корзини
    // закривати корзину, якщо клік повз 

    const {openBasket, order, setOrder, setAmount} = props;
    const [showMessageThanks, setShowMessageThanks] = useState(false);

    const minusQuantity = (i) => {
        const oldObj = order[i]
        if (oldObj.quantity > 1) {
            const newObj = {...oldObj, quantity: oldObj.quantity - 1}
            const newArray = [...order.slice(0, i), newObj, ...order.slice(i+1)]
            setOrder(newArray)
        }
    }

     const plusQuantity = (i) => {
        const oldObj = order[i]
        const newObj = {...oldObj, quantity: oldObj.quantity + 1}
        const newArray = [...order.slice(0, i), newObj, ...order.slice(i+1)]
        setOrder(newArray)
    }

    const deleteShirt = (iNum) => {
        const newArr = order.filter((item,i) => i !== iNum)
        setOrder(newArr)
        setAmount(prev => prev-1)
    }

    let total = 0;
    const showOrder = order.map((item, i) => {
        total += item.quantity * item.price
        return (
            <li className="basketList-item">
                <div className="basketList-item-img"><img src={item.smallImgs[1]} alt="" /></div>
                <div className="basketList-item-info">
                    <p className="basketList-item-info-name"><b>{item.name}</b></p>
                    <p className="basketList-item-info-price">£{item.price}.00</p>
                    <p className="basketList-item-info-quantity">Quantity: <i style={{'cursor': 'pointer'}} onClick={() => minusQuantity(i)} className='fa fa-minus'></i>{item.quantity}<i style={{'cursor': 'pointer'}} onClick={() => plusQuantity(i)} className='fa fa-plus'></i></p>
                    <p className="basketList-item-info-size">Size: {item.chosenSize}</p>
                </div>
                <div className="basketList-item-price">
                    <b>£{item.quantity * item.price}</b>
                    <div className="basketList-item-deleteIcon"><i style={{'cursor': 'pointer'}} onClick={() => deleteShirt(i)} className='fa fa-trash red-color'></i></div>
                </div>
            </li>
        )
    })

    const showThanksBlock = () => {
        setOrder([])
        setAmount(0)
        setShowMessageThanks(true)
    }

    return ( 
        <ul style={{'display': openBasket ? 'block' : 'none'}} className="basketList browser-default">
            {order.length === 0 ? 
            <>
            <p className="basketList-empty-title">YOUR BASKET IS CURRENTLY EMPTY</p> 
            <div className="basketList-empty-img"><img src={emptyCart} alt="" /></div>
            <div style={{'display': showMessageThanks && openBasket ? 'block' : 'none'}} className="basketList-item-messageThanks">Thanks, your order was accepted</div>
            </> :
            <>
            {showOrder}
            <p className="basketList-item-total">Total: £{total}.00</p>
            <button onClick={() => showThanksBlock()} className='btn buy-btn'>Buy</button>
            </> }
        </ul>
    )
}

export default BasketList;