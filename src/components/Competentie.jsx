import React from 'react';
import slugParser from '../common/slugParser.jsx';
import componentParser from '../common/componentParser.jsx';
import Title from '../glamorous/text/Title.jsx';
import Subtitle from '../glamorous/text/Subtitle.jsx';
import Content from '../glamorous/text/Content.jsx';
import BackButton from '../glamorous/buttons/BackButton.jsx';
import Header from "./Header";

class Competentie extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let competentie = '';
    let intro = '';
    let body = '';
    for (let i = 0; i < this.props.data.length; i++) {
      if(this.props.data[i].slug === slugParser(this.props.location.pathname)) {
        competentie = this.props.data[i].title.rendered;
        intro = componentParser(this.props.data[i].content.rendered);
        body = componentParser(this.props.data[i].acf.bewijsmateriaal);
      }
    }

    return (
      <div>
        <Header/>
        <BackButton to={'/' + this.props.leerdoel}/>
        <Title>Leerdoel: {this.props.leerdoel}</Title>
        <Subtitle>Competentie: {competentie}</Subtitle>
        <Subtitle>{intro}</Subtitle>
        <Content>{body}</Content>
      </div>
    );
  }
}

export default Competentie;