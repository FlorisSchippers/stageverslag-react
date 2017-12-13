import glamorous from 'glamorous';
import appVars from '../../config/appVars';

export default glamorous.li({
  backgroundColor: appVars.theme.primary,
  cursor: 'pointer',
  border: '0',
  transition: 'background-color 0.25s linear',

  '&:hover': {
    backgroundColor: appVars.theme.dark,
  },
});