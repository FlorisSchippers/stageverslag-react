import React from 'react';
import styled from 'styled-components';
import Title from '../../glamorous/text/Title';
import Subtitle from '../../glamorous/text/Subtitle';
import Paragraph from '../../glamorous/text/Paragraph';
import Cover from '../../glamorous/image/Cover';
import Fade from '../../glamorous/effects/Fade';
import Button from '../../glamorous/buttons/Button';
import WaveComponent from './Wave/Component';
import appVars from '../../config/appVars';
import {EmailState} from '../../config/states';

const Footer = styled.footer`
  min-height: 100vh;
  display: ${props => props.active ? 'block' : 'none'};
  background: ${props => props.theme.footer.background};
  text-align: center;
  
  transition: transform ease-in-out 1s;
  transform: translateY(${props => props.active ? 0 : '-100vh'});
`;

const Subscribe = styled.div`
  display: block;
  width: 90%;
  margin: 0 auto;
  padding: 30px 0 20px;

  @media (min-width: 1370px) {
    width: 50%;
  }
`;

const Input = styled.input`
  border: ${props => props.false ? '2px solid red' : '0'};
  box-sizing: border-box;
  border-radius: 45px;
  display: block;
  font-style: italic;
  height: 45px;
  margin-bottom: 1em;
  margin-left: auto;
  margin-right: auto;
  margin-top: 1.5vh;
  max-width: 450px;
  text-align: center;
  width: 100%;
  
  @media screen and (device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) {
    max-width: 236px;
  }
   
  @media (min-width: 1370px) {
    margin-top: 1em;
  }
`;

const Label = styled.label`
  color: ${props => props.theme.header.title.color};
  font-family: 'gothammedium';
  font-size: 16px;
  line-height: 26px;
  margin-bottom: 4vh;
  
  @media (min-width: 375px) {
    font-size: 18px;
  }
  
  @media (min-width: 414px) {
    font-size: 20px;
  }
`;

const Spacer = styled.div`
  padding: 30px 0 60px;
  
  @media (min-width: 768px) {
    padding-bottom: 60px;
  }
`;

const Hint = styled.span`
  color: ${props => props.theme.highlight};
  text-transform: uppercase;
  font-family: 'gothambook';
  font-size: ${props => props.small ? '12px' : '14px'};
`;

const ButtonLink = Button.extend`
  text-decoration: none;
  display: inline-block;
  background: ${props => props.theme.buttons.background};
`;

const ThankYou = Paragraph.extend`
  padding: 30px 15px 0px 15px !important;
`;

const FooterComponent = (props) => {

  return (
    <Footer active={props.active}>
      <Cover image={props.image}/>
      <Fade/>
      <Title>Thank You!</Title>
      <Paragraph>{appVars.strings.text.footer}</Paragraph>
      <Spacer>
        <ButtonLink onClick={props.openVideo}>{appVars.strings.buttons.video}</ButtonLink>
      </Spacer>
      <Hint>{appVars.strings.footer.newsletter}</Hint>
      <Subtitle>{appVars.strings.footer.newsletter.stay_up_to_date}</Subtitle>
      <Paragraph small>{appVars.strings.text.subscribe}</Paragraph>
      { props.emailState === EmailState.OPEN &&
      <Subscribe>
        <Label>{appVars.strings.footer.email}</Label>
        <Input false={props.emailFalse} type="email" onChange={props.onEmailChange} placeholder="email@address.com"/>
        <Button main onClick={props.subscribe}>{appVars.strings.footer.subscribe}</Button>
      </Subscribe>
      || <ThankYou>{appVars.strings.footer.thank_you}</ThankYou> }
      <WaveComponent/>
    </Footer>
  );
};

export default FooterComponent;
