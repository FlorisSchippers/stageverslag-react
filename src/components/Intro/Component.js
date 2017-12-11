import React from 'react';
import styled from 'styled-components';
import Hint from '../../styled/navigation/Hint';
import Title from '../../styled/text/Title';
import Paragraph from '../../styled/text/Paragraph';
import Cover from '../../styled/image/Cover';
import Fade from '../../styled/effects/Fade';
import appVars from '../../config/appVars';

const Intro = styled.div`
  height: 100vh;
  display: ${props => props.active ? 'block' : 'none'};
  background: ${props => props.theme.intro.background};
  text-align: center;
  transition: transform ease-in-out 1s;
  transform: translate3d(0, ${props => props.active ? 0 : '100vh'}, 0);
`;

const IntroComponent = (props) => {
  return (
    <Intro active={props.active}>
      <Cover shrink image={props.theme.intro.image}/>
      <Fade/>
      <Title>{appVars.strings.title.header}</Title>
      <Paragraph>{appVars.strings.text.header}</Paragraph>
      <Hint pullDown arrow onClick={props.onStart}>{appVars.strings.tooltip.start}</Hint>
    </Intro>
  );
};

export default IntroComponent;