import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
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
      fontSize: '2rem'
    },
  },
  body: {
    fontFamily: "'Montserrat', sans-serif",
    margin: '0 auto',
    padding: '2em 0 0 0',
    textAlign: 'center',
    maxWidth: '90%',
    [theme.breakpoints.up('sm')]: {
      fontSize: '1rem'
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '0.7rem'
    },
  },
  resumeLink: {
    fontWeight: '600',
  },
  profile: {
    display: 'block',
    margin: '2em auto 0 auto',
    maxWidth: '84%',
  }
}));

const About = () => {
  const classes = useStyles();

  return (
    <div>
      <Typography className={classes.header} variant='h3'>
        Hey, I'm Andrew.
      </Typography>
      <Typography className={classes.body} variant='body1'>
        I’m a web developer with a passion for making things, storytelling, and learning. My experiences working in advertising and film production have taught me to plan my code three steps ahead and stay organized. My passion for storytelling has helped me articulate my ideas to others on my team accurately and effectively. And my love of learning means I’m always looking for new challenges.
      </Typography>
      <Typography variant='body1' className={classes.body}>
        <Link href="https://github.com/andrew-hollingworth/resume/raw/master/Andrew%20Hollingworth%20Resume%202020.pdf" target='_blank' rel="noopener noreferrer" color='primary' className={classes.resumeLink}>
          Take a look at my resumé!
          </Link>
      </Typography>
      <img className={classes.profile} src="https://i.imgur.com/bRgMl6q.png" alt="My Pretty Face" />
    </div>
  )
}

export default About