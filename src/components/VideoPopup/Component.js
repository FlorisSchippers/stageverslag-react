import React, {Component} from 'react';
import {observable} from 'mobx';
import {observer} from 'mobx-react';
import styled from 'styled-components';
import Modal from 'react-modal';
import Store from '../../config/store';
import appVars from '../../config/appVars';
import VideoComponent from '../Video/Component';

const modalStyles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, .85)',
    zIndex: 99,
  },
  content: {
    background: 'transparent',
    position: 'absolute',
    top: '50%',
    left: '50%',
    bottom: 'auto',
    right: 'auto',
    transform: 'translate(-50%, -50%)',
    WebkitTransform: 'translate(-50%, -50%)',
    border: '0',
    WebkitOverflowScrolling: 'touch',
    borderRadius: '4px',
    padding: 0,
    outline: 'none',
    overflow: 'visible',
    width: '80%',
    maxWidth: '960px',
  },
};

const CloseButton = styled.button`
  background: none;
  border: 0;
  height: 30px;
  outline: none;
  position: absolute;
  right: 0;
  top: -30px;
  width: 30px;
  cursor: pointer;
  
  :before, :after {
      background-color: #fff;
      content: '';
      height: 15px;
      right: 8px;
      position: absolute;
      top: 0;
      transform-origin: center center;
      width: 2px;
    }
    :before {
      transform: rotate(45deg);
    }
    :after {
      transform: rotate(-45deg);
    }
`;

@observer
class VideoPopupComponent extends Component {
  @observable store = Store.getInstance();

  render() {
    if (!this.store.openVideoPopup) {
      return false;
    }

    const url = this.store.getVideoUrl();
    return (
      <Modal style={modalStyles} onRequestClose={() => this.store.openVideoPopup = false} contentLabel='Video'
             isOpen={this.store.openVideoPopup}>
        <VideoComponent url={url}/>
        <CloseButton
          onClick={() => this.store.toggleVideoPopup()}
          title={appVars.strings.buttons.close}
        />
      </Modal>
    );
  }
}

export default VideoPopupComponent;
