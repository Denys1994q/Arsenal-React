import logo from "../../public/imgs/logo.svg";
import adidas from "../../public/imgs/adidas.png";
import emirates from "../../public/imgs/emirates.png";
import visitRwanda from "../../public/imgs/visit-rwanda.png";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import Squad from "../squad/Squad";

const Header = () => {
    const { asPath } = useRouter();

    const [showBasket, setShowBasket] = useState(false);
    const [showTab, setShowTab] = useState(false);
    const [clickedBurger, setClickedBurger] = useState(true);

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
                    <div style={{'display': clickedBurger ? 'flex' : 'none'}} className='header__wrapper'>
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
                                    <Link href='/team' className={asPath === "/team" ? "activeLink" : ""}>
                                        Create team
                                    </Link>
                                </li>
                                <li>
                                    <Link href='/cinema' className={asPath === "/cinema" ? "activeLink" : ""}>
                                        Cinema
                                    </Link>
                                </li>
                                <li>
                                    <Link href='/shop' className={asPath === "/shop" ? "activeLink" : ""}>
                                        Shop
                                    </Link>
                                </li>
                                <li>
                                    <Link href='/contacts' className={asPath === "/contacts" ? "activeLink" : ""}>
                                        Contact us
                                    </Link>
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
                <div className='burgerMenu'>
                    <FontAwesomeIcon
                        icon={faBars}
                        className={"fa fa-bars fa-2x"}
                        onClick={() => setClickedBurger(old => !old)}
                        style={{ color: "white" }}></FontAwesomeIcon>
                </div>
            </div>
        </div>
    );
};

export default Header;
