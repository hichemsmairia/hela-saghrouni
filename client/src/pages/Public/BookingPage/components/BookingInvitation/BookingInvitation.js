import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Typography, TextField, Grid, Button, Box } from '@material-ui/core';
import { Paper } from '../../../../../components';

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(3)
  },
  paper: { padding: theme.spacing(4) },
  gridContainer: {
    marginTop: theme.spacing(4)
  },
  successInfo: { margin: theme.spacing(3) },
  ignoreButton: {
    marginLeft: theme.spacing(3)
  }
}));

const convertToAlphabet = value => (value + 10).toString(36).toUpperCase();

export default function BookingInvitation(props) {
  const classes = useStyles(props);
  const {
    selectedSeats,
    sendInvitations,
    ignore,
    invitations,
    onSetInvitation,
    onDownloadPDF
  } = props;

  const notValidInvitations = !Object.keys(invitations).length;

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Typography variant="h4" align="center">
          Invitations pour invite
        </Typography>
        <Typography
          className={classes.successInfo}
          variant="body1"
          align="center">
          Vous avez réussi à réserver vos places. Veuillez remplir les e-mails ci-dessous,
          pour envoyer des invitations à vos amis!
        </Typography>
        <Box width={1} textAlign="center">
          <Button
            color="primary"
            variant="outlined"
            onClick={() => onDownloadPDF()}>
            Telecharger votre Pass , ce dernier contient un code QR unique
          </Button>
        </Box>
        <Grid className={classes.gridContainer} container spacing={3}>
          {selectedSeats.map((seat, index) => (
            <Grid item xs={12} md={6} lg={4} key={'seat-' + index}>
              <TextField
                fullWidth
                label="email"
                name={`${convertToAlphabet(seat[0])}-${seat[1]}`}
                helperText={`Selectionner email  : ${convertToAlphabet(
                  seat[0]
                )} - Seat Number : ${seat[1]}`}
                margin="dense"
                required
                value={
                  invitations[`${convertToAlphabet(seat[0])}-${seat[1]}`] || ''
                }
                variant="outlined"
                onChange={event => onSetInvitation(event)}
              />
            </Grid>
          ))}
          <Grid item xs={12} container>
            <Grid item>
              <Button
                disabled={notValidInvitations}
                color="primary"
                variant="outlined"
                onClick={() => sendInvitations()}>
                Envoyer les Invitations
              </Button>
            </Grid>
            <Grid item>
              <Button
                className={classes.ignoreButton}
                color="secondary"
                variant="outlined"
                onClick={() => ignore()}>
                Ignorer
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
