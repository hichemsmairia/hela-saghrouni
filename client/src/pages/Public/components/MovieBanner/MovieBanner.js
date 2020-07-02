import React from 'react';
import classnames from 'classnames';
import { Rating } from '@material-ui/lab';
import YouTube from 'react-youtube';
import {
  Box,
  Typography,
  Button,
  makeStyles
  
} from '@material-ui/core';
import { textTruncate } from '../../../../utils';
import { Link } from 'react-router-dom';
import ArrowRightAlt from '@material-ui/icons/ArrowRightAlt';
import styles from './styles';
import { useState } from 'react' ; 
const useStyles = makeStyles(styles);




const opts = {
      height: '200',
      width: '440',
      playerVars: {
        autoplay: 1
      },
    };

    function onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }

function MovieBanner(props) {
  const [value, setValue] = useState(2);
  const { movie, fullDescription } = props;
  const classes = useStyles(props);
  if (!movie) return null;


  

  return (
    <div className={classes.movieHero}>
      <div className={classes.infoSection}>









        <header className={classes.movieHeader}>
        
        <Rating style={{"padding-top":"160px"}}
          name="simple-controlled"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        /> 
          {fullDescription && (
            <Box mb={3} display="flex" alignItems="center" flexWrap="wrap">
              {movie.genre.split(',').map((genre, index) => (
                <Typography
                  key={`${genre}-${index}`}
                  className={classes.tag}
                  variant="body1"
                  color="inherit">
                  {genre}
                </Typography>
              ))}

              
        
        
            </Box>
          )}
          <Typography
            className={classes.movieTitle}
            variant="h1"
            color="inherit">
            {movie.title}
          </Typography>

          <Typography>
                <YouTube videoId={movie.youtubeid} opts={opts} />

          </Typography>

          <Typography
            className={classes.director}
            variant="h4"
            color="inherit">
            votre evaluation pour ce film : {value} etoiles .
          </Typography>
          <Typography
            className={classes.descriptionText}
            variant="body1"
            color="inherit">
            {textTruncate(movie.description, 450)}
          </Typography>
          <Typography className={classes.director} variant="h4" color="inherit">
            By: {movie.director}
          </Typography>
          <Typography
            className={classes.duration}
            variant="body1"
            color="inherit">
            {movie.duration} minutes
          </Typography>
          <Typography className={classes.genre} variant="body1" color="inherit">
            {movie.genre}
          </Typography>
        </header>
      </div>
      <div
        className={classes.blurBackground}
        style={{
          backgroundImage: `url(${movie.image})`
        }}
      />
      <div className={classes.movieActions}>
        {fullDescription ? (
          <Link to={`booking/${movie._id}`} style={{ textDecoration: 'none' }}>
            <Button variant="contained" className={classes.button}>
              Acheter ticket
              <ArrowRightAlt className={classes.buttonIcon} />
            </Button>
          </Link>
        ) : (
          <Link to={`movie/${movie._id}`} style={{ textDecoration: 'none' }}>
            <Button className={classnames(classes.button, classes.learnMore)}>
              Savoir plus 
              <ArrowRightAlt className={classes.buttonIcon} />
            </Button>
          </Link>
        )}
      </div>
      
    </div>
  );
}

export default MovieBanner;
