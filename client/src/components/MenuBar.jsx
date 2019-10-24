import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
// MATERIAL UI PARTS
import { makeStyles, useTheme, withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Hidden from '@material-ui/core/Hidden';
import withWidth from '@material-ui/core/withWidth';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
// ICONS/BUTTONS
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton'
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
// COMPONENTS
import About from './About';
import Contact from './Contact';
import Projects from './Projects';
import Footer from './Footer'

// === === === === TABS AND TAB PANELS === === === === //
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

// === === === === MOBILE MENU  === === === === //
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
    '& .MuiListItemText-primary': {
      fontFamily: "'Red Hat Text', sans-serif",
    },
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

// === === === === STYLES === === === === //
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    padding: 0,
    margin: 0,
    minHeight: '96%',
  },
  appBar: {
    display: 'flex',
    flexFlow: 'row-reverse',
    justifyContent: 'space-between'
  },
  tabs: {
    fontFamily: "'Red Hat Text', sans-serif",
    fontSize: '1em',
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
  backToTop: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    zIndex: 2,
  },
}));

// === === === === FUNCTIONAL COMPONENT === === === === //
const MenuBar = (props) => {
  // === === === === BUILDERS HOOKS === === === === //
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
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

  function ScrollTop(props) {
    const { children } = props;
    const classes = useStyles();
    const trigger = useScrollTrigger();

    const handleBackToTop = event => {
      const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');
      if (anchor) {
        anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    };

    return (
      <Zoom in={trigger}>
        <div onClick={handleBackToTop} role="presentation" className={classes.backToTop}>
          {children}
        </div>
      </Zoom>
    );
  }

  ScrollTop.propTypes = {
    children: PropTypes.element.isRequired,
  };
  // === === === === RENDER === === === === //
  return (
    <div className={classes.root}>
      <AppBar id="back-to-top-anchor" position="static" className={classes.appBar}>
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
            <ListItemText primary="My Work" {...a11yProps(0)} />
          </StyledMenuItem>
          <StyledMenuItem onClick={(e) => { handleChange(e, 1) }}>
            <ListItemText primary="About Me" {...a11yProps(1)} />
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
            <LinkTab className={classes.tabs} label="My Work" href="/projects" {...a11yProps(0)} />
            <LinkTab className={classes.tabs} label="About Me" href="/about" {...a11yProps(1)} />
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
          <Projects />
        </TabPanel>
        <TabPanel className={classes.tabs} value={value} index={1}>
          <About />
        </TabPanel>
        <TabPanel className={classes.tabs} value={value} index={2}>
          <Contact />
        </TabPanel>
      </SwipeableViews>
      <ScrollTop {...props}>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
      <Footer />
    </div>
  );
}

// MenuBar.propTypes = {
//   width: PropTypes.oneOf(['lg', 'md', 'sm', 'xl', 'xs']).isRequired,
// };


export default withWidth()(MenuBar)