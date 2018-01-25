import React from 'react';
import Textfull from '../glamorous/structure/Textfull.jsx';
import Title from '../glamorous/text/Title.jsx';
import Content from '../glamorous/text/Content.jsx';
import Backbutton from '../glamorous/buttons/Backbutton';
import componentParser from '../common/componentParser.jsx';
import Header from "./Header";

class App extends React.Component {
    constructor() {
        super();
        // Bindings
    }

    render() {
        console.log(window.location.pathname);
        let text = {};
        let backButton = <Backbutton to={'/'}/>;
        switch (window.location.pathname) {
            case('/'):
                text.title = "Floris Schippers' stage bij Burst";
                text.body = 'Body van homepage<br/>' +
                    '<a class="underline" href="/inleiding">Inleiding</a><br/>' +
                    '<a class="underline" href="/burst">Burst</a><br/>' +
                    '<a class="underline" href="/conclusie">Conclusie</a>';
                backButton = '';
                break;
            case('/inleiding'):
                text.title = 'Inleiding';
                text.body = 'Body van inleidingpage';
                break;
            case('/burst'):
                text.title = 'Burst';
                text.body = 'Body van burstpage';
                break;
            case('/conclusie'):
                text.title = 'Conclusie';
                text.body = 'Body van conclusiepage';
                break;
        }

        return (
            <div>
                <Header/>
                <Textfull>
                    <Title>{text.title}</Title>
                    <Content>{componentParser(text.body)}</Content>
                    {backButton}
                </Textfull>
            </div>
        );
    }
}

App.propTypes = {};

export default App;