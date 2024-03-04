import React, {useContext, useEffect} from 'react';
import AccountCard from "../components/sections/Account/AccountCard/AccountCard.jsx";
import {Context} from "../main.jsx";
import {observer} from "mobx-react-lite";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faRightFromBracket} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";
import {FAVORITE_ROUTE} from "../utils/consts.js";
import AccountTitle from "../components/sections/Account/AccountCard/AccountTitle.jsx";
import AccountControls from "../components/sections/Account/AccountCard/AccountControls.jsx";
import AccountLink from "../components/sections/Account/AccountCard/AccountLink.jsx";
import AccountLogOut from "../components/sections/Account/AccountCard/AccountLogOut.jsx";
import {check} from "../http/userApi.js";

const Account = observer(() => {
    const {user} = useContext(Context)

    useEffect(() => {
        if (localStorage.getItem("token")) {
            check().then((data) => {
                user.setUser(data);
            })
        }
    }, [])
    const logOut = () => {
        user.setUser({});
        user.setIsAuth(false);
        localStorage.clear()
    };

    return (
        <main>
            <AccountCard>
                <AccountTitle>{user.user.email}</AccountTitle>
                <AccountControls>
                    <AccountLink path={FAVORITE_ROUTE}>Избранное</AccountLink>
                    <AccountLogOut onClick={logOut}/>
                </AccountControls>
            </AccountCard>
        </main>
    );
});

export default Account;