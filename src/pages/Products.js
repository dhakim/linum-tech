import React, { useEffect } from 'react';
import { useParams } from "react-router-dom";
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import OurPartners from '../components/OurPartners/OurPartners';
import partner3M from '../assets/images/outStrength/3M.png';
import HeroSlider from '../components/HeroSlider/HeroSlider';
import ProductDetail from '../components/ProductDetail/ProductDetail';
import ProductComponents from '../components/ProductComponents/ProductComponents';
import productsData from '../data/products.json';

const ourStrengthLogos = [
  partner3M, partner3M, partner3M, partner3M, partner3M, partner3M, partner3M, partner3M, 
];

const ProductsTemplate = () => {
  let { productTxt } = useParams();
  let product = productsData.products[`${productTxt}`];
  return (
    <React.Fragment>
      <Header/>
      <HeroSlider />
      <ProductDetail 
        heading = { product.title }
        description = { product.description }
      />

      <ProductComponents 
        heading = "Components List"
        componentList = { product.components }
      />
      <OurPartners 
        heading="Our Partners"
        isHeadingCenter={true}
        partnerLogos={product.logos}
      />
      <Footer />
    </React.Fragment>
  )
}
export default ProductsTemplate;