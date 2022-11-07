import logo from "../../public/imgs/logo.svg";
import adidas from "../../public/imgs/adidas.png";
import emirates from "../../public/imgs/emirates.png";
import visitRwanda from "../../public/imgs/visit-rwanda.png";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import Squad from "../squad/Squad";

const Header = () => {
    const { asPath } = useRouter();

    const [showBasket, setShowBasket] = useState(false);
    const [showTab, setShowTab] = useState(false);
    const [clickedBurger, setClickedBurger] = useState(true);

    useEffect(() => {
        if (window.innerWidth < 635) {
            setClickedBurger(false);
        }
    }, []);

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

    const toggleBurgerMenu = () => {
        setClickedBurger(old => !old);
        setShowTab(false);
    };

    const toggleTab = () => {
        setShowTab(old => !old);
    };

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
                    <div style={{ display: clickedBurger ? "flex" : "none" }} className='header__wrapper'>
                        <div className='header__wrapper_Image'>
                            <Link href='/' onClick={() => setClickedBurger(false)}>
                                <Image className='header__logo' src={logo} width={110} alt='' />
                            </Link>
                        </div>
                        <div className='header__wrapper_list'>
                            <ul className='header__box_list'>
                                <li onClick={() => toggleTab()} className='header-squad'>
                                    <div>Squad</div>
                                    <div
                                        className={
                                            showTab ? "header-squad-bef header-squad-bef-active" : "header-squad-bef"
                                        }></div>
                                    <div
                                        style={{ display: showTab ? "block" : "none" }}
                                        className='header-squad-fake'></div>
                                </li>
                                <li onClick={() => setClickedBurger(false)}>
                                    <Link href='/team' className={asPath === "/team" ? "activeLink" : ""}>
                                        Create team
                                    </Link>
                                </li>
                                <li onClick={() => setClickedBurger(false)}>
                                    <Link href='/cinema' className={asPath === "/cinema" ? "activeLink" : ""}>
                                        Cinema
                                    </Link>
                                </li>
                                <li onClick={() => setClickedBurger(false)}>
                                    <Link href='/shop' className={asPath === "/shop" ? "activeLink" : ""}>
                                        Shop
                                    </Link>
                                </li>
                                <li onClick={() => setClickedBurger(false)}>
                                    <Link href='/contacts' className={asPath === "/contacts" ? "activeLink" : ""}>
                                        Contact us
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        {showBasketContent}
                    </div>
                </header>
                <div style={{ display: showTab ? "flex" : "none" }} className='header-tab'>
                    <Squad setShowTab={setShowTab} />
                </div>
                <div className='burgerMenu'>
                    <FontAwesomeIcon
                        icon={faBars}
                        className={"fa fa-bars fa-2x"}
                        onClick={() => toggleBurgerMenu()}
                        style={{ color: "white" }}></FontAwesomeIcon>
                </div>
            </div>
        </div>
    );
};

export default Header;
