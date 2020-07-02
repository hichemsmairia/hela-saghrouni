import React from 'react';
import PropTypes from 'prop-types';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContentWrapper from '../SnackbarContentWrapper';

const CustomizedSnackbar = props => {
  
  const { isOpen, vertical, horizontal, variant, message } = props;

  

  return (
    <Snackbar
      anchorOrigin={{
        vertical,
        horizontal
      }}
      open={isOpen}>
      <SnackbarContentWrapper
        style={{ color: '#fff' }}
        
        variant={variant}
        message={message}
      />
    </Snackbar>
  );
};

CustomizedSnackbar.propTypes = {
  isOpen: PropTypes.bool,
  vertical: PropTypes.string,
  horizontal: PropTypes.string,
  variant: PropTypes.oneOf(['success', 'warning', 'error', 'info']).isRequired,
  message: PropTypes.string
};
export default CustomizedSnackbar;
