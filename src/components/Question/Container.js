import React from 'react';
import {observable} from 'mobx';
import {observer} from 'mobx-react';
import Store from '../../config/store';
import QuestionComponent from './Component';
import QuestionService from '../../services/questions';

class QuestionContainer extends React.Component {

  constructor() {
    super();
  }

  @observable store = Store.getInstance();

  onSubmit(e) {

    e.preventDefault();

    const answer = e.target.dataset.answer;
    const nonce = e.target.dataset.nonce;
    const id = this.props.question.id;

    QuestionService.answer(id, {
      id,
      answer,
    }, nonce, this.props.question.timestamp).then(res => {
      this.store.setResult({
        fact: res.fact,
        stats: res.results,
        total: res.total,
      });
      this.props.answer();
    });
    return true;
  }

  render() {
    return (
      <QuestionComponent
        index={this.props.index}
        total={this.props.total}
        questionState={this.props.questionState}
        question={this.props.question}
        onSubmit={(e) => this.onSubmit(e)}
        fade={this.store.questionShouldFade}
      />
    )
  }

}

export default QuestionContainer;
