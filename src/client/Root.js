import React, { Component } from 'react';
import { Switch, withRouter, Route } from 'react-router-dom';
import appVars from '../config/appVars';
import App from '../components/App';
import Leerdoel from '../components/Leerdoel';
import Competentie from '../components/Competentie';
import Project from '../components/Project';
import ontwikkelen from '../data/ontwikkelen';
import onderzoeken from '../data/onderzoeken';
import ontwerpen from '../data/ontwerpen';
import ondernemen from '../data/ondernemen';
import betrokken from '../data/betrokken';

// We need a Root component for React Hot Loading.
class Root extends Component {
  state = {
    todo: ['ontwikkelen', 'onderzoeken', 'ontwerpen', 'ondernemen', 'betrokken'],
    ontwikkelen: [],
    onderzoeken: [],
    ontwerpen: [],
    ondernemen: [],
    betrokken: [],
    done: [],
  };

  componentDidMount() {
    if (!this.state.done.length > 0) {
      this.GetWordpressData();
    }
  }
  GetWordpressData() {
    //Load data staticly from local JSON
    this.setState({
      ['ontwikkelen']: [...ontwikkelen],
      done: [...this.state.done, 'ontwikkelen'],
    });
    this.setState({
      ['onderzoeken']: [...onderzoeken],
      done: [...this.state.done, 'onderzoeken'],
    });
    this.setState({
      ['ontwerpen']: [...ontwerpen],
      done: [...this.state.done, 'ontwerpen'],
    });
    this.setState({
      ['ondernemen']: [...ondernemen],
      done: [...this.state.done, 'ondernemen'],
    });
    this.setState({
      ['betrokken']: [...betrokken],
      done: [...this.state.done, 'betrokken'],
    });

    //Load data dynamically from remote Wordpress
    // this.state.todo.forEach((leerdoel) => {
    //   fetch(appVars.api.local + leerdoel) //Change back to live on production
    //     .then(results => results.json())
    //     .then((data) => {
    //       this.setState({
    //         [leerdoel]: [...data],
    //         done: [...this.state.done, leerdoel],
    //       });
    //     });
    // });
  }

  render() {
    return (
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/ontwikkelen" component={p => <Leerdoel {...p} data={this.state.ontwikkelen} leerdoel={'ontwikkelen'} />} />
        <Route exact path="/onderzoeken" component={p => <Leerdoel {...p} data={this.state.onderzoeken} leerdoel={'onderzoeken'} />} />
        <Route exact path="/ontwerpen" component={p => <Leerdoel {...p} data={this.state.ontwerpen} leerdoel={'ontwerpen'} />} />
        <Route exact path="/ondernemen" component={p => <Leerdoel {...p} data={this.state.ondernemen} leerdoel={'ondernemen'} />} />
        <Route exact path="/betrokken" component={p => <Leerdoel {...p} data={this.state.betrokken} leerdoel={'betrokken'} />} />
        <Route exact path="/ontwikkelen/:competentie" component={p => <Competentie {...p} data={this.state.ontwikkelen} leerdoel={'ontwikkelen'} />} />
        <Route exact path="/ontwikkelen/:competentie/:project" component={p => <Project {...p} data={this.state.ontwikkelen} leerdoel={'ontwikkelen'} />} />
        <Route exact path="/onderzoeken/:competentie" component={p => <Competentie {...p} data={this.state.onderzoeken} leerdoel={'onderzoeken'} />} />
        <Route exact path="/onderzoeken/:competentie/:project" component={p => <Project {...p} data={this.state.onderzoeken} leerdoel={'onderzoeken'} />} />
        <Route exact path="/ontwerpen/:competentie" component={p => <Competentie {...p} data={this.state.ontwerpen} leerdoel={'ontwerpen'} />} />
        <Route exact path="/ontwerpen/:competentie/:project" component={p => <Project {...p} data={this.state.ontwerpen} leerdoel={'ontwerpen'} />} />
        <Route exact path="/ondernemen/:competentie" component={p => <Competentie {...p} data={this.state.ondernemen} leerdoel={'ondernemen'} />} />
        <Route exact path="/ondernemen/:competentie/:project" component={p => <Project {...p} data={this.state.ondernemen} leerdoel={'ondernemen'} />} />
        <Route exact path="/betrokken/:competentie" component={p => <Competentie {...p} data={this.state.betrokken} leerdoel={'betrokken'} />} />
        <Route exact path="/betrokken/:competentie/:project" component={p => <Project {...p} data={this.state.betrokken} leerdoel={'betrokken'} />} />
      </Switch>
    );
  }
}

export default withRouter(Root);
