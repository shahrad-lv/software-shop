import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    maxHeight: 405,
    margin: '3rem',
  },
  media: {
    height: 140,
  },
});

const CartProducts = ({cart}) => {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={cart.ProductPic}
            title={cart.ProductName}
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              Product Name : {cart.ProductName}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Product Price : {cart.ProductPrice}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Product type : {cart.type}
            </Typography>
          </CardContent>
        </CardActionArea>
  
      </Card>
    )
}

export default CartProducts
