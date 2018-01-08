import React from 'react';
import Texthalve from '../glamorous/structure/Texthalve.jsx';
import Title from '../glamorous/text/Title.jsx';
import Header from "./Header";

class App extends React.Component {
  constructor() {
    super();
    // Bindings
  }

  render() {
    return (
      <div>
        <Header/>
        <Texthalve css={{width: '50%'}}>
          <Title>Stagiair</Title><br/>
          Floris Schippers<br/>
          0920490@hr.nl<br/>
          Creative Media & Game Technologies
        </Texthalve>
        <Texthalve css={{width: '40%'}}>
          <Title>Bedrijf</Title><br/>
          Burst<br/>
          http://www.burst-digital.com/<br/>
          Delftseplein 30c, 3013 AA Rotterdam
        </Texthalve>
      </div>
    );
  }
}

App.propTypes = {};

export default App;