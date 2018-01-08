import glamorous from 'glamorous';
import '../../public/fonts/gotham-medium.woff2';

export default glamorous.p({
    color: '${props => props.theme.intro.color}',
    fontFamily: 'Open Sans',
    fontSize: '17px',
    lineHeight: '22px',
    fontWeight: 'normal',
});