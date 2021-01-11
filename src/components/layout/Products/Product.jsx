import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AddToCart ,InfoName, InfoPrice, ProductContainer, ProductImg, ProductInfo, Actions, LaunchButton, ImgLink } from './Product.elements';
import { addCart } from "../../../redux/Actions/productAction";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import LaunchIcon from '@material-ui/icons/Launch';
import Slide from '@material-ui/core/Slide';
import NumberFormat from 'react-number-format';
import { Link } from 'react-router-dom';
import { IconButton } from '@material-ui/core';

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
  const linkAddress = `/product/${product.id}`;
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
        <ImgLink to={linkAddress}>
          <ProductImg src={product.ProductPic} alt="" title={product.ProductName}/>
        </ImgLink>
        <ProductInfo>
          <InfoPrice>
              <NumberFormat value={product.ProductPrice} displayType={'text'} thousandSeparator={true} renderText={value => <div style={{display: 'flex', flexDirection: 'row-reverse', justifyContent: 'flex-end'}}><span>{value}</span>تومان</div>} />
          </InfoPrice>
          <InfoName>
              {product.ProductName}
          </InfoName>
        </ProductInfo>
        {/* linkAddress */}
        <Actions>
          <AddToCart onClick={() => handleAdd(product)} variant='outlined' color='secondary'> افزودن به سبد خرید</AddToCart>
          <LaunchButton color='secondary' size='large' component={Link} to={linkAddress} endIcon={<LaunchIcon />} disableFocusRipple disableRipple></LaunchButton>
        </Actions>
      </ProductContainer>
    </>

  );
}

export default Product

