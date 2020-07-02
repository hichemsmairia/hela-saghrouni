import { createMuiTheme } from '@material-ui/core/styles';
import paletteDark from './paletteDark';
import typography from './typography';
import palette from './palette' ;

const theme = createMuiTheme({
  palette: paletteDark,
  typography,
  zIndex: {
    appBar: 1200,
    drawer: 1100
  },
  topBar: {
    height: '56px'
  }
});

export default theme;
