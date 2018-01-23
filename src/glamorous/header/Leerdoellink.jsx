import glamorous from 'glamorous';
import appVars from '../../config/appVars';
import {Link} from 'react-router-dom';

export default glamorous(Link)({
    width: 'calc(100vw/5)',
    height: '25px',
    color: appVars.theme.lighter,
    cursor: 'pointer',
    border: '0',
    fontFamily: 'Open Sans',
    fontSize: '25px',
    textDecoration: 'none',
    textAlign: 'center',
    transition: 'background-color 0.25s linear',
    padding: '15px 0',
    margin: '0 auto',
    display: 'block',
});