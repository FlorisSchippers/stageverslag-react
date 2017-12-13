import React from 'react';
import Title from '../glamorous/text/Title.jsx';
import BackButton from '../glamorous/buttons/BackButton.jsx';
import Header from "./Header";

class Project extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header/>
        <BackButton to={'/' + this.props.leerdoel}/>
        <Title>Project: ...</Title>
      </div>
    );
  }
}

export default Project;