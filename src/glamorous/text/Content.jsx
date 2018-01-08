import glamorous from 'glamorous';
import appVars from '../../config/appVars';

export default glamorous.p({
    color: appVars.theme.darker,
    fontFamily: 'Open Sans',
    fontSize: '17px',
    lineHeight: '1.5',
    fontWeight: 'normal',

    ['& a']: {
        color: appVars.theme.dark,
        transition: 'color 0.25s linear',

        '&:hover': {
            color: appVars.theme.primary,
        }
    }
});