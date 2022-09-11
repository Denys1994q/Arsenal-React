import logo from "../../imgs/logo.svg";
import adidas from "../../imgs/adidas.png";
import emirates from "../../imgs/emirates.png";
import visitRwanda from "../../imgs/visit-rwanda.png";
// хуки
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

const Header = (props) => {
  const [showBasket, setShowBasket] = useState(false);

  let location = useLocation();
  
  useEffect(() => {
    location.pathname === '/shop' ? setShowBasket(true) : setShowBasket(false)
  }, [location])

  const {players} = props; 

  const [showTab, setShowTab] = useState(false);

  const showGoalkeepers = players ? players[0].goalkeepers.map(item => {
      return (
        <li key={item.squadNumber}><Link to={`/team/${item.squadNumber}`}><span>{item.squadNumber}</span>{item.name}</Link></li>
      )
  }) : null;

  const showDefenders = players ? players[1].defenders.map(item => {
    return (
      <li key={item.squadNumber}><Link to={`/team/${item.squadNumber}`}><span>{item.squadNumber}</span>{item.name}</Link></li>
    )
  }) : null;

  const showMidfielders = players ? players[2].midfielders.map(item => {
    return (
      <li key={item.squadNumber}><Link to={`/team/${item.squadNumber}`}><span>{item.squadNumber}</span>{item.name}</Link></li>
    )
  }) : null;

  const showForwards = players ? players[3].forwards.map(item => {
    return (
      <li key={item.squadNumber}><Link to={`/team/${item.squadNumber}`}><span>{item.squadNumber}</span>{item.name}</Link></li>
    )
  }) : null;

  const showBasketContent = showBasket ? <div className='header__wrapper_brends'>
  <div></div>
  <div></div>
  <div></div>
</div> :           <div className='header__wrapper_brends'>
            <div><img src={adidas} alt='' /></div>
            <div><img src={emirates} alt='' /></div>
            <div><img src={visitRwanda} alt='' /></div>
          </div> 
  

  return (
    <div>
    <div className='header-container'>
      <header className='header'>
        <div className='header__wrapper_top'>
          <ul className='header__wrapper_top-list'>
            <li><a href="">Arsenal women</a></li>
            <li><a href="">Hospitality</a></li>
            <li><a href="">Stadium tours</a></li>
            <li><a href="">Arsenal direct</a></li>
            <li><a href="">Junior gunners</a></li>
            <li><a href="">Contact</a></li>
          </ul>
        </div>
        <div className='header__wrapper'>
          <div className='header__wrapper_img'>
            <Link to="/">
              <img className='header__logo' src={logo} alt='' />
            </Link>
          </div>
          <div className='header__wrapper_list'>
            <ul className='header__box_list'>
                <li onMouseEnter={() => setShowTab(true)} className='header-squad'>
                  <Link to="/">Squad</Link>
                  <div className={showTab ? "header-squad-bef header-squad-bef-active" : "header-squad-bef"}></div>
                  <div style={{'display': showTab ? 'block' : 'none'}} className='header-squad-fake'></div>
                </li>
              <li><Link to="/team">Create team</Link></li>
              <li><Link to="/cinema">Cinema</Link></li>
              <li><Link to="/shop">Shop</Link></li>
              <li><Link to="/shop">Form</Link></li>
            </ul>
          </div>
            {showBasketContent}
        </div>
      </header>
      <div style={{'display': showTab ? 'flex' : 'none'}} className="header-tab" onMouseLeave={(e) => setShowTab(false)}>
        <div className="header-tab-item">
          <p>GOALKEEPERS</p>
          <ul>
            {showGoalkeepers}
          </ul>
        </div>
        <div className="header-tab-item">
          <p>DEFENDERS</p>
          <ul>
            {showDefenders}
          </ul>
        </div>
        <div className="header-tab-item">
          <p>MIDFIELDERS</p> 
          <ul>
            {showMidfielders}
          </ul>
        </div>
        <div className="header-tab-item">
          <p>FORWARDS</p> 
          <ul>
            {showForwards}
          </ul>
        </div>
    </div>
    </div>
    </div>
  );
};

export default Header;
