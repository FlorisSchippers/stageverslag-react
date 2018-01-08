import React from 'react';
import Backbutton from '../glamorous/buttons/Backbutton.jsx';
import Texthalve from '../glamorous/structure/Texthalve.jsx';
import Imagehalve from '../glamorous/structure/Imagehalve';
import Title from '../glamorous/text/Title.jsx';
import Content from '../glamorous/text/Content.jsx';
import Header from "./Header";
import componentParser from "../common/componentParser";

class Project extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let image = '';
        let project_title = '';
        let project_body = '';
        for (let i = 0; i < this.props.data.length; i++) {
            if (this.props.location.pathname.includes(this.props.data[i].slug)) {
                image = this.props.data[i].better_featured_image.media_details.sizes.large.source_url;
            }
            if (this.props.data[i].acf.project_repeater) {
                for (let j = 0; j < this.props.data[i].acf.project_repeater.length; j++) {
                    if (this.props.location.pathname.includes(this.props.data[i].acf.project_repeater[j].project_title.toLowerCase())) {
                        project_title = this.props.data[i].acf.project_repeater[j].project_title;
                        project_body = componentParser(this.props.data[i].acf.project_repeater[j].project_body);
                    }
                }
            }
        }

        return (
            <div>
                <Header/>
                <Backbutton to={'/' + this.props.leerdoel}/>
                <Texthalve>
                    <Title>{project_title}</Title>
                    <Content>{project_body}</Content>
                </Texthalve>
                <Imagehalve css={{backgroundImage: 'url(' + image + ')'}}/>
            </div>
        );
    }
}

export default Project;