import React from 'react';
import {observable} from 'mobx';
import {observer} from 'mobx-react';
import VideoComponent from './Component';
import Store from '../../config/store';

@observer
class VideoContainer extends React.Component {

  @observable store = Store.getInstance();

  constructor() {
    super();
  }

  componentDidMount() {
    this.store.toggleVideo();
  }

  render() {

    const url = this.store.getVideoUrl();
    return (
      url && <VideoComponent url={url}/>
    );
  }
}

export default VideoContainer;