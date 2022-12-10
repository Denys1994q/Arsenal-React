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
    // показує блок з гравцями
    const [showTab, setShowTab] = useState(false);
    // показує бургер меню
    const [clickedBurger, setClickedBurger] = useState(true);

    const links = [
        { to: "team", title: "Create team" },
        { to: "cinema", title: "Cinema" },
        { to: "shop", title: "Shop" },
        { to: "contacts", title: "Contact us" },
    ];

    const showLinks = links.map(item => {
        return (
            <li>
                <Link
                    href={`/${item.to}`}
                    onClick={() => closeMenu()}
                    className={asPath === `/${item.to}` ? "activeLink" : ""}>
                    {item.title}
                </Link>
            </li>
        );
    });

    useEffect(() => {
        if (window.innerWidth < 935) {
            setClickedBurger(false);
        }
    }, []);
    // відкривати закривати бургер меню
    const toggleBurgerMenu = () => {
        setClickedBurger(old => !old);

        // закривати блок з гравцями при закритті меню
        setShowTab(false);
    };

    const toggleTab = () => {
        setShowTab(old => !old);
    };
    // закрити меню після кліку на його пункти
    const closeMenu = () => {
        if (window.innerWidth < 935) {
            setClickedBurger(false);
            // закривати блок з гравцями при закритті меню
            setShowTab(false);
        }
    };

    return (
        <div>
            <header className='header'>
                <div className='header__top'>
                    <ul className='header__topList'>
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
                <div className='header__bottom'>
                    <Link className='header__logoWrapper' href='/' onClick={() => closeMenu()}>
                        <Image className='header__logo' src={logo} width={110} alt='' />
                    </Link>
                    <ul className='header__bottomList' style={{ display: clickedBurger ? "flex" : "none" }}>
                        <li onClick={() => toggleTab()} className='header-squad'>
                            Squad
                        </li>
                        {showLinks}
                    </ul>
                    <div className='header__brends'>
                        <Image src={adidas} width={50} alt='' />
                        <Image src={emirates} width={50} alt='' />
                        <Image src={visitRwanda} width={50} alt='' />
                    </div>
                </div>
                <div className='burgerMenu'>
                    <FontAwesomeIcon
                        icon={faBars}
                        className={"fa fa-bars fa-2x"}
                        onClick={() => toggleBurgerMenu()}
                        style={{ color: "white" }}></FontAwesomeIcon>
                </div>
            </header>
            <div style={{ display: showTab ? "flex" : "none" }} className='players'>
                <Squad setShowTab={setShowTab} setClickedBurger={setClickedBurger} />
            </div>
        </div>
    );
};

export default Header;
