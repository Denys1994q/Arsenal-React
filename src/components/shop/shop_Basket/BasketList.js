import { useState } from "react";
import emptyCart from "../../../imgs/empty-cart.png";
import { useSelector, useDispatch } from "react-redux";
import {
    shop_clearOrder,
    shop_deleteFromOrder,
    shop_plusQuantity,
    shop_minusQuantity,
    shop_plusAmount,
    shop_minusAmount,
    shop_clearAmount,
    shop_showThanksMessage,
} from "../shopSlice";

const BasketList = () => {
    const dispatch = useDispatch();

    const order = useSelector(state => state.shopSlice.order);
    const openedBasket = useSelector(state => state.shopSlice.openedBasket);
    const thanksMessage = useSelector(state => state.shopSlice.thanksMessage);

    const minusQuantity = i => {
        if (order[i].quantity > 1) {
            dispatch(shop_minusQuantity(i));
            dispatch(shop_minusAmount());
        }
    };

    const plusQuantity = i => {
        dispatch(shop_plusQuantity(i));
        dispatch(shop_plusAmount());
    };

    const deleteShirt = iNum => {
        dispatch(shop_deleteFromOrder(iNum));
    };

    let total = 0;
    const showOrder = order.map((item, i) => {
        total += item.quantity * item.price;
        return (
            <li className='basketList-item'>
                <div className='basketList-item-img'>
                    <img src={item.smallImgs[1]} alt='' />
                </div>
                <div className='basketList-item-info'>
                    <p className='basketList-item-info-name'>
                        <b>{item.name}</b>
                    </p>
                    <p className='basketList-item-info-price'>£{item.price}.00</p>
                    <p className='basketList-item-info-quantity'>
                        Quantity:{" "}
                        <i style={{ cursor: "pointer" }} onClick={() => minusQuantity(i)} className='fa fa-minus'></i>
                        {item.quantity}
                        <i style={{ cursor: "pointer" }} onClick={() => plusQuantity(i)} className='fa fa-plus'></i>
                    </p>
                    <p className='basketList-item-info-size'>Size: {item.chosenSize}</p>
                </div>
                <div className='basketList-item-price'>
                    <b>£{item.quantity * item.price}</b>
                    <div className='basketList-item-deleteIcon'>
                        <i
                            style={{ cursor: "pointer" }}
                            onClick={() => deleteShirt(i)}
                            className='fa fa-trash red-color'></i>
                    </div>
                </div>
            </li>
        );
    });

    const showThanksBlock = () => {
        dispatch(shop_clearOrder());
        dispatch(shop_clearAmount());
        dispatch(shop_showThanksMessage(true));
    };

    return (
        <ul style={{ display: openedBasket ? "block" : "none" }} className='basketList browser-default'>
            {order.length === 0 ? (
                <>
                    <p className='basketList-empty-title'>YOUR BASKET IS CURRENTLY EMPTY</p>
                    <div className='basketList-empty-img'>
                        <img src={emptyCart} alt='' />
                    </div>
                    <div
                        style={{ display: thanksMessage && openedBasket ? "block" : "none" }}
                        className='basketList-item-messageThanks'>
                        Thanks, your order was accepted
                    </div>
                </>
            ) : (
                <>
                    {showOrder}
                    <p className='basketList-item-total'>Total: £{total}.00</p>
                    <button onClick={() => showThanksBlock()} className='btn buy-btn'>
                        Buy
                    </button>
                </>
            )}
        </ul>
    );
};

export default BasketList;