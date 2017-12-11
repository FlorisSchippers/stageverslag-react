import React from 'react';
import {observable} from 'mobx';
import {observer} from 'mobx-react';
import Store from '../../config/store';
import SurveyComponent from './Component';
import QuestionService from '../../services/questions';
import {QuestionState} from '../../config/states';

@observer
class SurveyContainer extends React.Component {

  constructor() {
    super();
  }

  @observable store = Store.getInstance();

  componentDidMount() {

    QuestionService.get()
      .then(res => this.store.setQuestions(res));
  }

  nextQuestion() {

    if (this.store.getQuestions().length > this.store.getSurveyProgress() + 1) {
      this.store.setCurrentQuestionState(QuestionState.OPEN);
      this.store.fadeQuestion();
      return this.store.progressSurvey();
    }
    this.props.onEnd();
  }

  answerQuestion() {
    this.store.setCurrentQuestionState(QuestionState.CLOSED);
  }

  render() {
    const questions = this.store.getQuestions();
    const idx = this.store.getSurveyProgress();
    const total = questions.length;
    const currentQuestion = total ? questions[idx] : null;
    return (
      currentQuestion &&
      <SurveyComponent active={this.props.active} next={() => this.nextQuestion()} answer={() => this.answerQuestion()}
                       question={currentQuestion} index={idx + 1} total={total}
                       questionState={this.store.getCurrentQuestionState()}
                       last={idx + 1 === total}/> || null
    )
  }

}

export default SurveyContainer;