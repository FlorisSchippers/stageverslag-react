import React from 'react';
import Store from '../../config/store';
import HeaderComponent from './Component';
import {observable} from 'mobx';
import {observer} from 'mobx-react';

@observer
class HeaderContainer extends React.Component {

  @observable store = Store.getInstance();

  constructor() {
    super();
  }

  render() {
    return (
      <HeaderComponent menu_open={this.store.menuState} videoPlaying={this.store.videoPlaying}
                       toggleMenu={() => this.store.toggleMenu()} progress={this.store.getSurveyProgressPercentage()}
                       surveyState={this.store.getSurveyState()}/>
    );
  }
}

export default HeaderContainer;