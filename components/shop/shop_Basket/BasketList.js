// забрати повідомлення з подякою таймер
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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";

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
            <li className='order'>
                <div className='order__pic'>
                    <img src={item.smallImgs[1]} alt='' />
                </div>
                <div className='order__info'>
                    <p className='order__name'>
                        <b>{item.name}</b>
                    </p>
                    <p className='order__price'>£{item.price}.00</p>
                    <p className='order__quantity'>
                        Quantity:
                        <span className='order__quantity-minus'>
                            <FontAwesomeIcon
                                icon={faMinus}
                                className='fa fa-minus'
                                onClick={() => minusQuantity(i)}
                                style={{ cursor: "pointer" }}></FontAwesomeIcon>
                        </span>
                        {item.quantity}
                        <span className='order__quantity-plus'>
                            <FontAwesomeIcon
                                icon={faPlus}
                                className='fa fa-plus'
                                onClick={() => plusQuantity(i)}
                                style={{ cursor: "pointer" }}></FontAwesomeIcon>
                        </span>
                    </p>
                    <p className='order__size'>Size: {item.chosenSize}</p>
                </div>
                <div className='order__price'>
                    <b>£{item.quantity * item.price}</b>
                    <div className='order__delete'>
                        <FontAwesomeIcon
                            icon={faTrash}
                            className='fa fa-trash red-color'
                            onClick={() => deleteShirt(i)}
                            style={{ cursor: "pointer" }}></FontAwesomeIcon>
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
                    <p className='basketList__emptyTitle'>YOUR BASKET IS CURRENTLY EMPTY</p>
                    <div className='basketList__emptyPic'>
                        <img src='/imgs/empty-cart.png' alt='' />
                    </div>
                    <div
                        style={{ display: thanksMessage && openedBasket ? "block" : "none" }}
                        className='basketList__thanksMsg'>
                        Thanks, your order was accepted
                    </div>
                </>
            ) : (
                <>
                    {showOrder}
                    <p className='basketList__total'>Total: £{total}.00</p>
                    <button onClick={() => showThanksBlock()} className='btn buy-btn'>
                        Buy
                    </button>
                </>
            )}
        </ul>
    );
};

export default BasketList;
