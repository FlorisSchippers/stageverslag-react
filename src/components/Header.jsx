import React from 'react';
import Leerdoelwapper from '../glamorous/structure/Leerdoelwrapper.jsx';
import LeerdoelButton from '../glamorous/buttons/LeerdoelButton.jsx';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Leerdoelwapper>
          <LeerdoelButton to={'/ontwikkelen'}>Ontwikkelen</LeerdoelButton>
          <LeerdoelButton to={'/onderzoeken'}>Onderzoeken</LeerdoelButton>
          <LeerdoelButton to={'/ontwerpen'}>Ontwerpen</LeerdoelButton>
          <LeerdoelButton to={'/ondernemen'}>Ondernemen</LeerdoelButton>
          <LeerdoelButton to={'/betrokken'}>Betrokken</LeerdoelButton>
        </Leerdoelwapper>
      </div>
    );
  }
}

export default Header;