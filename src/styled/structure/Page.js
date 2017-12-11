import styled, {css} from 'styled-components';

export default styled.section`
  background: ${props => props.theme.survey.background};
  transition: left 1s ease;
  position: relative;
  left: 0;
  
  ${props => props.transition && css`
    @media (max-width: 1370px) {
      left: -100%;
    }
  `}
`;