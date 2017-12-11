import React from 'react';
import getNested from 'get-nested';
import styled, {css} from 'styled-components';
import StyledLink from '../../styled/links/Link';
import StyledButton from '../../styled/buttons/Button';

const Overlay = styled.div`
  width: 100%;
  height: 100vh;
  background: ${props => props.theme.header.background};
  z-index: 3;
  position: absolute;
  top: 0;
  left: 0;
  transform: translate3d(100%,0,0);
  transition: transform 1s ease;
  overflow: hidden;
  
  @media (min-width: 768px) {
    width: 100%;
  }
  
  @media (min-width: 1370px) {
    width: 35%;
    left: auto;
    right: 0;
    
    ${props => props.menu_open && css`
      transform: translate3d(0,0,0);
    `}
  }
`;

const Wrapper = styled.div`
  position: relative;
  left: 50%;
  top: 50%;
  width: 100%;
  transform: translate(-50%,-50%);
  height: 300px;
`;

const Nav = styled.nav`
  margin: 0 auto 50px auto;
  
  @media (min-width: 768px) {
    width: 50%;
    margin: 0 auto;
  }
  
  @media (min-width: 1370px) {
    width: 70%;
  }
`;

const SocialBtnWrapper = styled.div`
  margin: 70px auto 30px auto;
  display: flex;
  justify-content: space-between;
  width: 170px;
`;

const LinkWrapper = styled.div`
  margin: 10px auto;
`;

const Navigate = StyledLink.withComponent('span').extend`

  ${props => props.hover && css`
    transition: background-color 0.3s linear;
    &:hover {
      background-color: #002567;
      text-decoration: none;
    }
  `}
`;

const Logo = styled.div`
  background-image: url('${props => props.theme.footer.wave.logo}');
  background-repeat: no-repeat;
  position: absolute;
  width: 50%;
  height: 15%;
  top: 20px;
  left: -12px;
  cursor: pointer;
`;

const OverlayMenuComponent = (props) => {

  return (
    <Overlay menu_open={props.menu_open}>
      <Logo onClick={props.navigate} data-to="/"/>
      <Wrapper>
        <Nav>
          {props.links.map(link =>
            <Navigate hover big key={link.id} onClick={getNested(() => link.onclick, props.navigate)} data-to={link.href}>{link.name}</Navigate>
          )}
        </Nav>
        <SocialBtnWrapper>
          <a target="_blank" href={props.social_links.facebook}>
            <StyledButton social facebook/>
          </a>
          <a target="_blank" href={props.social_links.twitter}>
            <StyledButton social twitter/>
          </a>
          <a target="_blank" href={props.social_links.instagram}>
            <StyledButton social instagram/>
          </a>
        </SocialBtnWrapper>
        <LinkWrapper>
          {props.pages.map(page =>
            <Navigate small key={page.id} onClick={getNested(() => page.onclick, props.navigate)} data-to={page.href}>{page.name}</Navigate>
          )}
        </LinkWrapper>
      </Wrapper>
    </Overlay>
  );
};

export default OverlayMenuComponent;
