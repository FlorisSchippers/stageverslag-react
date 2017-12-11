import React from 'react';
import {observable} from 'mobx';
import {observer} from 'mobx-react';
import AnswerComponent from './Component';

@observer
class AnswerContainer extends React.Component {

  @observable submitted = false;

  constructor() {
    super();
  }

  componentDidMount() {

  }

  onSubmit(e) {

    this.submitted = true;
    this.props.onSubmit(e);
  }

  render() {
    return (
      <AnswerComponent submitted={this.submitted} onSubmit={(e) => this.onSubmit(e)} answers={this.props.answers}/>
    );
  }
}

export default AnswerContainer;