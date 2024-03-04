import React, {createContext} from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './assets/fonts/fonts.css'
import './css/variables.css'
import './css/nullstyle.css'
import './css/index.css'
import {BrowserRouter} from "react-router-dom";
import UserStore from "./stores/userStore.js";
import ItemStore from './stores/itemStore.js'
import FavoriteStore from './stores/favoriteStore.js'

export const Context = createContext(null)

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Context.Provider
            value={{
                user: new UserStore(),
                items: new ItemStore(),
                favorite: new FavoriteStore(),
            }}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Context.Provider>
    </React.StrictMode>
);

