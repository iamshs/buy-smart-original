import React from 'react';
import CopyRight from '../CopyRight/CopyRight';
import FooterLink from '../FooterLink/FooterLink';
import SaleOffer from '../SaleOffer/SaleOffer';

const Footer = () => {
    return (
        <div>
           <SaleOffer />
           <FooterLink />
           <CopyRight /> 
        </div>
    );
};

export default Footer;