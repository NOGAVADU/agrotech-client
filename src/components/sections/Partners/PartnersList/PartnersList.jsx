import React from 'react';
import cl from './PartnersList.module.css'
import Title from "../../../Title/Title.jsx";
import Container from "../../../UI/Container/Container.jsx";
import partners from "./partners.js";

const PartnersList = () => {
    return (
        <section className={cl.section}>
            <Container>
                <Title>Наши партнеры</Title>
                <div className={cl.partners__cards}>
                    {partners.map(partner => (
                        <article className={cl.partner__card} key={partner.title}>
                            <div className={cl.card__logo}>
                                <img className={cl.card__img} src={partner.logo} alt={partner.title + 'логотип'}/>
                            </div>
                            <h3 className={cl.card__title}>{partner.title}</h3>
                            <p className={cl.card__text}>{partner.description}</p>
                        </article>
                    ))}
                </div>

            </Container>
        </section>
    );
};

export default PartnersList;