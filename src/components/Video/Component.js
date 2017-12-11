import React from 'react';
import styled from 'styled-components';
import ReactPlayer from 'react-player';

const VideoPlayer = styled(ReactPlayer)`
  height: auto !important;
  padding-bottom: 56.25%;
  position: relative;
  width: 100% !important;
  z-index: 1;

  iframe {
    height: 100%;
    position: absolute;
    width: 100%;
  } 
`;

const VideoComponent = (props) => {

  return (
    <VideoPlayer url={props.url} preload="true"/>
  );
};

export default VideoComponent;
