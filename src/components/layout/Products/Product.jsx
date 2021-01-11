import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AddToCart ,InfoName, InfoPrice, ProductContainer, ProductImg, ProductInfo } from './Product.elements';
import { addCart } from "../../../redux/Actions/productAction";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import Slide from '@material-ui/core/Slide';
import NumberFormat from 'react-number-format';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Product = ({product}) => {

  const [openAlert, setOpenAlert] = useState(false);
  const handleCloseAlert = () => {
      setOpenAlert(false);
  };

  const dispatch = useDispatch();
  const handleAdd = product => {
    product.stock > product.Count ?
    dispatch(addCart(product))
    : setOpenAlert(true);
  }
  
  return (
    <>
      <Dialog open={openAlert} TransitionComponent={Transition} keepMounted onClose={handleCloseAlert}>
        {/* <DialogTitle>حذف محصول</DialogTitle> */}
        <DialogContent>
          <DialogContentText>
            در انبار موجود نمی باشد
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button  color="primary" onClick={handleCloseAlert} >
            تایید
          </Button>
        </DialogActions>
      </Dialog>
      <ProductContainer>
          <ProductImg src={product.ProductPic} alt=""/>
        <ProductInfo>
          <InfoPrice>
              <NumberFormat value={product.ProductPrice} displayType={'text'} thousandSeparator={true} renderText={value => <div style={{display: 'flex', flexDirection: 'row-reverse', justifyContent: 'flex-end'}}><span>{value}</span>تومان</div>} />
          </InfoPrice>
          <InfoName>
              {product.ProductName}
          </InfoName>
        </ProductInfo>
        <AddToCart onClick={() => handleAdd(product)} variant='outlined' color='secondary'> افزودن به سبد خرید</AddToCart>
      </ProductContainer>
    </>

  );
}

export default Product

