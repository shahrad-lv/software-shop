import React, { useRef, useEffect } from 'react'
import { useSelector } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Faded } from '../../../theme/globalStyle'
import { DetailContainer, DetailName, DetailPic, NameEN, NameIR , DetailPrice, DetailDiscount, DetailTag, Container, Costs} from './ProductDetail.elements';
import { TweenMax, TimelineMax, Power3,Power2, Power4 } from "gsap";
import gsap from 'gsap/gsap-core';
import { LoadContainer, LoadScreen } from '../Barba-effect/Barba.elements';
import NumberFormat from 'react-number-format';
import Header from '../Header/Header';

const ProductDetail = (props) => {
    const products = useSelector(state => state.firestore.ordered.product);
    const { match } = props;
    const { params } = match;
    const { productId } = params;

    let screen = useRef(null);
    useEffect(() => {
      
        var tl = new TimelineMax();
        tl.to(("#background"),{
          background: '#fff',
          overflow: 'hidden',
          ease: 'none',
          duration: .0, 
        })
        tl.to(("#NavIcon"),{
          opacity: 0,
          ease: Power4.easeOut,
          duration: .0, 
        })
        tl.to(("#logo"),{
          opacity: 0,
          ease: Power4.easeOut,
          duration: .0, 
        })
        tl.to(screen, {
          duration: 1.2,
          height: "100%",
          ease: Power3.easeInOut,
        });
        tl.to(screen, {
          duration: 1,
          top: "100%",
          ease: Power3.easeInOut,
          delay: 0.3,
        })
        tl.to(("#background"),{
          background: '#050b2b',
          ease: 'none',
          duration: .0, 
        })
        tl.to(("#NavIcon"),{
          opacity: 1,
          ease: Power2.easeOut,
          duration: .5, 
        })
        tl.to(("#logo"),{
          opacity: 1,
          ease: Power2.easeOut,
          duration: .5, 
        }, "-=.5")
        gsap.to(("#faded"),{
            opacity: "1",
            pointerEvents: "auto",
            ease: Power4.easeInOut,
            duration: .3, 
            delay: 2,
        })
        return () => {
            gsap.to(("#faded"),{
                opacity: "0",
                pointerEvents: 'none',
                ease: 'none',
                duration: 1, 
            })
        }
    },[]);

    return (
        <>
        <LoadContainer>
          <LoadScreen ref={(el) => (screen = el)}>
          {products && products.map(product => (
            product.id == productId &&(
              product.ProductName
            )
          ))}
          </LoadScreen>
        </LoadContainer>
          <Faded>
            <Header />
            <Container container>
            {products && products.map(product => (
                    product.id == productId &&(
                        <DetailContainer item xs={12}>
                          <DetailName>
                            <NameEN>{product.ProductName}</NameEN>
                            <NameIR>{product.ProductNameIR}</NameIR>
                          </DetailName>
                          <DetailPic src={product.ProductPic} alt="" title={product.ProductName}/>
                          <Costs>
                            <DetailPrice>
                              <DetailTag> : قیمت  </DetailTag>
                              <NumberFormat value={product.ProductPrice} displayType={'text'} thousandSeparator={true} renderText={value => <div style={{display: 'flex', flexDirection: 'row-reverse', justifyContent: 'flex-end'}}><span>{value}</span>تومان</div>} />
                            </DetailPrice>
                            {product.Discount &&
                              <DetailDiscount>
                                <DetailTag> : تخفیف  </DetailTag>
                                <NumberFormat value={product.Discount} displayType={'text'} thousandSeparator={true} renderText={value => <div style={{display: 'flex', flexDirection: 'row-reverse', justifyContent: 'flex-end'}}><span>{value}</span>تومان</div>} />
                              </DetailDiscount>
                            }
                          </Costs>
                        </DetailContainer>
                    )
              ))}
            </Container>
          </Faded>
        </>
    )
}

export default compose(
    firestoreConnect(ownProps => [
      {
        collection: "product",
        orderBy: ['type']
      }
    ])
)(ProductDetail)
