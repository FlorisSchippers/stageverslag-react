import React from 'react';
import Texthalveright from '../glamorous/structure/Texthalveright.jsx';
import Imagehalve from '../glamorous/structure/Imagehalve';
import Title from '../glamorous/text/Title.jsx';
import Content from '../glamorous/text/Content.jsx';
import Backbutton from '../glamorous/buttons/Backbutton';
import componentParser from '../common/componentParser.jsx';
import Header from './Header';

class App extends React.Component {
  constructor(props) {
    super(props);
    // Bindings
  }

  render() {
    // console.log(window.location.pathname);
    let content = {};
    let backButton = <Backbutton to={'/'}/>;
    switch (window.location.pathname) {
      case('/'):
        content.title = 'Stageverslag - Floris Schippers, 0920490@hr.nl';
        content.body = 'Welkom bij de implementatie van mijn stageverslag!' +
          '<br/> &nbsp; <br/>' +
          'Op deze site wil ik je laten zien wat voor uitdagingen en ervaringen ik heb gehad bij Burst. Voor meer informatie over Burst, is er een  ' +
          '<a class="underline" href="/burst">Burst</a>' +
          ' pagina, waar ik de pilaren van het bedrijf en de normale gang van zaken op een doordeweekse dag bespreek.' +
          '<br/> &nbsp; <br/>' +
          'De kern van het verslag is verdeeld in 5 categorieën die altijd bovenaan de pagina te vinden zijn. Binnen deze categorieën komen verschillende uitdagingen aan bod die ik aan de hand van verschillende projecten en opdrachten uitgevoerd heb.<br/>' +
          'Ook is er linksonder altijd een terug knop te vinden, waarmee je een laag terug gaat in het verslag.' +
          '<br/> &nbsp; <br/>' +
          'Ik wens je veel leesplezier en bij vragen ben ik altijd te bereiken via ' +
          '<a class="underline" href="">0920490@hr.nl</a>' +
          '.' +
          '<br/> &nbsp; <br/>' +
          'De feedback van mijn stagebegeleider over mijn stageverslag is ' +
          '<a class="underline" target="_blank" rel="noopener" href="/stagebegeleider-feedback.pdf">hier</a>' +
          ' te vinden is.' +
          '<br/> &nbsp; <br/>' +
          'Mijn beoordelingsformulier is ' +
          '<a class="underline" target="_blank" rel="noopener" href="/floris-beoordelingsformulier.pdf">hier</a>' +
          ' te vinden.' +
          '<br/> &nbsp; <br/>' +
          'Het beoordelingsformulier van mijn stagebegeleider is ' +
          '<a class="underline" target="_blank" rel="noopener" href="/stagebegeleider-beoordelingsformulier.pdf">hier</a>' +
          ' te vinden.';
        // content.body = 'Welkom bij de implementatie van mijn stageverslag!' +
        //     '<br/> &nbsp; <br/>' +
        //     'Op deze site wil ik je laten zien wat voor uitdagingen en ervaringen ik heb gehad bij Burst. Om te beginnen zou ik je door willen verwijzen naar mijn ' +
        //     '<a class="underline" href="/introductie">introductie</a>' +
        //     ' waar ik beschrijf waarom ik voor Burst gekozen heb. Voor meer informatie over Burst, is er een  ' +
        //     '<a class="underline" href="/burst">Burst</a>' +
        //     ' pagina, waar ik de pilaren van het bedrijf en de normale gang van zaken op een doordeweekse dag bespreek.' +
        //     '<br/> &nbsp; <br/>' +
        //     'De kern van het verslag is verdeeld in 5 categorieën die altijd bovenaan de pagina te vinden zijn. Binnen deze categorieën komen verschillende uitdagingen aan bod die ik aan de hand van verschillende projecten en opdrachten uitgevoerd heb.<br/>' +
        //     'Ook is er linksonder altijd een terug knop te vinden, waarmee je een laag terug gaat in het verslag.' +
        //     '<br/> &nbsp; <br/>' +
        //     'Afrondend heb ik ook een ' +
        //     '<a class="underline" href="/conclusie">conclusie</a>' +
        //     ' pagina waar ik terug kijk naar de stage in zijn geheel en wat voor invloed het heeft gehad op mij als persoon. Ik wens je veel leesplezier en bij vragen ben ik altijd te bereiken via ' +
        //     '<a class="underline" href="">0920490@hr.nl</a>' +
        //     '.';
        content.image = 'floris-headshot.jpeg';
        backButton = '';
        break;
      case('/introductie'):
        content.title = 'Introductie';
        content.body = 'Body van inleidingpage';
        content.image = '';
        break;
      case('/burst'):
        content.title = 'Burst';
        content.body = 'Burst is een Digital Production Agency, dit houdt in dat ze digitale producten maken voor klanten. Dit zijn klanten over de hele wereld, een deel van het werk is ' +
          '<a class="underline" target="_blank" rel="noopener" href="https://www.burst-digital.com/nl/werk/">hier</a>' +
          ' terug te vinden.' +
          '<br/> &nbsp; <br/>' +
          'Voornamelijk zijn dit websites, maar deze worden niet alleen intern ontworpen en gebouwd, deze websites worden ook intern geanalyseerd. Dit zorgt voor een langdurige, hechte band met de klant waar Burst niet alleen een web agency is, maar een partner wordt voor de klant.' +
          '<br/> &nbsp; <br/>' +
          'Bij het oriënteren voor een stageplek was ik op zoek naar een paar speerpunten, Burst voldoet aan al die speerpunten. Burst is hecht, iedereen is aanspreekbaar, er is een goede sfeer en die wordt bekroond door een sterke cultuur. Maar voor mij was het voornamelijk belangrijjk om de mogelijkheid te krijgen om te komen leren waar ik zelf interesse in heb.';
        content.image = 'burst-groupphoto.jpg';
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
        <Imagehalve
          css={{ backgroundImage: 'url(/' + content.image + ')', }}/>
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
