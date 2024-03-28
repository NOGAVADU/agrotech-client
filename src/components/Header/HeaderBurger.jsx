import cl from './Header.module.css'
import Logo from "../Logo/Logo.jsx";
import MyLink from "../UI/MyLink/MyLink.jsx";
import {
    ABOUT_US_ROUTE,
    ACCOUNT_ROUTE,
    CATALOG_ROUTE,
    LOGIN_ROUTE,
    PARTNERS_ROUTE,
    REGISTRATION_ROUTE
} from "../../utils/consts.js";
import useClickOutside from "../../hooks/useClickOutside.jsx";
import React, {useContext} from "react";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUserCircle} from "@fortawesome/free-solid-svg-icons";
import {Context} from "../../main.jsx";

const HeaderBurger = () => {
    const {user} = useContext(Context)
    const {ref, isShow, setIsShow} = useClickOutside(false)

    const handleLinkClick = () => {
        window.scrollTo({
            top: 0,
            left: 0,
        });
        setIsShow(false);
    }

    return (
        <div ref={ref} className={cl.header__burger}>
            <div className={isShow ? [cl.burger__button, cl.active].join(' ') : cl.burger__button}
                 onClick={() => setIsShow(!isShow)}>
                <span className={cl.button__bar}></span>
                <span className={cl.button__bar}></span>
                <span className={cl.button__bar}></span>
            </div>
            <div className={isShow ? [cl.burger__popup, cl.active].join(' ') : cl.burger__popup}>
                <div className={cl.popup__logoContainer}>
                    <Logo/>
                    <figcaption className={cl.logo__text}>АгроТехСервис</figcaption>
                </div>
                <nav className={cl.popup__nav}>
                    <ul className={cl.popup__list}>
                        <MyLink path={ABOUT_US_ROUTE} onClick={handleLinkClick}>О нас</MyLink>
                        <MyLink path={PARTNERS_ROUTE} onClick={handleLinkClick}>Партнеры</MyLink>
                        <MyLink path={CATALOG_ROUTE} onClick={handleLinkClick}>Каталог</MyLink>
                    </ul>
                </nav>
                <div className={cl.popup__auth}>
                    {user.isAuth === true ?
                        (<div className={cl.burger__account}>
                            <Link to={ACCOUNT_ROUTE}
                                  className={cl.auth__link}
                                  onClick={handleLinkClick}>
                                <FontAwesomeIcon icon={faUserCircle} title={'Личный кабинет'}/>
                                Личный кабинет
                            </Link>
                        </div>) :
                        (<div className={cl.burger__auth}>
                            <FontAwesomeIcon
                                icon={faUserCircle}
                                className={cl.auth__icon}
                            />
                            <div className={cl.header__auth_links}>
                                <Link to={REGISTRATION_ROUTE}
                                      className={cl.auth__link}
                                      onClick={handleLinkClick}>
                                    Регистрация
                                </Link>
                                /
                                <Link to={LOGIN_ROUTE} className={cl.auth__link}>
                                    Войти
                                </Link>
                            </div>
                        </div>)}
                </div>
            </div>
        </div>
    );
};

export default HeaderBurger