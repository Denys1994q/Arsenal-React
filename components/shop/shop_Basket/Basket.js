import { useSelector, useDispatch } from "react-redux";
import { shop_openBasket } from "../shopSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons";

import BasketList from "./BasketList";

const Basket = () => {
    const dispatch = useDispatch();
    // повідомлення про доданий товар
    const message = useSelector(state => state.shopSlice.message);
    const openedBasket = useSelector(state => state.shopSlice.openedBasket);
    const amount = useSelector(state => state.shopSlice.amount);

    const clickOpenBasket = () => {
        if (openedBasket) {
            dispatch(shop_openBasket(false));
        } else {
            dispatch(shop_openBasket(true));
        }
    };

    return (
        <>
            <div onClick={() => clickOpenBasket()} className='basket'>
            <FontAwesomeIcon
                    icon={faShoppingBasket}
                    className='fa fa-shopping-cart fa-lg'
                    style={{ color: "white" }}></FontAwesomeIcon>
                <span className='basket-quantity'>{amount}</span>
                <div style={{ display: message ? "block" : "none" }} className='basket-message'>
                    Shirt was added to the basket
                </div>
            </div>
            <BasketList />
        </>
    );
};

export default Basket;
