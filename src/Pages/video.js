import React from 'react';
import {observable} from 'mobx';
import {observer} from 'mobx-react';
import {SurveyState} from '../config/states';
import Page from '../styled/structure/Page';
import OverlayMenuContainer from '../components/OverlayMenu/Container';
import VideoContainer from '../components/Video/Container';
import Store from '../config/store';
import * as GlobalFont from '../styled/global/font';

@observer
class VideoPage extends React.Component {

  @observable store = Store.getInstance();

  constructor() {
    super();
  }

  render() {
    return (
      <Page transition={this.store.menuState}>
        <OverlayMenuContainer/>
        <VideoContainer/>
      </Page>
    );
  }
}

export default VideoPage;