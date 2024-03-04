import React from 'react';
import cl from './AccountCard.module.css'
const AccountCard = ({children}) => {
    return (
        <div className={cl.account__card}>
            {children}
        </div>
    );
};

export default AccountCard;