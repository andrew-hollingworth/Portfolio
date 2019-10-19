import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles(theme => ({
  header: {
    fontFamily: "'Red Hat Text', sans-serif",
    padding: '0.4em 0 0 0',
    textAlign: 'center',
    [theme.breakpoints.up('sm')]: {
      fontSize: '3rem'
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '2.9rem'
    },
  },
  body: {
    fontFamily: "'Montserrat', sans-serif",
    padding: '2em 0 0 0',
    textAlign: 'center',
  },
}));

const About = () => {
  const classes = useStyles();

  return (
    <div>
      <Typography className={classes.header} variant='h3'>
        Hey, I'm Andrew.
      </Typography>
      <Typography className={classes.body} variant='body1'>
        I’m a web developer with a passion for making things, storytelling, and learning.
      </Typography>
    </div>
  )
}

export default About