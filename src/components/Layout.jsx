import React from 'react';
import {Outlet} from "react-router-dom";
import Header from "./Header/Header.jsx";
import Container from "./UI/Container/Container.jsx";

const Layout = () => {
    return (
        <>
            <Header/>
            <Container>
                <Outlet/>
            </Container>
        </>
    );
};

export default Layout;