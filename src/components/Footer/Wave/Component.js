import React from 'react';
import styled from 'styled-components';
import Link from '../../../glamorous/links/Link';
import appVars from '../../../config/appVars';

const Bottom = styled.div`
  background: ${props => props.theme.footer.wave.background};
  color: ${props => props.theme.footer.wave.color};
  font-family: ${props => props.theme.footer.wave.font_family};
  font-size: ${props => props.theme.footer.wave.font_size};
  width: 100%;
  height: 140px;
  text-align: center;
`;

const Wave = styled.div`
  margin-top: 10vh;
  background-image: url('${props => props.theme.footer.wave.logo_mobile}');
  background-position: center center;
  background-repeat: no-repeat;
  background-size: 101% auto;
  padding-bottom: 21%;
  margin-bottom: -1%;
  position: relative;
  z-index: 99;
  width: 100%;
  
  @media (min-width: 768px) {
    background-image: url('${props => props.theme.footer.wave.logo_desktop}');
    padding-bottom: 15%;
  }
`;

const Links = styled.ul`
  list-style: none;
  padding: 20px 0;
  
  a {
    padding: 8px 0;
    font-size: 14px;
    
    @media (min-width: 375px) {
      font-size: 16px;      
    }
    
    @media (min-width: 414px) {
      font-size: 18px;  
    }
  }
`;

const Copyright = styled.span`

  @media (min-width: 375px) {
    font-size: 16px;
  }
  
  @media (min-width: 414px) {
    font-size: 18px;  
  }
`;

const WaveWrapper = styled.div`
  position: relative;
`;

const WaveComponent = (props) => {

  return (
    <WaveWrapper>
      <Wave/>
      <Bottom>
        <Links>
          <Link to={appVars.routes.privacy}>{appVars.strings.buttons.privacy}</Link>
          <Link to={appVars.routes.terms}>{appVars.strings.buttons.terms}</Link>
        </Links>
        <Copyright>&copy; {appVars.strings.copyright}</Copyright>
      </Bottom>
    </WaveWrapper>
  );
};

export default WaveComponent;
