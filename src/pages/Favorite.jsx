import React, {useContext, useEffect, useState} from 'react';
import ItemsList from "../components/sections/Catalog/ItemsList/ItemsList.jsx";
import Container from "../components/UI/Container/Container.jsx";
import {observer} from "mobx-react-lite";

const Favorite = observer(() => {


    return (
        <main>
            Favorite
            <Container>
                <ItemsList>

                </ItemsList>
            </Container>
        </main>
    );
});

export default Favorite;