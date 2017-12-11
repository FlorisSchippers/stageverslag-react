import styled, {css} from 'styled-components';

export default styled.div`
  color: ${props => props.theme.highlight};
  cursor: pointer;
  font-family: 'gothambook';
  font-size: ${props => props.small ? '12px' : '14px'};
  height: 32px;
  margin: 20px auto;
  position: relative;
  text-transform: uppercase;
  width: 160px;
  
  @media (min-width: 375px) {
    font-size: ${props => props.small ? '14px' : '16px'};
  }
  
  @media (min-width: 768px) {
    margin: 50px auto;
  }
  
  @media (min-width: 1370px) {
    font-size: 18px;
  }
  
  ${props => props.arrow && css`
    :after {
      content: '';
      position: absolute;
      top: 10px;
      left: 50%;
      height: 9px;
      width: 9px;
      transform: rotate(225deg) translate3d(-50%, -50%, 0);
      border-left: 2px solid ${props => props.theme.highlight};
      border-top: 2px solid ${props => props.theme.highlight};
      
      @media (min-width: 1370px) {
        width: 12px;
        height: 12px;
      }
    }
  `};
`;
