import React from 'react';
import componentParser from '../common/componentParser.jsx'
import Title from '../glamorous/text/Title.jsx';
import Subtitle from '../glamorous/text/Subtitle.jsx';
import Content from '../glamorous/text/Content.jsx';
import Backbutton from '../glamorous/buttons/Backbutton.jsx';
import Textfull from '../glamorous/structure/Textfull.jsx';
import {Link} from 'react-router-dom';
import Header from "./Header";

class Leerdoel extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let intro = '';
    let strippedData = [];
    this.props.data.forEach(function (competentie) {
      strippedData.push(competentie);
    });
    for (let i = 0; i < this.props.data.length; i++) {
      if(this.props.data[i].title.rendered === 'Home') {
        intro = componentParser(this.props.data[i].content.rendered);
        strippedData.splice(i, 1);
      }
    }

    const content = strippedData.map((jsonContent) => {
      return (
        <Subtitle><Link to={this.props.leerdoel + '/' + jsonContent.slug}
                        key={jsonContent.id}>{jsonContent.title.rendered}</Link></Subtitle>
      )
    });

    return (
      <div>
        <Header/>
        <Textfull>
          <Backbutton to={'/'}/>
          <Title>Leerdoel: {this.props.leerdoel}</Title>
          <Subtitle>{intro}</Subtitle>
          <Content>{content}</Content>
        </Textfull>
      </div>
    );
  }
}

export default Leerdoel;