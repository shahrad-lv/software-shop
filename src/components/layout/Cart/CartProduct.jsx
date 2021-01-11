import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { ProductContent, ProductPic, ProductContainer, ProductDelete,ProductName, ProductNameIR,ProductCount, ProductPrice,ProductDiscount, ProductActions, ProductIncrease, ProductDecrease, Tag } from './Cart.elements'
import DeleteIcon from '@material-ui/icons/Delete';
import { removeCart, Increase, Decrease } from "../../../redux/Actions/cartAction";
import { ButtonGroup } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import NumberFormat from 'react-number-format';
import {Link} from 'react-router-dom'

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const CartProduct = ({product}) => {

  const [openRemove, setOpenRemove] = useState(false);
  const handleClickOpenRemove = () => {
    setOpenRemove(true);
  };
  const handleCloseRemove = () => {
    setOpenRemove(false);
  };

  const dispatch = useDispatch();
  const handleRemove = (product) => {
    setOpenRemove(false);
    dispatch(removeCart(product))
  }

  const [openAlert, setOpenAlert] = useState(false);
  const handleCloseAlert = () => {
      setOpenAlert(false);
  };

  const handleIncrease = (product) => {
    product.stock > product.Count ?
    dispatch(Increase(product))
    : setOpenAlert(true);
  }
  
  const handleDecrease = (product) => {
    product.Count > 1 ?
    dispatch(Decrease(product))
    : setOpenRemove(true)
  }

  const linkAddress = `/product/${product.id}`;

    return (
      <>
      <Dialog open={openRemove} TransitionComponent={Transition} keepMounted onClose={handleCloseRemove}>
        <DialogTitle>حذف محصول</DialogTitle>
        <DialogContent>
          <DialogContentText>
            آیا مایل به حذف این محصول هستید؟ 
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button color="primary" onClick={handleCloseRemove}>
            انصراف
          </Button>
          <Button  color="primary" onClick={() => handleRemove(product)} >
            تایید
          </Button>
        </DialogActions>
      </Dialog>

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
        <ProductContent>

          
          <ProductName to={linkAddress}>{product.ProductName}</ProductName>
          <ProductNameIR>{product.ProductNameIR}</ProductNameIR>

          <ProductPrice>
            <Tag> : قیمت  </Tag>
            <NumberFormat value={product.ProductPrice} displayType={'text'} thousandSeparator={true} renderText={value => <div style={{display: 'flex', flexDirection: 'row-reverse'}}><span>{value}</span>تومان</div>} />
          </ProductPrice>
          {product.Discount &&
            <ProductDiscount>
              <Tag> : تخفیف  </Tag>
              <NumberFormat value={product.Discount} displayType={'text'} thousandSeparator={true} renderText={value => <div style={{display: 'flex', flexDirection: 'row-reverse'}}><span>{value}</span>تومان</div>} />
            </ProductDiscount>
          }
          <ProductCount>تعداد : {product.Count} </ProductCount>
          <ProductActions>
            <ButtonGroup size="large" color="secondary" aria-label="button group">
              <ProductIncrease onClick={() => handleIncrease(product)}>+</ProductIncrease>
              <ProductDecrease onClick={() => handleDecrease(product)}>-</ProductDecrease>
            </ButtonGroup>
            <ProductDelete variant="outlined" color="secondary" onClick={handleClickOpenRemove}  endIcon={<DeleteIcon />}>
              حذف
            </ProductDelete>
          </ProductActions>
        </ProductContent>
        <Link to={linkAddress}>
          <ProductPic src={product.ProductPic} title={product.ProductName}/>
        </Link>
      </ProductContainer>
      </>

    )
}

export default CartProduct