import React from 'react'
import { useSelector } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { PaymentItem } from './Cart.elements'
import NumberFormat from 'react-number-format';
import { Tag, Price, Discount, Pay, Finalize } from './Cart.elements'

const Payment = () => {

    const products = useSelector(state => state.firestore.ordered.product);

        let TotalCount = 0;
        let TotalDiscountCount= 0;
        let TotalPrice = 0;
        let TotalDiscount = 0;
        let Total = 0;
        for (let x in products) {
                if (products[x].InCart) {
                    TotalCount += products[x].Count
                    TotalPrice += products[x].ProductPrice * products[x].Count
                    if(products[x].Discount) {
                        TotalDiscountCount += products[x].Count
                        TotalDiscount += products[x].Discount * products[x].Count
                    }
                    Total = TotalPrice - TotalDiscount
                }
        }

    return (
        <PaymentItem item md={3} xs={12} style>
            <Price xs={12}>
                <Tag>قیمت کالا ها <span>({TotalCount})</span></Tag>
                <NumberFormat value={TotalPrice} displayType={'text'} thousandSeparator={true} renderText={value => <div style={{display: 'flex', flexDirection: 'row-reverse'}}><span>{value}</span>تومان</div>} />
            </Price>
            <Discount xs={12}>
                <Tag>تخفیف کالا ها <span>({TotalDiscountCount})</span></Tag>
                <NumberFormat value={TotalDiscount} displayType={'text'} thousandSeparator={true} renderText={value => <div style={{display: 'flex', flexDirection: 'row-reverse'}}><span>{value}</span>تومان</div>} />
            </Discount>
            <Pay>
                <Tag>مبلغ قابل پرداخت</Tag>
                <NumberFormat value={Total} displayType={'text'} thousandSeparator={true} renderText={value => <div style={{display: 'flex', flexDirection: 'row-reverse'}}><span>{value}</span>تومان</div>} />
            </Pay>
            <Finalize variant='outlined' color='secondary' fullWidth size='large'> تکمیل سفارش </Finalize>
        </PaymentItem>
    )
}

export default compose(
    firestoreConnect(ownProps => [
      {
        collection: "product",
        orderBy: ['InCart'],
      }
    ])
)(Payment)

