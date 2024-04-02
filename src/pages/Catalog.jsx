import React, {useContext, useEffect} from 'react';
import {Context} from "../main.jsx";
import {fetchItems} from "../http/CatalogApi.js";
import {observer} from "mobx-react-lite";
import ItemsList from "../components/sections/Catalog/ItemsList/ItemsList.jsx";
import Container from "../components/UI/Container/Container.jsx";
import ListItem from "../components/sections/Catalog/ItemsList/ListItem.jsx";
import CatalogInfo from "../components/sections/Catalog/CatalogInfo/CatalogInfo.jsx";
import CatalogAuth from "../components/sections/Catalog/CatalogAuth/CatalogAuth.jsx";
import Pagination from "../components/Pagination/Pagination.jsx";
import ItemCreate from "../components/ItemCreate/ItemCreate.jsx";
import ExelUpload from "../components/ExelUpload/ExelUpload.jsx";
import CatalogClearBtn from "../components/sections/Catalog/CatalogClearBtn/CatalogClearBtn.jsx";

const Catalog = observer(() => {
    const {items, user} = useContext(Context)

    useEffect(() => {
        fetchItems(items.page, items.limit).then(data => {
            items.setItems(data.rows)
            items.setTotalCount(data.count)
        })
    }, []);

    useEffect(() => {
        fetchItems(items.page, items.limit).then(data => {
            items.setItems(data.rows)
            items.setTotalCount(data.count)
        })
    }, [items.page]);

    return (
        <main>
            {!user.isAuth && (
                <CatalogAuth/>
            )}
            <div style={!user.isAuth ? {filter: 'blur(0.2rem)', pointerEvents: 'none'} : {filter: "blur(0)"}}>
                <CatalogInfo/>
                <Container>
                    {user.user.role === "ADMIN" || user.user.role === "SUPPLIER" ?
                        <div>
                            <ItemCreate/>
                            <ExelUpload/>
                            <CatalogClearBtn/>
                        </div>
                        : ''
                    }
                    <ItemsList>
                        {items.items.length ? (
                            items.items.map(item => (
                                <ListItem key={item.id} id={item.id} name={item.name} article={item.article}
                                          price={item.price}
                                          state={item.state} source={item.source}/>
                            ))
                        ) : 'ничего не найдено'}
                    </ItemsList>
                    <Pagination/>
                </Container>
            </div>
        </main>
    );
});

export default Catalog;