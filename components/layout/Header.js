import Link from "next/link";
import Image from "next/image";

import logo from "../../src/imgs/logo.svg";
import adidas from "../../src/imgs/adidas.png";
import emirates from "../../src/imgs/emirates.png";
import visitRwanda from "../../src/imgs/visit-rwanda.png";

import { useState, useEffect } from "react";

import Squad from "../squad/Squad";

const Header = () => {
    const [showBasket, setShowBasket] = useState(false);

    // let location = useLocation();

    // useEffect(() => {
    //     location.pathname === "/shop" ? setShowBasket(true) : setShowBasket(false);
    // }, [location]);

    const [showTab, setShowTab] = useState(false);

    const showBasketContent = showBasket ? (
        <div className='header__wrapper_brends'>
            <div></div>
            <div></div>
            <div></div>
        </div>
    ) : (
        <div className='header__wrapper_brends'>
            <Image src={adidas} width={60} alt='' />
            <Image src={emirates} width={60} alt='' />
            <Image src={visitRwanda} width={60} alt='' />
        </div>
    );

    return (
        <div>
            <div className='header-container'>
                <header className='header'>
                    <div className='header__wrapper_top'>
                        <ul className='header__wrapper_top-list'>
                            <li>
                                <a href='https://www.facebook.com/denis.rybachok' target='_blank'>
                                    Facebook
                                </a>
                            </li>
                            <li>
                                <a href='https://github.com/Denys1994q' target='_blank'>
                                    GitHub
                                </a>
                            </li>
                            <li>
                                <a href='https://t.me/drybachok' target='_blank'>
                                    Telegram
                                </a>
                            </li>
                            <li>
                                <a href='#' target='_blank'>
                                    0975300083
                                </a>
                            </li>
                            <li>
                                <a href='#' target='_blank'>
                                    drybachok@gmail.com
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className='header__wrapper'>
                        <div className='header__wrapper_Image'>
                            <Link href='/'>
                                <Image className='header__logo' src={logo} width={110} alt='' />
                            </Link>
                        </div>
                        <div className='header__wrapper_list'>
                            <ul className='header__box_list'>
                                <li onMouseEnter={() => setShowTab(true)} className='header-squad'>
                                    <Link href='/'>Squad</Link>
                                    <div
                                        className={
                                            showTab ? "header-squad-bef header-squad-bef-active" : "header-squad-bef"
                                        }></div>
                                    <div
                                        style={{ display: showTab ? "block" : "none" }}
                                        className='header-squad-fake'></div>
                                </li>
                                <li>
                                    <Link href='/team'>Create team</Link>
                                </li>
                                <li>
                                    <Link href='/cinema'>Cinema</Link>
                                </li>
                                <li>
                                    <Link href='/shop'>Shop</Link>
                                </li>
                                <li>
                                    <Link href='/contacts'>Contact us</Link>
                                </li>
                            </ul>
                        </div>
                        {showBasketContent}
                    </div>
                </header>
                <div
                    style={{ display: showTab ? "flex" : "none" }}
                    className='header-tab'
                    onMouseLeave={e => setShowTab(false)}>
                    <Squad />
                </div>
            </div>
        </div>
    );
};

export default Header;
