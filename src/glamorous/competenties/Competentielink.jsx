import glamorous from 'glamorous';
import appVars from '../../config/appVars';
import {Link} from 'react-router-dom';

export default glamorous(Link)({
    fontFamily: 'Open Sans',
    fontSize: '17px',
    color: appVars.theme.darker,
    textDecoration: 'none',
    borderBottom: '5px solid',
    borderBottomColor: appVars.theme.dark,
});