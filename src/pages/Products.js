import React from 'react';
import { useParams } from "react-router-dom";
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import HeroSlider from '../components/HeroSlider/HeroSlider';
import ProductDetail from '../components/ProductDetail/ProductDetail';
import ProductComponents from '../components/ProductComponents/ProductComponents';
import Manufacturers from '../components/Manufacturers/Manufacturers'
import productsData from '../data/products.json';

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

      <Manufacturers 
        heading="Related Manufacturers"
        ManufacturersList = {product.relatedmanufacturers}
        manufacturerLogos={product.logos}
      />

      {/* for products - we directly need to show logos without heading etc. */}
      {/* <OurPartners 
        heading="Our Partners"
        isHeadingCenter={true}
        partnerLogos={product.logos}
      /> */}
      <Footer />
    </React.Fragment>
  )
}
export default ProductsTemplate;