import React from 'react';
import cl from './AccountCard.module.css'
const AccountControls = ({children}) => {
    return (
        <div className={cl.account__control}>
            {children}
        </div>
    );
};

export default AccountControls;