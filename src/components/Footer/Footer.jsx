import React from 'react';
import cl from './Footer.module.css'
import MyLink from "../UI/MyLink/MyLink.jsx";
import {ABOUT_US_ROUTE, CATALOG_ROUTE, PARTNERS_ROUTE} from "../../utils/consts.js";
import logo from '../../assets/image/logo.png'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTelegram, faVk} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {

    function scrollToTop() {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
        })
    }

    return (
        <footer className={cl.footer}>
            <div className={cl.footer__container}>
                <div className={cl.footer__logo}>
                    <div className={cl.logo__imgContainer}>
                        <img src={logo} alt={'Логотип компании'} className={cl.logo__img}/>
                    </div>
                    <h3 className={cl.logo__title}>АгроТех-Сервис</h3>
                </div>
                <div className={cl.footer__nav}>
                    <ul className={cl.nav__list}>
                        <MyLink path={ABOUT_US_ROUTE} onClick={scrollToTop}>О нас</MyLink>
                        <MyLink path={PARTNERS_ROUTE} onClick={scrollToTop}>Партнеры</MyLink>
                        <MyLink path={CATALOG_ROUTE} onClick={scrollToTop}>Каталог</MyLink>
                    </ul>
                </div>
                <div className={cl.footer__social}>
                    <a className={cl.social__link} href={''}><FontAwesomeIcon icon={faTelegram}/> Telegram</a>
                    <a className={cl.social__link} href={''}><FontAwesomeIcon icon={faVk}/> Вконтакте</a>
                </div>
                <div className={cl.footer__info}>
                    Сайт разработан при поддержке гранта Фонда содействия инновациям, предоставленного в рамках
                    программы "Студенческий стартап" федерального проекта "Платформа университетского технологического
                    предпринимательства"
                </div>
                <div className={cl.footer__name}>
                    ООО "АгроСупп"
                </div>
            </div>
        </footer>
    );
};

export default Footer;