import React from 'react';
import Texthalveright from '../glamorous/structure/Texthalveright.jsx';
import Imagehalve from '../glamorous/structure/Imagehalve';
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
        // console.log(window.location.pathname);
        let content = {};
        let backButton = <Backbutton to={'/'}/>;
        switch (window.location.pathname) {
            case('/'):
                content.title = 'Stageverslag - Floris Schippers, 0920490@hr.nl';
                content.body = 'Welkom bij mijn implementatie van mijn stageverslag!<br/>' +
                    'Op deze site wil ik je laten zien wat voor uitdagingen en ervaringen ik heb gehad bij Burst. Om te beginnen zou ik je door willen verwijzen naar mijn ' +
                    '<a class="underline" href="/introductie">introductie</a>' +
                    ' waar ik beschrijf waarom ik voor Burst gekozen heb.<br/>' +
                    'Voor meer informatie over Burst, er is een  ' +
                    '<a class="underline" href="/burst">Burst</a>' +
                    ' pagina, waar ik de pillaren van het bedrijf en de normale gang van zaken op een doordeweekse dag bespreek.' +
                    '<br/> &nbsp; <br/>' +
                    'De kern van het verslag is verdeeld in 5 categorieën die altijd bovenaan de pagina te vinden zijn. Binnen deze categorieën komen verschillende uitdagingen aan bod die ik aan de hand van verschillende projecten en opdrachten uitgevoerd heb.<br/>' +
                    'Ook is er linksonder altijd een terug knop te vinden, waarmee je een laag terug gaat in het verslag.' +
                    '<br/> &nbsp; <br/>' +
                    'Afrondend heb ik ook een ' +
                    '<a class="underline" href="/conclusie">conclusie</a>' +
                    ' pagina waar ik terug kijk naar de stage in zijn geheel en wat voor invloed het heeft gehad op mij als persoon. Ik wens je veel leesplezier en bij vragen ben ik altijd te bereiken via ' +
                    '<a class="underline" href="">0920490@hr.nl</a>' +
                    '.';
                content.image = 'floris.jpeg';
                backButton = '';
                break;
            case('/introductie'):
                content.title = 'Introductie';
                content.body = 'Body van inleidingpage';
                content.image = '';
                break;
            case('/burst'):
                content.title = 'Burst';
                content.body = 'Body van burstpage';
                content.image = '';
                break;
            case('/conclusie'):
                content.title = 'Conclusie';
                content.body = 'Body van conclusiepage';
                content.image = '';
                break;
        }

        return (
            <div>
                <Header/>
                <Imagehalve css={{backgroundImage: 'url(http://stageverslag.florisschippers.nl/' + content.image + ')', }}/>
                <Texthalveright>
                    <Title>{content.title}</Title>
                    <Content>{componentParser(content.body)}</Content>
                    {backButton}
                </Texthalveright>
            </div>
        );
    }
}

App.propTypes = {};

export default App;