import React from 'react';
import componentParser from '../common/componentParser.jsx'
import Title from '../glamorous/text/Title.jsx';
import Subtitle from '../glamorous/text/Subtitle.jsx';
import Backbutton from '../glamorous/buttons/Backbutton.jsx';
import Textfull from '../glamorous/structure/Textfull.jsx';
import Competentieelement from '../glamorous/competenties/Competentieelement.jsx';
import Competentielist from '../glamorous/competenties/Competentielist.jsx';
import Competentielink from '../glamorous/competenties/Competentielink.jsx';
import Header from "./Header";
import appVars from "../config/appVars";

class Leerdoel extends React.Component {
    constructor(props) {
        super(props);
    }

    toLowerCamelCase(string) {
        return string.substr(0, 1).toUpperCase() + string.substr(1);
    }

    render() {
        let intro = '';
        let strippedData = [];
        this.props.data.forEach(function (competentie) {
            strippedData.push(competentie);
        });
        for (let i = 0; i < this.props.data.length; i++) {
            if (this.props.data[i].title.rendered === 'Home') {
                intro = componentParser(this.props.data[i].content.rendered);
                strippedData.splice(i, 1);
            }
        }

        const links = strippedData.map((jsonContent) => {
            return (
                <Competentieelement><Competentielink to={this.props.leerdoel + '/' + jsonContent.slug}
                                                           key={jsonContent.id}>{jsonContent.title.rendered}</Competentielink></Competentieelement>
            )
        });

        return (
            <div>
                <Header/>
                <Textfull>
                    <Backbutton to={'/'}/>
                    <Title>{this.toLowerCamelCase(this.props.leerdoel)}</Title>
                    <Subtitle>{intro}</Subtitle>
                    <Competentielist>{links}</Competentielist>
                </Textfull>
            </div>
        );
    }
}

export default Leerdoel;