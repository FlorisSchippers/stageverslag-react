import React from 'react';
import {observable} from 'mobx';
import {observer} from 'mobx-react';
import Store from '../../config/store';
import {SurveyState} from '../../config/states';
import AppComponent from './Component';

@observer
class AppContainer extends React.Component {

  @observable store = Store.getInstance();

  constructor() {
    super();
  }

  render() {
    return (
      <AppComponent survey_state={this.store.getSurveyState() === SurveyState.QUIZ} menu_open={this.store.menuState} children={this.props.children}/>
    );
  }
}

export default AppContainer;