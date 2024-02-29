import React from 'react';
import logo from '../../assets/image/logo.png'
import cl from './Logo.module.css'
const Logo = () => {
    return (
        <div className={cl.logo__container}>
            <img src={logo} alt={"Логотип компании: Нарисованный черный трактор"} className={cl.logo}/>
        </div>
    );
};

export default Logo;