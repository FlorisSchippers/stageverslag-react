import React from 'react';
import styled from 'styled-components';
import Subtitle from '../../styled/text/Subtitle';
import Page from '../../styled/structure/Page';
import Paragraph from '../../styled/text/Paragraph';
import BackButton from '../../styled/buttons/BackButton';

const BasicBox = styled.div`
  padding: 90px 0 0 0;
  
  @media (min-width: 1024px) and (orientation: portrait) {
    padding: 235px 0;
  }
  
  @media (min-width: 1366px) and (orientation: landscape) {
    padding: 100px 0 90px 0;
  }
`;

const Title = Subtitle.extend`
  text-align: center;
`;

const Hint = styled.span`
  text-align: center;
  display: block;
  color: ${props => props.theme.highlight};
  text-transform: uppercase;
  font-family: 'gothambook';
  font-size: ${props => props.small ? '12px' : '14px'};
`;

const Text = Paragraph.extend`
  line-height: 26px;
`;

const BasicPageComponent = (props) => {

  return (
    <Page>
      <BasicBox>
        <BackButton to={'/'}/>
        <Hint>{props.hint}</Hint>
        <Title>{props.title}</Title>
        <Text small>{props.text}</Text>
      </BasicBox>
    </Page>
  );
};

export default BasicPageComponent;
