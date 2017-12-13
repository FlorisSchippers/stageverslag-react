import glamorous from 'glamorous';
import appVars from '../../config/appVars';

export default glamorous.h1({
  fontSize: '20px',
  margin: '15px 0',
  width: 'calc(100% - 30px)',
  color: appVars.theme.dark,
});