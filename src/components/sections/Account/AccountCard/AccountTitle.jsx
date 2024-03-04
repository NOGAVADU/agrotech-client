import React from 'react';
import cl from './AccountCard.module.css'
const AccountTitle = ({children}) => {
    return (
        <h2 className={cl.account__title}>
            {children}
        </h2>
    );
};

export default AccountTitle;