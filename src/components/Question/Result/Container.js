import React from 'react';
import {observable} from 'mobx';
import {observer} from 'mobx-react';
import Store from '../../../config/store';
import {SwipeState} from '../../../config/states';
import ResultComponent from './Component';

import appVars from '../../../config/appVars';

@observer
class ResultContainer extends React.Component {

  @observable store = Store.getInstance();
  @observable swipe = '';
  xDown = null;
  yDown = null;

  constructor() {
    super();
  }

  facebookInit() {

    window.fbAsyncInit = function () {
      FB.init({
        appId: appVars.share.facebook.id,
        autoLogAppEvents: true,
        xfbml: false,
        version: 'v2.10'
      });
    };

    (function (d, s, id) {
      let js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {
        return;
      }
      js = d.createElement(s);
      js.id = id;
      js.src = "//connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  }

  componentDidMount() {
    this.facebookInit();
    this.swipeInit();
  }

  swipeInit() {

    document.addEventListener('touchstart', (e) => this.handleTouchStart(e), false);
    document.addEventListener('touchmove', (e) => this.handleTouchMove(e), false);

    this.xDown = null;
    this.yDown = null;
  }

  handleTouchStart(evt) {
    this.xDown = evt.touches[0].clientX;
    this.yDown = evt.touches[0].clientY;
  }

  handleTouchMove(evt) {
    if (!this.xDown || !this.yDown) {
      return;
    }

    const xUp = evt.touches[0].clientX;
    const yUp = evt.touches[0].clientY;

    const xDiff = this.xDown - xUp;
    const yDiff = this.yDown - yUp;

    if (Math.abs(xDiff) > Math.abs(yDiff)) {
      if (xDiff > 0) {
        this.swipeLeft();
      } else {
        this.swipeRight();
      }
    }
    /* reset values */
    this.xDown = null;
    this.yDown = null;
  }

  shareFacebook() {
    const result = this.store.getResult();
    FB.ui({
      method: 'share_open_graph',
      action_type: 'og.shares',
      action_properties: JSON.stringify({
        object: {
          'og:url': appVars.url,
          'og:title': appVars.title,
          'og:description': result.fact,
          'og:image': this.props.share_image,
        }
      }),
    });
  }

  shareTwitter() {
    const result = this.store.getResult();
    window.open(appVars.share.twitter.url.replace(':url', encodeURI(appVars.url)).replace(':message', encodeURI(result.fact)));
  }

  swipeLeft() {
    this.swipe = SwipeState.LEFT;
  }

  swipeRight() {
    this.swipe = SwipeState.RIGHT;
  }

  render() {
    return (
      <ResultComponent
        result={this.store.getResult()}
        swipe={this.swipe}
        swipeLeft={() => this.swipeLeft()}
        swipeRight={() => this.swipeRight()}
        shareFacebook={() => this.shareFacebook()}
        shareTwitter={() => this.shareTwitter()} {...this.props}
      />
    );
  }
}

export default ResultContainer;
