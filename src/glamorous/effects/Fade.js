import styled, {css} from 'styled-components';

export default styled.div`
  
  height: 150px;
  width: 100%;
  background: url(svg/gradient.svg);
  margin-top: -148px;
  
  @media(min-width: 768px) {
    margin-top: -144px;
  }
  
  ${props => props.flipped && css`
    transform: rotate(180deg);
    margin-top: -30px !important;
  `}
  
  ${props => props.desktop && css`
    @media (max-width: 1370px) {
      display: none;
    }
    position: absolute;
  `}
`;
