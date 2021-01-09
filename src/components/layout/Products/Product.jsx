
import React from 'react';
import { AddToCart ,InfoName, InfoPrice, ProductContainer, ProductImg, ProductInfo } from './Product.elements';


export default function MediaCard({product}) {
  const {ProductName , ProductPic, ProductPrice, type} = product

  return (
    <ProductContainer>
        <ProductImg src={ProductPic} alt=""/>
      <ProductInfo>
      <InfoPrice>
          {ProductPrice}
        </InfoPrice>
        <InfoName>
          {ProductName}
        </InfoName>
        </ProductInfo>
        <AddToCart variant='outlined' color='secondary'> افزودن به سبد خرید</AddToCart>
    </ProductContainer>
  );
}