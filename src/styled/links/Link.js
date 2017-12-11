import styled, {css} from 'styled-components';
import {Link} from 'react-router';

export default styled(Link)`
  color: ${props => props.theme.links.color};
  text-decoration: ${props => props.theme.links.text_decoration};
  font-size: ${props => props.theme.links.font_size};
  display: block;
  text-align: center;
  cursor: pointer;
  
  &:hover {
    text-decoration: underline;
  }
  
  ${props => props.big && css`
    border-radius: ${props => props.theme.links.big.border_radius};
    background: ${props => props.theme.links.big.background};
    font-size: ${props => props.theme.links.big.font_size};
    letter-spacing: 1px;
    padding: 15px;
    margin: 12px 20px;
    font-family: 'gothammedium';
    
    @media (min-width: 375px) {
      margin: 20px 40px;
      font-size: 22px;
    }
    
    @media (min-width: 414px) {
      padding: 18px;
      margin: 20px 40px;
      font-size: 24px;
    }
  `}
  
  ${props => props.small && css`
    padding: 5px;
    margin: 5px;
    font-size: 15px;
    font-family: 'gothambook';
    
    @media (min-width: 414px) {
      font-size: 18px;
    }
  `}
`;