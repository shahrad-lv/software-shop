import React from 'react'
import CartProducts from './CartProduct'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'
import { useSelector } from 'react-redux';
import { CartContainer, ProductItem } from './Cart.elements';
import { Grid } from '@material-ui/core';

const Cart = () => {
    const carts = useSelector(state => state.firestore.ordered.cart);
    return (
        <ProductItem item sm={8}>
          {carts && carts.map(cart => (
              <CartProducts cart={cart} key={cart.id}/>
          ))}
        </ProductItem>
    )
}

export default compose(
    firestoreConnect(ownProps => [
      {
        collection: "cart",
        orderBy: ['type']
      }
    ])
  )(Cart)
