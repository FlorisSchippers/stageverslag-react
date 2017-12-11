import React from 'react';
import {withTheme} from 'styled-components'
import {observable} from 'mobx';
import {observer} from 'mobx-react';
import FooterComponent from './Component';
import Store from '../../config/store';
import EmailService from '../../services/email';
import {EmailState} from '../../config/states';

@withTheme
@observer
class FooterContainer extends React.Component {

  constructor(props) {
    super(props);
    this.openVideo = this.openVideo.bind(this);
  }

  @observable email = '';
  @observable emailState = EmailState.OPEN;
  @observable emailFalse = false;
  @observable store = Store.getInstance();

  componentDidMount() {

    EmailService.get()
      .then(res => {
        this.timestamp = res.timestamp;
        this.nonce = res.nonce;
      });
  }

  subscribe() {

    if (this.email.length === 0) {
      return this.emailFalse = true;
    }

    EmailService.subscribe({
      email: this.email
    }, this.nonce, this.timestamp).then(res => {
      if (res.error) {
        return this.emailFalse = true;
      }
      this.emailState = EmailState.SUBSCRIBED;
      this.emailFalse = false;
    });
  }

  onChange(e) {

    this.email = e.target.value.trim();
  }

  openVideo(ev) {
    ev.preventDefault();
    this.store.openVideoPopup = true;
  }

  render() {
    return (
      <FooterComponent
        active={this.props.active}
        onEmailChange={(e) => this.onChange(e)}
        subscribe={() => this.subscribe()}
        image={this.props.theme.footer.image}
        emailState={this.emailState}
        emailFalse={this.emailFalse}
        openVideo={this.openVideo}
      />
    );
  }
}

export default FooterContainer;
