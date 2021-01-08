
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    width: 320,
    margin: '2rem',
    background: 'silver',
    padding: '2rem',
  },
  media: {
    height: 300,
    marginBottom: '2rem',
  },
});

export default function MediaCard({product}) {
  const {ProductName , ProductPic, ProductPrice, type} = product
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={ProductPic}
          title={ProductName}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p" style={{color: '#000', marginBottom: '.5rem'}}>
            Product Name : {ProductName}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" style={{color: '#000', marginBottom: '.5rem'}}>
            Product Price : {ProductPrice}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" style={{color: '#000', marginBottom: '.5rem'}}>
            Product type : {type}
          </Typography>
        </CardContent>
      </CardActionArea>

    </Card>
  );
}