import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
import SendIcon from '@material-ui/icons/Send';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexFlow: 'column nowrap',
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
  button: {
    alignSelf: 'flex-end',
    fontFamily: "'Red Hat Text', sans-serif",
    marginRight: '10%',
  }
}));

// CITATION: https://stackoverflow.com/questions/271171/sending-emails-with-javascript/271172#271172
const sendMail = (name, message) => {
  const link = 'mailto:andrew.hollingworth@gmail.com'
    + '?cc='
    + '&subject=' + escape(name + ' Wants to Get in Touch!')
    + '&body=' + escape(message);
  window.location.href = link;
}


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
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          endIcon={<SendIcon />}
          onClick={() => { sendMail(values.name, values.message) }}
        >
          Send
      </Button>
      </form>
    </>
  )
}