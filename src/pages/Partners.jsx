import React from 'react';
import PartnersList from "../components/sections/Partners/PartnersList/PartnersList.jsx";
import PartnersContacts from "../components/sections/Partners/PartnersContacts/PartnersContacts.jsx";

const Partners = () => {
    return (
        <main>
            <PartnersList/>
            <PartnersContacts/>
        </main>
    );
};

export default Partners;