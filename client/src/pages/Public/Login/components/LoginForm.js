import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/styles';
import { Button, TextField, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { login } from '../../../../store/actions';
import { history } from '../../../../utils';

const useStyles = makeStyles(theme => ({
  form: {
    paddingLeft: '100px',
    paddingRight: '100px',
    paddingBottom: '125px',
    flexBasis: '700px',
    [theme.breakpoints.down('sm')]: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2)
    }
  },
  title: {
    color: theme.palette.common.contrastText,
    marginTop: theme.spacing(3)
  },
  socialLogin: {
    margin: theme.spacing(4, 0)
  },
  fields: {
    marginTop: theme.spacing(2)
  },
  textField: {
    width: '100%',
    '& + & ': {
      marginTop: theme.spacing(2)
    }
  },
  progress: {
    display: 'block',
    marginTop: theme.spacing(2),
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  loginButton: {
    marginTop: theme.spacing(2),
    width: '100%'
  },
  register: {
    marginTop: theme.spacing(2),
    color: theme.palette.text.secondary
  },
  registerUrl: {
    color: theme.palette.primary.main,
    fontWeight: 'bold',
    '&:hover': {
      color: theme.palette.primary.main
    }
  },
  fieldError: {
    color: theme.palette.danger.main,
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(1)
  },
  submitError: {
    color: theme.palette.danger.main,
    alignText: 'center',
    marginBottom: theme.spacing(1),
    marginTop: theme.spacing(2)
  }
}));

function LoginForm(props) {
  const { isAuthenticated, user, redirect } = props;
  const classes = useStyles();
  const [values, setValues] = useState({ username: '', password: '' });

  useEffect(() => {
    if (isAuthenticated && redirect) {
      if (user && user.role === 'superadmin')
        return history.push('/admin/dashboard');
      return history.push('/');
    }
  }, [isAuthenticated, user, redirect]);

  const handleFieldChange = e =>
   

  {if (e.target.name === "username") {
        if (e.target.value === '') {
          alert("le nom ne peut pas etre vide");
        }
      }
      setValues({
        ...values,
        [e.target.name]: e.target.value
      })};

  return (
    <div>
    <form className={classes.form}>
      <Typography className={classes.title} variant="h2">
        Connection 
      </Typography>

      

      <div className={classes.fields}>
        <input
        

          className={classes.textField}
          label="username"
          name="username"
          onChange={event => handleFieldChange(event)}
          type="text"
          value={values.username}
          variant="outlined"
          required
        >
        </input>
        <input

        required
          className={classes.textField}
          label="Password"
          name="password"
          onChange={event => handleFieldChange(event)}
          type="password"
          value={values.password}
          variant="outlined"
        >
        </input>
      </div>

      <Button
        type="submit"
        className={classes.loginButton}
        color="primary"
        onClick={(e) => {props.login(values.username, values.password)
        e.preventDefault()
        }

      }
        size="large"
        variant="contained">
        Connection
      </Button>
      </form>
      <Typography className={classes.register} variant="body1">
        Pas un membre Tfarrej-Time ? creer un compte
        <Link className={classes.registerUrl} to="/register">
          Creer un compte
        </Link>
      </Typography>
    </div>
  );
}

const mapStateToProps = state => ({
  isAuthenticated: state.authState.isAuthenticated,
  user: state.authState.user
});
export default connect(mapStateToProps, { login })(
  LoginForm
);
