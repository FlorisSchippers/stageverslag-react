import React from 'react';
import styled, {css} from 'styled-components';
import {SwipeState} from '../../../config/states';

const SwipeBox = styled.div`
  display: flex;
  width: 210%;
  transform: translateX(0);
  transition: transform 1s ease;
  
  @media (max-width: 1023px) {
    ${props => props.swipe === SwipeState.LEFT && css`
      transform: translate(-40%, 0); 
    `}
  }
   
  @media (min-width: 1024px) {
    margin: 0 auto;
    width: 80%;
  }
  
  @media (min-width: 1440px) {
     width: 100%;
  }
`;

const Box = styled.div`
  background: #fff;
  border-radius: 5px;
  box-sizing: border-box;
  display: inline-block;
  min-height: 305px;
  overflow: hidden;
  padding: 3px 0;
  position: relative;
  min-width: 40%;
  max-width: 40%;
  margin: 0 1.25%;
  
  @media (min-width: 1024px) {
    max-width: 45%;
    min-width: 45%;
  }
  
  // has more padding left
  :first-child {
    margin-left: 2.5%;
    
    @media (min-width: 1024px) {
      margin-left: 0;
      margin-right: 5%;
    }
  }
  
  // has more padding right
  :last-child {
    margin-right: 2.5%;
    
    @media (min-width: 1024px) {
      margin-right: 0;
      margin-left: 5%;
    }
  }
  
  @media (min-width: 375px) {
    min-height: 343px;
  }
  
  @media (min-width: 414px) {
    min-height: 348px;
  }
`;

const Result = styled.h4`
  color: ${props => props.theme.survey.highlight};
  font-family: gothammedium;
  font-size: ${props => props.theme.survey.question.font_size};
  font-weight: ${props => props.theme.survey.question.font_weight};
  line-height: 30px;
  padding: 25px;
  text-align: left;
  
  @media (min-width: 768px) {
    padding: 25px 150px 25px 25px;
  }
  
  @keyframes slide-down {
    0% {
      transform: translateY(-100%);
      opacity: 0;
    } 
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }
  
  animation: slide-down 1s ease 0s 1 normal forwards;
`;

const ResultImage = styled.img`
  width: 40%;
  position: absolute;
  bottom: 51px;
  right: 0;
  
  @keyframes slide-up {
    0% {
      transform: translateY(100%);
      opacity: 0;
    } 
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }
  
  animation: slide-up 1s ease 0s 1 normal forwards;
  
  @media (min-width: 1024px) {
      width: 30%;
  }
  
  @media (min-width: 1370px) {
    width: 60%;
  }
  
`;

const ButtonWrapper = styled.div`
  display: inline-block;
  width: 100%;
  bottom: 0;
  left: 0;
  position: absolute;
`;

const Button = styled.button`
  background: ${props => props.theme.highlight};
  color: ${props => props.theme.buttons.color};
  font-family: 'gothammedium';
  font-size: 16px;
  width: 50%;
  height: 50px;
  text-align: center;
  cursor: pointer;
  border: solid #fff;
  border-radius: ${props => props.right ? '0 0 5px 0' : '0 0 0 5px'};
  border-width: ${props => props.right ? '0 0 0 1px' : '0 1px 0 0'};
  
  @media (min-width: 375px) {
    font-size: 18px;
  }
`;

const Stat = styled.div`
  background: ${props => props.theme.survey.answer.highlight};
  color: ${props => props.theme.survey.answer.color};
  font-family: gothammedium;
  font-size: ${props => props.theme.survey.answer.font_size};
  font-weight: ${props => props.theme.survey.answer.font_weight};
  line-height: ${props => props.theme.survey.answer.line_height};
  text-align: left;
  padding: 10px 20px;
  margin: 5px 8px;
  border-radius: 2px;
  position: relative;
  z-index: 0;
  
  @media (min-width: 375px) {
    font-size: 14px;
    padding: 14px 20px;
  }
  
  @media (min-width: 414px) {
    font-size: 16px;
    padding: 16px 20px;
  }
  
  :before {
    content: '';
    transition: width 2s ease;
    background: ${props => props.theme.survey.background};
    z-index: -1;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    opacity: 0.8;
    
    @media (min-width: 1034px) {
      width: ${props => props.stat}%;
    }
    
    ${props => props.animate && css`
      width: ${props => props.stat}%;
    `}
  }
`;

const Percentage = styled.span`
  display: inline;
  text-align: right;
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  color: ${props => props.theme.highlight};
`;

const Answer = styled.span`
  display: inline-block;
  max-width: 80%;
`;

const ResultComponent = (props) => {

  return (
    <SwipeBox
      swipe={props.swipe}
      nodeName="Swipe"
      onSwipedRight={props.swipeRight}
      onSwipedLeft={props.swipeLeft}
    >
      <Box>
        <Result>{props.result.fact}</Result>
        <ResultImage src={props.overview_image}/>
        <ButtonWrapper>
          <Button onClick={props.shareFacebook}>Facebook</Button>
          <Button onClick={props.shareTwitter} right>Twitter</Button>
        </ButtonWrapper>
      </Box>
      <Box right>
        { props.result.stats.map((stat, index) =>
          <Stat animate={props.swipe === SwipeState.LEFT} key={index} stat={stat.amount / props.result.total * 100}>
            <Answer>{stat.answer}</Answer>
            <Percentage>{stat.amount}%</Percentage>
          </Stat>
        )}
      </Box>
    </SwipeBox>
  );
};

export default ResultComponent;
