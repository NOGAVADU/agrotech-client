import React from 'react';
import {Link} from "react-router-dom";
import  cl from './AccountCard.module.css'
const AccountLink = ({path, children}) => {
    return (
        <Link to={path} className={cl.account__link}>
            {children}
        </Link>
    );
};

export default AccountLink;