import React, {useContext, useEffect, useState} from 'react';
import {Context} from "../../../../main.jsx";
import {Link, useLocation, useNavigate} from "react-router-dom";
import {CATALOG_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE} from "../../../../utils/consts.js";
import cl from './AuthWindow.module.css'
import MyLink from "../../../UI/MyLink/MyLink.jsx";
import {login, registration} from "../../../../http/userApi.js";
import {set} from "mobx";
import {useInput} from "../../../../hooks/useInput.js";
import FormInput from "../../../UI/FormInput/FormInput.jsx";
import {useFormInput} from "../../../../hooks/useFormInput.js";
import {observer} from "mobx-react-lite";

const AuthWindow = observer (() => {

    const {user} = useContext(Context)
    const location = useLocation();
    const navigate = useNavigate()
    const isLogin = location.pathname === LOGIN_ROUTE;
    const email = useInput('', {isEmpty: true, isEmail: true})
    const password = useInput('', {isEmpty: true, minLength: 5, maxLength: 25})
    const [error, setError] = useState('')
    const handleClick = async (e) => {
        e.preventDefault()
        try {
            if (isLogin) {
                await login(email.value, password.value)
            } else {
                await registration(email.value, password.value)
            }
            user.setUser(user)
            user.setIsAuth(true)
            navigate(CATALOG_ROUTE)
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <section className={cl.auth__window}>
            <h2 className={cl.auth__title}>{isLogin ? "Авторизация" : "Регистрация"}</h2>
            <form className={cl.auth__form}>
                <FormInput value={email}
                           label={"Введите вашу почту"}
                           placeholder={'example@yandex.ru'}
                           type={'email'}/>
                <FormInput value={password}
                           label={isLogin ? "Введите ваш пароль" : "Придумайте пароль"}
                           placeholder={'!qwerty123'}
                           type={"password"}/>

                <div className={cl.form__footer}>
                    {isLogin ? <p className={cl.form__text}>Нет аккаунта? <Link to={REGISTRATION_ROUTE}
                                                                                className={cl.form__link}>Зарегистрируйтесь!</Link>
                        </p>
                        : <p className={cl.form__text}>Есть аккаунт? <Link to={LOGIN_ROUTE}
                                                                           className={cl.form__link}>Авторизуйтесь!</Link>
                        </p>}
                    <button className={cl.form__btn}
                            onClick={(e) => handleClick(e)}
                            disabled={!email.valid || !password.valid}
                    >{isLogin ? 'Войти' : "Зарегистрироваться"}</button>
                </div>
            </form>
        </section>
    );
});

export default AuthWindow;