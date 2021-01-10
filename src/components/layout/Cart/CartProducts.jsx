import React from 'react'
import CartProduct from './CartProduct'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'
import { useSelector } from 'react-redux';
import { ProductItem } from './Cart.elements';

const CartProducts = () => {
    const products = useSelector(state => state.firestore.ordered.product);
    return (
        <ProductItem item md={8} xs={12}>
          {products && products.map(product => (
                product.InCart && (
                  <CartProduct product={product} key={product.id}/>
                )
          ))}
        </ProductItem>
    )
}

export default compose(
    firestoreConnect(ownProps => [
      {
        collection: "product",
        orderBy: ['InCart'],
      }
    ])
  )(CartProducts)
