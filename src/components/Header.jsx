import React from 'react';
import {Link} from 'react-router-dom';
import Leerdoellist from '../glamorous/header/Leerdoellist.jsx';
import Leerdoelelement from '../glamorous/header/Leerdoelelement.jsx';
import Leerdoellink from '../glamorous/header/Leerdoellink.jsx';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Leerdoellist>
          <Leerdoelelement><Leerdoellink to={'/ontwikkelen'}>Ontwikkelen</Leerdoellink></Leerdoelelement>
          <Leerdoelelement><Leerdoellink to={'/onderzoeken'}>Onderzoeken</Leerdoellink></Leerdoelelement>
          <Leerdoelelement><Leerdoellink to={'/ontwerpen'}>Ontwerpen</Leerdoellink></Leerdoelelement>
          <Leerdoelelement><Leerdoellink to={'/ondernemen'}>Ondernemen</Leerdoellink></Leerdoelelement>
          <Leerdoelelement><Leerdoellink to={'/betrokken'}>Betrokken</Leerdoellink></Leerdoelelement>
        </Leerdoellist>
      </div>
    );
  }
}

export default Header;