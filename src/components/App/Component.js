import React from 'react';
import styled, {ThemeProvider, css} from 'styled-components';
import Hero from '../../themes/hero';
import HeaderContainer from '../Header/Container';
import VideoPopupComponent from '../VideoPopup/Component';

const AppBox = styled.div`

  ${props => props.survey_state && css`
    @media (min-width: 1366px) {
      overflow: hidden;
      height: 100vh;    
    }
  `}
  
  ${props => props.menu_open && css`
    overflow: hidden;
    height: 100vh;
  `}
`;

const AppComponent = (props) => {

  return (
    <ThemeProvider theme={Hero}>
      <AppBox survey_state={props.survey_state} menu_open={props.menu_open}>
        <HeaderContainer />
        {props.children}
        <VideoPopupComponent />
      </AppBox>
    </ThemeProvider>
  );
};

export default AppComponent;
