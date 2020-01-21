import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  link: {
    [theme.breakpoints.up('sm')]: {
      margin: theme.spacing(1),
      fontSize: '0.8em'
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '0.6em',
      margin: theme.spacing(0.5),
    },
    '&:hover': {
      color: '#829baf',
    }
  },
  copy: {
    fontSize: '0.7em',
    fontFamily: 'Montserrat, sans-serif'
  }
}));

export default function Footer() {
  const classes = useStyles();
  return (
    <>
      <div className='footer'>
        <Typography>
          <Link href="https://github.com/andrew-hollingworth" target='_blank' rel="noopener noreferrer" color='secondary' className={classes.link}>
            <span className="iconify" data-icon="brandico:github" data-inline="false" data-width="2em" data-height="2em"></span>
          </Link>
          <Link href="https://github.com/andrew-hollingworth/resume/raw/master/Andrew%20Hollingworth%20Resume%202020.pdf" target='_blank' rel="noopener noreferrer" color='secondary' className={classes.link}>
            <span className="iconify" data-icon="mdi:file-account" data-inline="false" data-width="2em" data-height="2em"></span>
          </Link>
          <Link href="https://www.linkedin.com/in/andrew-hollingworth/" target='_blank' rel="noopener noreferrer" color="secondary" className={classes.link}>
            <span className="iconify" data-icon="brandico:linkedin" data-inline="false" data-width="2em" data-height="2em"></span>
          </Link>
          <Link href="https://soundcloud.com/user-864435869/sets/have-yourself-a-chili-dog-for-christmas" target='_blank' rel="noopener noreferrer" color="secondary" className={classes.link}>
            <span className="iconify" data-icon="fa-brands:soundcloud" data-inline="false" data-width="2em" data-height="2em"></span>
          </Link>
        </Typography>
        <Typography color='secondary' className={classes.copy}>© Andrew Hollingworth 2019</Typography>
      </div>
    </>
  )
}
