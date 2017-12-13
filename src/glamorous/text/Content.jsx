import glamorous from 'glamorous';

export default glamorous.p({
  color: '${props => props.theme.intro.color}',
  fontFamily: 'gothambook',
  fontSize: '16px',
  lineHeight: '22px',
  fontWeight: 'normal',
  width: 'calc(100% - 30px)',
});