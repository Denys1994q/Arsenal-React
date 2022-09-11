import BasketList from './BasketList';

import { useState } from 'react';

const Basket = (props) => {
    const {order, setOrder, amount, setAmount, showMessage} = props;
    // відкриття корзини
    const [openBasket, setOpenBasket] = useState(false);

    const clickOpenBasket = () => {
      if (openBasket) {
        setOpenBasket(false)
      } else {
        setOpenBasket(true)
      }
    }
    
    return (
      <>
        <div onClick={() => clickOpenBasket()} className="basket">
          <i className="fa fa-shopping-cart fa-lg"></i>
          <span className="basket-quantity">{amount}</span>
          <div style={{'display': showMessage ? 'block' : 'none'}} className='basket-message'>Shirt was added to the basket</div>
        </div>
        <BasketList openBasket={openBasket} order={order} setOrder={setOrder} setAmount={setAmount} />
      </>
    );
  };
  
  export default Basket;
  