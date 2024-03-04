import React, {useContext} from "react";
import {Routes, Route, Navigate} from "react-router-dom";
import {authRoutes, publicRoutes} from "../routes";
import {ABOUT_US_ROUTE} from "../utils/consts.js";
import {Context} from "../main.jsx";
import Layout from "./Layout.jsx";
import {observer} from "mobx-react-lite";

const AppRouter = observer (() => {
    const {user} = useContext(Context)
    return (
        <Routes>
            <Route path={'/'} element={<Layout/>}>
                {user.isAuth &&
                    authRoutes.map(({path, Component}) => {
                        return <Route key={path} path={path} element={<Component/>}/>;
                    })}
                {publicRoutes.map(({path, Component}) => {
                    return <Route key={path} path={path} element={<Component/>}/>;
                })}
                <Route path="*" element={<Navigate to={ABOUT_US_ROUTE} replace/>}/>
            </Route>
        </Routes>
    );
});

export default AppRouter;