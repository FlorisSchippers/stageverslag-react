import React from 'react';
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
        <Title>Stageverslag</Title>
      </div>
    );
  }
}

App.propTypes = {};

export default App;