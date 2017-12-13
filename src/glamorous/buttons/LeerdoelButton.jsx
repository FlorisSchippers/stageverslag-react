import glamorous from 'glamorous';
import appVars from '../../config/appVars';
import {Link} from 'react-router-dom';

export default glamorous(Link)({
  backgroundColor: appVars.theme.primary,
  color: appVars.theme.lighter,
  cursor: 'pointer',
  border: '0',
  borderRadius: '50px',
  fontFamily: 'gothammedium',
  fontSize: '25px',
  textDecoration: 'none',
  transition: 'background-color 0.25s linear',
  padding: '5px 10px',
  margin: '0 25px',

  '&:hover': {
    backgroundColor: appVars.theme.dark,
  }
});