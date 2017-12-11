import React from 'react';
import {observable} from 'mobx';
import {observer} from 'mobx-react';
import Page from '../styled/structure/Page';
import OverlayMenuContainer from '../components/OverlayMenu/Container';
import WaveComponent from '../components/Footer/Wave/Component';
import BasicPageComponent from '../components/BasicPage/Component';
import * as GlobalFont from '../styled/global/font';
import appVars from '../config/appVars';
import Store from '../config/store';

@observer
class PrivacyPage extends React.Component {

  @observable store = Store.getInstance();

  constructor() {
    super();
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <Page transition={this.store.menuState}>
        <OverlayMenuContainer/>
        <BasicPageComponent hint={appVars.strings.subtitle.privacy} title={appVars.strings.title.privacy}
                            text={appVars.strings.text.privacy}/>
        <WaveComponent/>
      </Page>
    );
  }
}

export default PrivacyPage;