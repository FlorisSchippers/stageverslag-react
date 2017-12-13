import glamorous from 'glamorous';

export default glamorous.p({
  color: '${props => props.theme.intro.color}',
  fontFamily: 'gothambook',
  fontSize: '16px',
  padding: '0 15px',
  lineHeight: '22px',
  fontWeight: 'normal',
});