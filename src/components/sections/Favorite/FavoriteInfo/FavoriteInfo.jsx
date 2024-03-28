import React from 'react';
import cl from "../../Catalog/CatalogInfo/CatatlogInfo.module.css";
import Container from "../../../UI/Container/Container.jsx";
import FavoriteSearch from "../FavoriteSearch/FavoriteSearch.jsx";

const FavoriteInfo = ({favItems, setFavItems}) => {
    return (
        <section className={cl.section}>
            <Container style={{display: 'flex', flexDirection: 'column', gap: "1rem"}}>
                <h2 className={cl.info__title}>Избранное</h2>
                <p className={cl.info__text}>Здесь располагаються ваши избранные товары. Для быстрого нахождения нужного товара воспользуйтесь поиском</p>
                <FavoriteSearch favItems={favItems} setFavItems={setFavItems}/>
            </Container>
        </section>
    );
};

export default FavoriteInfo;