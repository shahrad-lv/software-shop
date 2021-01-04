import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import {  useSelector } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import { Grid } from '@material-ui/core';
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    'aria-controls': `scrollable-force-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

const Services = () => {
const services = useSelector(state => state.firestore.ordered.services);
console.log(services)
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
      <Grid container justify='center' style={{textAlign: 'center'}}>
        <Grid item lg={12} alignContent='center'>Services</Grid>
        <Grid item lg={9} className={classes.root} >
        <AppBar position="static" color="default">
            <Tabs value={value} onChange={handleChange} variant="scrollable" scrollButtons="on" indicatorColor="primary" textColor="primary" aria-label="tabs" >
                {services && services.map(service => (
                    <Tab label={service.label} icon={<img width='50' height='50' src={service.imgSrc} />} {...a11yProps(service.id)} />
                ))}
            </Tabs>
        </AppBar>

        {services && services.map(service => (
            <TabPanel value={value} index={service.id-1} style={{direction: 'rtl'}}>
                {service.panel}
            </TabPanel>
        ))}

        </Grid>
      </Grid>


  );
}

export default compose(
    firestoreConnect(ownProps => [
      {
        collection: "services",
        orderBy: ['id']
      }
    ])
  )(Services)


