import styled from 'styled-components';

export default styled.h1`
  color: ${props => props.theme.intro.color};
  font-family: 'hero_fontregular';
  font-size: ${props => props.theme.intro.title.font_size};
  margin: -30px 0 20px 0;
  
  @media (min-width: 1650px) {
    width: 50%;
    margin: -30px auto 20px auto;
  }
`;