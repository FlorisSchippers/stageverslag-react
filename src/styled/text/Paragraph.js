import styled from 'styled-components';

export default styled.p`
  color: ${props => props.theme.intro.color};
  font-family: ${props => props.small ? 'gothambook' : 'gothammedium'};
  font-size: ${props => props.small ? props.theme.intro.paragraph.font_size_small : '16px'};
  padding: 0 15px;
  // line-height: ${props => props.small ? '24px' : '28px'};
  line-height: 22px;
  font-weight: ${props => props.small ? 'normal' : 'bold'};
  
  @media (min-width: 375px) {
    font-size: ${props => props.small ? '18px' : '20px'};
    line-height: ${props => props.small ? '26px' : '32px'};
  }
  
  @media screen and (device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) {
    font-size: ${props => props.small ? '18px' : '18px'};
    line-height: ${props => props.small ? '26px' : '28px'};
  }
  
  @media (min-width: 414px) {
    font-size: ${props => props.small ? '20px' : '22px'};
    line-height: ${props => props.small ? '26px' : '36px'};
  }
  
  @media (min-width: 768px) {
    padding: 0 10%;
  } 
  
  @media (min-width: 1650px) {
    width: 50%;
    margin: 0 auto;
  }
`;

