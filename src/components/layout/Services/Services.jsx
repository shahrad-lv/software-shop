import React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@material-ui/core/Tabs';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { useSelector } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import { Grid } from '@material-ui/core';
import { GridContainer, StyledAppBar, Title, StyledTab, TabIcon, StyledTabPanel } from './Services.elements';

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

const Services = () => {
  
  const services = useSelector(state => state.firestore.ordered.services);

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
      <GridContainer>
        <Grid item lg={12}>
          <Title variant='h4' component="h4">Services</Title>
        </Grid>
        <Grid item lg={12}>
        <StyledAppBar position="static" elevation={0} >
            <Tabs value={value} onChange={handleChange} variant="scrollable" scrollButtons="on" aria-label="Tabs">
                {services && services.map(service => (
                    <StyledTab label={service.label} icon={<TabIcon src={service.imgSrc} />} {...a11yProps(service.id)}  />
                ))}
            </Tabs>
        </StyledAppBar>

        {services && services.map(service => (
            <TabPanel value={value} index={service.id-1}>
              <StyledTabPanel> {service.panel} </StyledTabPanel>
            </TabPanel>
        ))}
        </Grid>
      </GridContainer>


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


