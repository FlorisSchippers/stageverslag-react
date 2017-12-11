import React from 'react';
import styled, {css} from 'styled-components';

const AnswerBox = styled.div`
  background: ${props => props.theme.survey.answer.background};
  width: 90%;
  border-radius: 5px;
  margin: 0 auto;
  padding: 5px;
  overflow: hidden;
  
  @media only screen and (min-width: 375px) {
    margin: 20px auto 0;
  }
  
  @media (min-width: 1024px) {
    width: 80%;
  }
`;

const Answer = styled.div`
  background: ${props => props.theme.survey.answer.highlight};
  color: ${props => props.theme.survey.answer.color};
  cursor: pointer;
  font-size: ${props => props.theme.survey.answer.font_size};
  font-weight: ${props => props.theme.survey.answer.font_weight};
  line-height: ${props => props.theme.survey.answer.line_height};
  margin: 5px 8px;
  border-radius: 2px;
  position: relative;
  text-align: left;
  padding-left: 10px;
  
  ${props => props.submitted && css`
    animation: slide-left 1s ease ${props => props.idx / 10}s 1 normal forwards;
  `}
  
  input {
    display: none;
  }
  
  :hover > span:before, :focus > span:before {
	  display: block;
	}
	
	@keyframes slide-left {
	  0%  {
	    transform: translateX(0);
	    opacity: 1;
    }
    100% {
      transform: translateX(-100vw);
      opacity: 0;
    }
	}
	
	@media (min-width: 375px) {
	  margin: 5px 10px;
	  font-size: 15px;
	}
	
	@media (min-width: 414px) {
	  margin: 8px 10px;
	  font-size: 16px;
	  line-height: 22px;
	}
`;

const FancyRadio = styled.span`
  border: ${props => props.theme.survey.answer.color} 2px solid;
  border-radius: 100%;
  box-sizing: border-box;
  display: inline-block;
  height: 18px;
  left: 10px;
  margin-top: -2px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 18px;
  
  :before {
    opacity: 0;
    position: absolute;
    content: '';
    border-radius: 100%;
    height: 10px;
    width: 10px;
    background: ${props => props.theme.survey.highlight};
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    margin: auto;
    transition: background 0.25s linear, opacity 0.35s linear;
    -webkit-transition: background 0.25s linear, opacity 0.35s linear;
	}
`;

const Label = styled.label`
  box-sizing: border-box;
  cursor: pointer;
  display: block;
  font-family: gothammedium;
  padding: 10px 10px 10px 40px;
  position: relative;
  max-width: calc(100% - 18px);
  vertical-align: middle;
  
  @media (min-width: 375px) {
    padding: 14px 14px 14px 40px;
  }
  
  :hover ${FancyRadio.selector}:before {
      opacity: 1;
    }
  }
`;

const AnswerComponent = (props) => {

  const answers = props.answers;
  return (
    <AnswerBox>
      { answers.map((answer, index) =>
        <Answer key={index} idx={index} submitted={props.submitted}>
          <input id={answer.nonce} data-answer={answer.answer} data-nonce={answer.nonce} type="radio" onChange={props.onSubmit}/>
          <Label htmlFor={answer.nonce}>
            <FancyRadio />
            { answer.answer }
            </Label>
        </Answer>
      )}
    </AnswerBox>
  );
};

export default AnswerComponent;
