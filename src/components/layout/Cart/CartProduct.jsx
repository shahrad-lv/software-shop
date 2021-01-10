import React from 'react'
import { useDispatch } from 'react-redux';
import { ProductContent, ProductPic, ProductContainer, ProductDelete,ProductName,ProductCount, ProductPrice, ProductActions } from './Cart.elements'
import DeleteIcon from '@material-ui/icons/Delete';
import { removeCart } from "../../../redux/Actions/cartAction";
import { connect } from "react-redux";

const CartProduct = ({product}) => {

  const dispatch = useDispatch();
  const handleRemove = (product) => {
    dispatch(removeCart(product))
  }

    return (
      <ProductContainer>
        <ProductContent>
          <ProductName>{product.ProductName}</ProductName>
          <ProductPrice>قیمت : {product.ProductPrice}</ProductPrice>
          <ProductCount>تعداد : {product.Count} </ProductCount>
          <ProductActions>
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