import React, {useContext, useEffect, useState} from 'react';
import ItemsList from "../components/sections/Catalog/ItemsList/ItemsList.jsx";
import Container from "../components/UI/Container/Container.jsx";
import {observer} from "mobx-react-lite";
import {Context} from "../main.jsx";
import {fetchItems} from "../http/CatalogApi.js";
import {fetchItemsFavItems} from "../http/favoriteApi.js";
import ListItem from "../components/sections/Catalog/ItemsList/ListItem.jsx";
import FavoriteInfo from "../components/sections/Favorite/FavoriteInfo/FavoriteInfo.jsx";

const Favorite = observer(() => {
    const {user, items} = useContext(Context)
    const [favItems, setFavItems] = useState([])

    useEffect(() => {
        if (user.user.id) {
            fetchItemsFavItems(user.user.id).then(data => setFavItems(data))
        }
    }, [])

    return (
        <main>
            <FavoriteInfo favItems={favItems} setFavItems={setFavItems}/>
            <Container>
                <ItemsList>
                    {favItems.map(item =>
                        <ListItem key={item.id} id={item.id} name={item.name} article={item.article}
                                  price={item.price}
                                  state={item.state} source={item.source}/>)}
                </ItemsList>
            </Container>
        </main>
    );
});

export default Favorite;