import React from 'react'
import { ProductContent, ProductPic, ProductContainer, ProductDelete,ProductName, ProductPrice, ProductActions } from './Cart.elements'
import DeleteIcon from '@material-ui/icons/Delete';
import { Button } from '@material-ui/core';
const CartProducts = ({cart}) => {

    return (
      <ProductContainer>
        <ProductContent>
          <ProductName>{cart.ProductName}</ProductName>
          <ProductPrice>قیمت : {cart.ProductPrice}</ProductPrice>
          <ProductActions>
            <ProductDelete variant="outlined" color="secondary" endIcon={<DeleteIcon />}>
              حذف
            </ProductDelete>
          </ProductActions>
        </ProductContent>
        <ProductPic src={cart.ProductPic} />
      </ProductContainer>
    )
}

export default CartProducts
