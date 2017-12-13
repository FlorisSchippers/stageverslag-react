import React from 'react';
import componentParser from '../common/componentParser.jsx'
import Title from '../glamorous/text/Title.jsx';
import Subtitle from '../glamorous/text/Subtitle.jsx';
import Content from '../glamorous/text/Content.jsx';
import BackButton from '../glamorous/buttons/BackButton.jsx';
import {Link} from 'react-router-dom';
import Header from "./Header";

class Leerdoel extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let intro = '';
    for(let i = 0; i < this.props.data.length; i++) {
      if(this.props.data[i].title.rendered === 'Home') {
        intro = componentParser(this.props.data[i].content.rendered);
        this.props.data.splice(i, 1);
      }
    }
    const content = this.props.data.map((jsonContent) => {
      return (
        <Subtitle><Link to={this.props.leerdoel + '/' + jsonContent.slug}
                        key={jsonContent.id}>{jsonContent.title.rendered}</Link></Subtitle>
      )
    });

    return (
      <div>
        <Header/>
        <BackButton to={'/'}/>
        <Title>Leerdoel: {this.props.leerdoel}</Title>
        <Subtitle>{intro}</Subtitle>
        <Content>{content}</Content>
      </div>
    );
  }
}

export default Leerdoel;