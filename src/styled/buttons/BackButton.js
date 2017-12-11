import styled from 'styled-components';
import {Link} from 'react-router';

export default styled(Link)`
  
  background: ${props => props.main ? props.theme.buttons.background : props.theme.buttons.social.background};
  color: ${props => props.theme.buttons.color};
  border: 0;
  border-radius: 50%;
  height: 30px;
  width: 30px;
  position: absolute;
  outline: none;
  left: 15px;
  
  :after {
    content: '';
    position: absolute;
    left: 12px;
    top: 7px;
    height: 5px;
    width: 5px;
    transform: rotate(225deg) translate3d(-50%, -50%, 0);
    border-right: 2px solid #fff;
    border-top: 2px solid #fff; 
  }
`;
