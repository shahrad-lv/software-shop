import React from 'react'
import { ShopContainer } from './Product.elements'
import { useSelector } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import Product from './Product'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

const Products = () => {

    const products = useSelector(state => state.firestore.ordered.product);
    const settings = {
      dots: false,
      infinite: true,
      centerMode: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      centerPadding: "30px",
      arrows: false,
      responsive: [{

        breakpoint: 1024,
        settings: {
             slidesToShow: 2,
             infinite: true
        }

   }, {

        breakpoint: 600,
        settings: {
             slidesToShow: 1,
        }

   }, {

        breakpoint: 300,
        settings: "unslick" //destroy slick

   }]
    };
    return (
        <ShopContainer>

        <Slider {...settings}>
          {products && products.map(product => (
          <Product product={product} key={product.id}/>
          ))}
        </Slider>
        
        </ShopContainer>
    )
}

export default compose(
    firestoreConnect(ownProps => [
      {
        collection: "product",
        orderBy: ['type']
      }
    ])
)(Products)
