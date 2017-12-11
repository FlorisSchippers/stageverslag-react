import React from 'react';
import {observable} from 'mobx';
import {observer} from 'mobx-react';
import {SurveyState} from '../config/states';
import Page from '../styled/structure/Page';
import OverlayMenuContainer from '../components/OverlayMenu/Container';
import SurveyContainer from '../components/Survey/Container';
import IntroContainer from '../components/Intro/Container';
import FooterContainer from '../components/Footer/Container';
import Store from '../config/store';
import * as GlobalFont from '../styled/global/font';

@observer
class LandingPage extends React.Component {

  @observable store = Store.getInstance();

  constructor() {
    super();
  }

  onSurveyStart() {
    this.store.setSurveyState(SurveyState.QUIZ);
  }

  onSurveyEnd() {
    this.store.setSurveyState(SurveyState.THANKYOU);
  }

  render() {
    const surveyState = this.store.getSurveyState();
    return (
      <Page transition={this.store.menuState}>
        <OverlayMenuContainer/>
        <IntroContainer active={surveyState === SurveyState.INTRO} onStart={() => this.onSurveyStart()}/>
        <SurveyContainer active={surveyState === SurveyState.QUIZ} onEnd={() => this.onSurveyEnd()}/>
        <FooterContainer active={surveyState === SurveyState.THANKYOU}/>
      </Page>
    );
  }
}

export default LandingPage;