import React from 'react'
import { Faded } from '../../../theme/globalStyle'
import Barba from '../Barba-effect/Barba'
import Header from '../Header/Header'
import { ShopContainer } from './Shop.elements'
const Shop = () => {
    return (
        <>
        <Barba pagename={' فروشگاه | Shop'}/>
        <Faded>
            <Header />
            <ShopContainer>
                Products
            </ShopContainer>
        </Faded>
        </>
    )
}

export default Shop
