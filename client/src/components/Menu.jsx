import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import About from './About';
import Contact from './Contact';
import Projects from './Projects';
import Footer from './Footer'

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}
    >
      <Box className='view'>{children}</Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `nav-tab-${index}`,
    'aria-controls': `nav-tabpanel-${index}`,
  };
}

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={event => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    padding: 0,
    margin: 0,
  },
  appBar: {
    display: 'flex',
    flexFlow: 'row-reverse',
    justifyContent: 'space-between'
  },
  tabs: {
    fontFamily: "'Montserrat', sans-serif",
    padding: 0,
    margin: 0,
  },
  title: {
    fontFamily: "'Red Hat Text', sans-serif",
    marginLeft: theme.spacing(1),
    marginTop: theme.spacing(0.6),
    marginBottom: theme.spacing(0.8),
  }
}));

export default function Menu(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = index => {
    setValue(index);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Tabs
          variant="standard"
          value={value}
          onChange={handleChange}
          aria-label="nav tabs"
        >
          <LinkTab label="About Me" href="/about" {...a11yProps(0)} />
          <LinkTab label="My Work" href="/projects" {...a11yProps(1)} />
          <LinkTab label="Get in Touch" href="/contact" {...a11yProps(2)} />
        </Tabs>
        <Typography className={classes.title} variant="h4">
          Andrew Hollingworth
        </Typography>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}>
        <TabPanel className={classes.tabs} value={value} index={0}>
          <About />
        </TabPanel>
        <TabPanel className={classes.tabs} value={value} index={1}>
          <Projects />
        </TabPanel>
        <TabPanel className={classes.tabs} value={value} index={2}>
          <Contact />
        </TabPanel>
      </SwipeableViews>
      <Footer />
    </div>
  );
}
