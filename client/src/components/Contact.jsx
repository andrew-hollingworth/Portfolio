import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    padding: '2em 0 0 0'
  },
  textField: {
    margin: '1em auto',
    width: '80%',
  },
  placeholder: {
    fontFamily: "'Red Hat Text', sans-serif",
  },
  text: {
    fontFamily: "'Montserrat', sans-serif",
  },
  dense: {
    marginTop: theme.spacing(2),
  },
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
}));

export default function Contact() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };
  return (
    <>
      <Typography className={classes.header} variant='h2'>Get in Touch!</Typography>
      <form className={classes.container} noValidate autoComplete="on">
        <TextField
          id="name"
          label="Name"
          className={classes.textField}
          value={values.name}
          onChange={handleChange('name')}
          variant="filled"
          InputLabelProps={{
            className: classes.placeholder,
          }}
          InputProps={{
            className: classes.text,
          }}
        />
        <TextField
          id="email"
          label="Email"
          className={classes.textField}
          value={values.email}
          onChange={handleChange('email')}
          variant="filled"
          InputLabelProps={{
            className: classes.placeholder,
          }}
          InputProps={{
            className: classes.text,
          }}
        />
        <TextField
          id="message"
          label="Message"
          className={classes.textField}
          value={values.message}
          onChange={handleChange('message')}
          variant="filled"
          InputLabelProps={{
            className: classes.placeholder,
          }}
          InputProps={{
            className: classes.text,
          }}
          multiline
          rows='4'
          rowsMax="6"
        />
      </form>
    </>
  )
}