import React from 'react'
import { ProductContent, ProductPic, ProductContainer, ProductDelete,ProductName,ProductCount, ProductPrice, ProductActions } from './Cart.elements'
import DeleteIcon from '@material-ui/icons/Delete';

const CartProduct = ({product}) => {

    return (
      <ProductContainer>
        <ProductContent>
          <ProductName>{product.ProductName}</ProductName>
          <ProductPrice>قیمت : {product.ProductPrice}</ProductPrice>
          <ProductCount>تعداد : {product.Count} </ProductCount>
          <ProductActions>
            <ProductDelete variant="outlined" color="secondary" endIcon={<DeleteIcon />}>
              حذف
            </ProductDelete>
          </ProductActions>
        </ProductContent>
        <ProductPic src={product.ProductPic} />
      </ProductContainer>
    )

}

export default CartProduct