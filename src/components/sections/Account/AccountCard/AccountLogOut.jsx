import React from 'react';
import {faRightFromBracket} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import cl from './AccountCard.module.css'

const AccountLogOut = ({...props}) => {
    return (
        <button {...props} className={cl.account__logOut}>
            Выйти<FontAwesomeIcon icon={faRightFromBracket}/>
        </button>
    );
};

export default AccountLogOut;