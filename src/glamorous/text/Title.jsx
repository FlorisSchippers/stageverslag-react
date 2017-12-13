import glamorous from 'glamorous';
import appVars from '../../config/appVars';

export default glamorous.h1({
  fontSize: '25px',
  margin: '15px auto',
  width: '100%',
  color: appVars.theme.dark,
  textTransform: 'capitalize',
});