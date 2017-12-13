import glamorous from 'glamorous';
import appVars from '../../config/appVars';
import {Link} from 'react-router-dom';

export default glamorous(Link)({
  width: '20vw',
  height: '25px',
  color: appVars.theme.lighter,
  cursor: 'pointer',
  border: '0',
  fontFamily: 'gothammedium',
  fontSize: '25px',
  textDecoration: 'none',
  textAlign: 'center',
  transition: 'background-color 0.25s linear',
  padding: '15px 0',
  margin: '0 auto',
  display: 'block',
});