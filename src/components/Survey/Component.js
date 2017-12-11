import React from 'react';
import styled from 'styled-components';
import QuestionContainer from '../Question/Container';
import Hint from '../../styled/navigation/Hint';
import appVars from '../../config/appVars';
import {QuestionState} from '../../config/states';

const Survey = styled.div`
  background: ${props => props.theme.survey.background};
  box-sizing: border-box;
  display: ${props => props.active ? 'block' : 'none'};
  min-height: 100vh;
  margin: 0 auto;
  padding: 10px 0;
  text-align: center;
  transition: transform ease-in-out 1s;
  transform: translate3d(0, ${props => props.active ? 0 : '100vh'}, 0);
  
  @media (min-width: 1370px) {
    max-width: 1024px;
  }
`;

const SurveyComponent = (props) => {
  const question = props.question;
  const questionState = props.questionState;
  const tooltip = (questionState === QuestionState.CLOSED && props.last) ? appVars.strings.tooltip.finish :
    questionState === QuestionState.OPEN ? appVars.strings.tooltip.skip : appVars.strings.tooltip.next;

  return (
    <Survey active={props.active}>
      <QuestionContainer key={question.id} index={props.index} total={props.total} questionState={questionState}
                         answer={props.answer} question={question}/>
      <Hint arrow onClick={props.next}>{tooltip}</Hint>
    </Survey>
  );
};

export default SurveyComponent;
