import React from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components';
import ResultContainer from './Result/Container';
import AnswerContainer from '../Answer/Container';
import Status from '../../styled/navigation/Status';
import {QuestionState} from '../../config/states';
import appVars from '../../config/appVars';

const QuestionBox = styled.div`
  border-radius: 5px;
  margin: 70px auto 0;
  padding; 0 10px;
  overflow: hidden;
  width: 100%;
  transition: opacity .3s ease;
  //opacity: ${props => props.fade ? 0 : 100};
  
  @media (min-width: 1440px) {
    margin-top: 195px;
  }
`;

const Question = styled.h4`
  color: ${props => props.theme.survey.question.color};
  font-size: 16px;
  font-weight: ${props => props.theme.survey.question.font_weight};
  line-height: 20px;
  margin-bottom: 20px;
  font-family: 'gothammedium';
  padding: 0 10px;
  
  @media (min-width: 375px) {
    font-size: 22px;
    line-height: 34px;
  }
  
  @media screen and (device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) {
    font-size: 20px;
    line-height: 26px;
  }
`;

const QuestionComponent = (props) => {
  const question = props.question;

  return (
    <QuestionBox fade={props.fade}>
      <Status top small>
        {appVars.strings.tooltip.progress.replace(':current', props.index).replace(':total', props.total)}
      </Status>
      <Question>{props.question.acf.question}</Question>
      { props.questionState === QuestionState.OPEN &&
      <AnswerContainer onSubmit={props.onSubmit} answers={question.acf.answers}/> ||
      <ResultContainer share_image={question.acf.share_image} overview_image={question.acf.overview_image}/>
      }
    </QuestionBox>
  );
};

QuestionComponent.propTypes = {
  question: PropTypes.object,
  open: PropTypes.bool,
  result: PropTypes.object,
};

export default QuestionComponent;
