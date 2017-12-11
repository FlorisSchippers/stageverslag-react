import React from 'react';
import {observable} from 'mobx';
import {observer} from 'mobx-react';
import {browserHistory} from 'react-router';
import OverlayMenuComponent from './Component';
import appVars from '../../config/appVars';
import {SurveyState} from '../../config/states';
import Store from '../../config/store';

@observer
class OverlayMenuContainer extends React.Component {

  @observable store = Store.getInstance();
  links = [];
  pages = [];
  social_links = [];

  constructor() {
    super();
  }

  componentDidMount() {

    this.links = [
      {
        id: 0,
        href: '/',
        name: appVars.strings.menu.take_survey,
      },
      {
        id: 1,
        href: '#',
        name: appVars.strings.menu.watch_video,
        onclick: (e) => this.openVideo(e),
      },
    ];

    this.pages = [
      {
        id: 0,
        href: appVars.routes.privacy,
        name: appVars.strings.buttons.privacy,
      },
      {
        id: 1,
        href: appVars.routes.terms,
        name: appVars.strings.buttons.terms,
      },
    ];

    this.social_links = {
      twitter: appVars.social.twitter,
      facebook: appVars.social.facebook,
      instagram: appVars.social.instagram,
    };
  }

  openVideo(ev) {
    ev.preventDefault();
    this.store.toggleVideoPopup();
  }

  navigate(e) {

    const to = e.target.dataset.to;

    if (!to) {
      return false;
    }

    if (to === '/' && this.store.getSurveyState() === SurveyState.THANKYOU) {
      this.store.resetSurvey();
    }

    this.store.toggleMenu();
    browserHistory.push(to);
  }

  render() {
    return (
      <OverlayMenuComponent menu_open={this.store.menuState} navigate={(e) => this.navigate(e)} links={this.links}
                            pages={this.pages} social_links={this.social_links}/>
    );
  }
}

export default OverlayMenuContainer;
