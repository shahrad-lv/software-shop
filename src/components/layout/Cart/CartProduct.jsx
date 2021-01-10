import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { ProductContent, ProductPic, ProductContainer, ProductDelete,ProductName,ProductCount, ProductPrice, ProductActions, ProductIncrease, ProductDecrease } from './Cart.elements'
import DeleteIcon from '@material-ui/icons/Delete';
import { removeCart, Increase, Decrease } from "../../../redux/Actions/cartAction";
import { ButtonGroup } from '@material-ui/core';

const CartProduct = ({product}) => {

  const dispatch = useDispatch();
  const handleRemove = (product) => {
    dispatch(removeCart(product))
  }

  const handleIncrease = (product) => {
    product.stock > product.Count ?
    dispatch(Increase(product))
    : alert('در انبار موجود نمی باشد')
  }
  
  const handleDecrease = (product) => {
    product.Count > 1 ?
    dispatch(Decrease(product))
    : alert('تعداد نمی تواند کم تر از 1 باشد')
  }



    return (
      <ProductContainer>
        <ProductContent>
          <ProductName>{product.ProductName}</ProductName>
          <ProductPrice>قیمت : {product.ProductPrice}</ProductPrice>
          <ProductCount>تعداد : {product.Count} </ProductCount>
          <ProductActions>
            <ButtonGroup size="large" color="secondary" aria-label="button group">
              <ProductIncrease onClick={() => handleIncrease(product)}>+</ProductIncrease>
              <ProductDecrease onClick={() => handleDecrease(product)}>-</ProductDecrease>
            </ButtonGroup>
            <ProductDelete variant="outlined" color="secondary" onClick={() => handleRemove(product)} endIcon={<DeleteIcon />}>
              حذف
            </ProductDelete>
          </ProductActions>
        </ProductContent>
        <ProductPic src={product.ProductPic} />
      </ProductContainer>
    )
}

export default CartProduct