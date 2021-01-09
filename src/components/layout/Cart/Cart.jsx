import React from 'react'
import CartProducts from './CartProducts'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'
import { useSelector } from 'react-redux';
import { CartContainer } from './Cart.elements';
const Cart = () => {
    const carts = useSelector(state => state.firestore.ordered.cart);
    return (

        <CartContainer>
          {carts && carts.map(cart => (
              <CartProducts cart={cart} key={cart.id}/>
          ))}
        </CartContainer>
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
