import React from 'react';
import { Divider, Typography, Link } from '@material-ui/core';
import useStyles from './styles';
import Chatbot from './Chatbot'
export default function Footer() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Divider />
      <Typography className={classes.copyright} variant="body1">
        &copy; Hela Saghrouni 2020
      </Typography>
      <Typography variant="caption">
        |{' '}
        <Link href="http://facebook.com/" target="_blank" rel="noopener">
          Hela Saghrouni
        </Link>
      </Typography>
      <Typography variant="caption">
       <Chatbot />
      </Typography>
    </div>
  );
}
