import styled from 'styled-components';

export default styled.h2`
  color: ${props => props.theme.intro.color};
  font-family: 'gothammedium';
  font-size: ${props => props.theme.intro.subtitle.font_size};
  padding: 10px 0 20px 0;
`;