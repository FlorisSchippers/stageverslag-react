import styled from 'styled-components';

export default styled.div`
  background-image: url(${props => props.image}-640@2x.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: ${props => props.shrink ? '40vh' : '45vh'};
  
  @media screen and (device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) {
    height: 36vh;
  }
  
  @media (min-width: 420px) {
    height: 45vh;
  }
  
  @media (min-width: 768px) {
    background-image: url(${props => props.image}-768@2x.jpg);
  }
  
  @media (min-width: 1366px) {
    background-image: url(${props => props.image}-1920@2x.jpg);
    background-position: 50% 20%;
    height: 60vh;
  }
`;