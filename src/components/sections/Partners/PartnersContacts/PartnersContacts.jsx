import React from 'react';
import cl from './PartnersContacts.module.css'
import Paragraph from "../../../Paragraph/Paragraph.jsx";
import Container from "../../../UI/Container/Container.jsx";
import Title from "../../../Title/Title.jsx";
import logo from '../../../../assets/image/logo2.png'

const PartnersContacts = () => {
    return (
        <section className={cl.section}>
            <Container>
                <p className={cl.section__text}>Мы открыты для сотрудничества и соавторства с пратнерами и участниками для развития главной
                    идеи
                    проекта - Помощь и развите Агропромышленного комплекса Российской Федерации!</p>
            </Container>
            <div className={cl.contacts__container}>
                <Container>
                    <div className={cl.grid}>
                        <div className={cl.contacts__text}>
                            <Title>Напишите нам</Title>
                            <h3 className={cl.contacts__subtitle}>Мы свяжемся с вами в ближайшее время!</h3>
                            <a className={cl.contacts__link} href={'https://forms.gle/Nx4r33xNs5DFHigs5'} target='_blank'>Стать партнером</a>
                            <a className={cl.contacts__mail} href={'mailto:oooagrosupp@mail.ru'}>oooagrosupp@mail.ru</a>
                        </div>
                        <div className={cl.contacts__logo}>
                            <img className={cl.contacts__img} src={logo} alt={'Логотип компании'}/>
                        </div>
                    </div>
                </Container>
            </div>
        </section>
    );
};

export default PartnersContacts;