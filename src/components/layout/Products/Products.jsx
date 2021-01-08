import React from 'react'
import { ShopContainer } from './Shop.elements'
import { useSelector } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import Product from './Product'

const Products = () => {
    const products = useSelector(state => state.firestore.ordered.product);
    return (
        <ShopContainer>
        {products && products.map(product => (
            <Product product={product} key={product.type}/>
        ))}
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
