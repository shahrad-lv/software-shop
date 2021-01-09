
import React from 'react';
import { useDispatch } from 'react-redux';
import { AddToCart ,InfoName, InfoPrice, ProductContainer, ProductImg, ProductInfo } from './Product.elements';
import { addCart } from "../../../redux/Actions/productAction";

const Product = ({product}) => {

  const dispatch = useDispatch();
  const handleAdd = product => {
    dispatch(addCart(product))
  }
  
  return (
    <ProductContainer>
        <ProductImg src={product.ProductPic} alt=""/>
      <ProductInfo>
      <InfoPrice>
          {product.ProductPrice}
        </InfoPrice>
        <InfoName>
          {product.ProductName}
        </InfoName>
        </ProductInfo>
        <AddToCart onClick={() => handleAdd(product)} variant='outlined' color='secondary'> افزودن به سبد خرید</AddToCart>
    </ProductContainer>
  );
}

export default Product
