import React from 'react';
import {Link, useMatch} from "react-router-dom";
import cl from './MyLink.module.css'

const MyLink = ({children, path, ...props}) => {
    const match = useMatch({path: path, end: true})

    return (
        <Link to={path} className={match ? [cl.link, cl.link__active].join(' ') : cl.link} aria-hidden={match} {...props}>
            {children}
        </Link>
    );
};

export default MyLink;