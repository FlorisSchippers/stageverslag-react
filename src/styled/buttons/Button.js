import styled, {css} from 'styled-components';

export default styled.button`
  background-color: ${props => props.main ? props.theme.buttons.background : props.theme.buttons.social.background};
  color: ${props => props.theme.buttons.color};
  cursor: pointer;
  border: 0;
  border-radius: 46px;
  font-family: 'gothammedium';
  font-size: 18px;
  height: 46px;
  line-height: 46px;
  min-width: 200px;
  outline: none;
  transition: background-color 0.3s linear;
  box-sizing: content-box;
  
  &:hover {
  	background-color: #002567;
  }
  
  ${props => props.social && css`
    box-sizing: border-box;
    min-width: inherit;
    width: 50px;
    height: 50px;
    display: inline-block;
    border-radius: 50%;
    background-repeat: no-repeat;
    background-position: center;
    
    ${props => props.twitter && css`
      background-image: url('svg/twitter.svg');
    `}
    
    ${props => props.facebook && css`
      background-image: url('svg/facebook.svg');
    `}
    
    ${props => props.instagram && css`
      background-image: url('svg/instagram.svg');
      background-size: 50%;
    `}
  `}
`;
