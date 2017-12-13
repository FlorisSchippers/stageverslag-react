import glamorous from 'glamorous';
import appVars from '../../config/appVars';
import {Link} from 'react-router-dom';

export default glamorous(Link)({
  background: appVars.theme.primary,
  color: 'white',
  border: '0px',
  borderRadius: '50%',
  height: '30px',
  width: '30px',
  outline: 'none',
  position: 'absolute',
  left: '15px',
  bottom: '15px',

  ':after': {
    content: ' ',
    position: 'absolute',
    left: '12px',
    top: '7px',
    height: '5px',
    width: '5px',
    transform: 'rotate(225deg) translate3d(-50%, -50%, 0)',
    borderRight: '2px solid white',
    borderTop: '2px solid white',
  }
});