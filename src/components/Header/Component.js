import React from 'react';
import styled, {css} from 'styled-components';
import {SurveyState} from '../../config/states';

const Header = styled.header`
  position: relative;
  z-index: 5;
  
  ${props => props.surveyState === SurveyState.QUIZ && css`
    :before {
      content: '';
      width: 100%;
      height: 5px;
      background: #fff;
      display: block;
      position: fixed;
      z-index: 2;
    }
    
    :after {
      content: '';
      width: ${props => props.progress}%;
      height: 5px;
      background: #0a3087;
      display: block;
      position: fixed;
      z-index: 3;
    }
  `}
`;

const Title = styled.h1`
  color: ${props => props.theme.header.title.color};
  font-size: ${props => props.theme.header.title.font_size};
  font-family: 'hero_fontregular';
  margin: 27px 0 0 0;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  text-align: center;
  z-index: 1;
  transition: transform 1s ease;
  
  ${props => props.transition && css`
    @media (max-width: 1370px) {
      transform: translateX(-150%);
    }
  `};
  
  ${props => props.videoPlaying && css`
    visibility: hidden;
  `}
}
`;

const MenuButton = styled.span`
  position: absolute;
  top: 30px;
  right: 10px;
  width: 25px;
  height: 25px;
  color: ${props => props.theme.header.links.color};
  font-size: 16px;
  font-weight: 100;
  text-align: center;
  z-index: 50;
  cursor: pointer;
  
  ${props => !props.open && css`
    :before {
      content: "";
      position: absolute;
      top: 0.25em;
      left: 0;
      width: 1em;
      height: 0.125em;
      border-top: 0.375em double ${props => props.theme.header.title.color};
      border-bottom: 0.125em solid ${props => props.theme.header.title.color};
      }
  `}

  ${props => props.open && css`
    :before, :after {
      left: 7px;
      position: absolute;
      content: '';
      height: 15px;
      width: 2px;
      background-color: #fff;
      font-size: 20px;
    }
    :before {
      transform: rotate(45deg);
    }
    :after {
      transform: rotate(-45deg);
    }
  `}
`;

const HeaderComponent = (props) => {

  return (
    <Header surveyState={props.surveyState} progress={props.progress}>
      <Title videoPlaying={props.videoPlaying} transition={props.menu_open || props.videoPlaying}>Hero Breakfast Report</Title>
      <MenuButton open={props.menu_open || props.videoPlaying} onClick={props.toggleMenu}/>
    </Header>
  );
};

export default HeaderComponent;