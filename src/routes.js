import {
    ABOUT_US_ROUTE,
    ACCOUNT_ROUTE,
    CATALOG_ROUTE,
    FAVORITE_ROUTE,
    LOGIN_ROUTE,
    PARTNERS_ROUTE,
    REGISTRATION_ROUTE
} from "./utils/consts"
import Account from "./pages/Account.jsx";
import Favorite from "./pages/Favorite.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import Partners from "./pages/Partners.jsx";
import Catalog from "./pages/Catalog.jsx";
import Auth from "./pages/Auth.jsx";

export const authRoutes = [
    {
        path: ACCOUNT_ROUTE,
        Component: Account
    },
    {
        path: FAVORITE_ROUTE,
        Component: Favorite
    },
]

export const publicRoutes = [
    {
        path: ABOUT_US_ROUTE,
        Component: AboutUs
    },
    {
        path: PARTNERS_ROUTE,
        Component: Partners
    },
    {
        path: CATALOG_ROUTE,
        Component: Catalog
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },

]