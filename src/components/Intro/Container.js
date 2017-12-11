import React from 'react';
import IntroComponent from './Component';
import {withTheme} from 'styled-components';

class IntroContainer extends React.Component {

  constructor() {
    super();
  }

  render() {
    return (
      <IntroComponent theme={this.props.theme} active={this.props.active} onStart={this.props.onStart} />
    );
  }
}

export default withTheme(IntroContainer);