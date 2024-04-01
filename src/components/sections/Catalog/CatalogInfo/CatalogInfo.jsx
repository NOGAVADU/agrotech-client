import React from 'react';
import CatalogSearch from "../CatalogSearch/CatalogSearch.jsx";
import cl from './CatatlogInfo.module.css'
import Container from "../../../UI/Container/Container.jsx";

const CatalogInfo = () => {
    return (
        <section className={cl.section}>
            <Container style={{display: 'flex', flexDirection: 'column', gap: "1rem"}}>
                <h2 className={cl.info__title}>Удобный поиск запчастей для сельскохозяйственной и прочей техники</h2>
                <CatalogSearch/>
            </Container>
        </section>
    );
};

export default CatalogInfo;