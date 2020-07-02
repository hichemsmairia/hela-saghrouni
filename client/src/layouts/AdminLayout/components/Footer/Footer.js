import React from 'react';
import { Divider, Typography, Link } from '@material-ui/core';
import useStyles from './styles';

export default function Footer() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Divider />
      <Typography className={classes.copyright} variant="body1">
        &copy; Hela Saghrouni 2020
      </Typography>
      <Typography variant="caption">
        {' '}
        <Link href="http://georgesimos.com/" target="_blank" rel="noopener">
          Hela Saghrouni
        </Link>
      </Typography>
    </div>
  );
}
