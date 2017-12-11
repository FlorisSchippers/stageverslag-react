import styled from 'styled-components';

export default styled.div`
  color: ${props => props.theme.highlight};
  font-family: 'gothambook';
  font-size: ${props => props.small ? '12px' : '14px'};
  height: 32px;
  margin: 0 auto;
  position: relative;
  text-transform: uppercase;
  width: 200px;
  
  @media (min-width: 375px) {
    font-size: ${props => props.small ? '14px' : '16px'};
  }
  
  @media (min-width: 1370px) {
    font-size: 18px;
  }
`;
