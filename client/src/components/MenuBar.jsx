import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme, withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Hidden from '@material-ui/core/Hidden';
import withWidth from '@material-ui/core/withWidth';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton'
import About from './About';
import Contact from './Contact';
import Projects from './Projects';
import Footer from './Footer'
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';

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

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})(props => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'left',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'left',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles(theme => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);


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
    fontFamily: "'Red Hat Text', sans-serif",
    padding: 0,
    margin: 0,
  },
  title: {
    fontFamily: "'Red Hat Text', sans-serif",
    marginLeft: theme.spacing(1),
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(0.8),
    [theme.breakpoints.up('sm')]: {
      fontSize: '1.75rem'
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '1.5rem'
    },
  },
  menuButton: {
    marginRight: theme.spacing(1.5),
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

const MenuBar = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const { width } = props;
  const [value, setValue] = React.useState(0);
  const { container } = props;
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = index => {
    setValue(index);
  };

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <IconButton
          color="inherit"
          aria-label="open menu"
          edge="start"
          onClick={handleClick}
          className={classes.menuButton}
        >
          <MenuIcon />
        </IconButton>
        <StyledMenu
          id="customized-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <StyledMenuItem onClick={(e) => { handleChange(e, 0) }} >
            <ListItemText primary="About Me" value={value} {...a11yProps(0)} />
          </StyledMenuItem>
          <StyledMenuItem onClick={(e) => { handleChange(e, 1) }}>
            <ListItemText primary="My Work" {...a11yProps(1)} />
          </StyledMenuItem>
          <StyledMenuItem onClick={(e) => { handleChange(e, 2) }}>
            <ListItemText primary="Get in Touch" {...a11yProps(2)} />
          </StyledMenuItem>
        </StyledMenu>
        <Hidden smDown>
          <Tabs
            variant="standard"
            value={value}
            onChange={handleChange}
            aria-label="nav tabs"
          >
            <LinkTab className={classes.tabs} label="About Me" href="/about" {...a11yProps(0)} />
            <LinkTab className={classes.tabs} label="My Work" href="/projects" {...a11yProps(1)} />
            <LinkTab className={classes.tabs} label="Get in Touch" href="/contact" {...a11yProps(2)} />
          </Tabs>
        </Hidden>
        <Typography className={classes.title} >
          Andrew Hollingworth
        </Typography>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex} >
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

MenuBar.propTypes = {
  width: PropTypes.oneOf(['lg', 'md', 'sm', 'xl', 'xs']).isRequired,
};

export default withWidth()(MenuBar)