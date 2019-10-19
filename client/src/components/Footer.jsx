import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  triangleFoot: {
    left: 0,
    bottom: 0,
    height: 0,
    width: '100%',
    position: 'fixed',
    borderLeft: '100vw solid #0041B3',
    borderRight: '0em solid transparent',
    borderBottom: '0em solid transparent',
    borderTop: '4em solid transparent',
  },
  holder: {
    left: 0,
    bottom: 0,
    position: 'fixed',
    padding: '0 0 0.3rem 0.75rem',
    textAlign: 'left',
    width: '100%',
    zIndex: 1,
  },
  link: {
    [theme.breakpoints.up('sm')]: {
      margin: theme.spacing(1),
      fontSize: '1.4em'
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '1.2em',
      margin: theme.spacing(0.5),
    },
  },
}));

export default function Footer(props) {
  const classes = useStyles();

  return (
    <>
      <div className={classes.holder}>
        <Typography>
          <Link href="https://github.com/andrew-hollingworth" target='_blank' rel="noopener" rel="noreferrer" color='secondary' className={classes.link}>
            <span className="iconify" data-icon="brandico:github" data-inline="false" data-width="1.7em" data-height="1.7em"></span>
          </Link>
          <Link href="https://www.linkedin.com/in/andrew-hollingworth/" target='_blank' rel="noopener" rel="noreferrer" color="secondary" className={classes.link}>
            <span href="https://www.linkedin.com/in/andrew-hollingworth/" className="iconify" data-icon="brandico:linkedin" data-inline="false" data-width="1.7em" data-height="1.7em"></span>
          </Link>
        </Typography>
      </div>
      <div className={classes.triangleFoot}>
      </div>
    </>
  )
}
