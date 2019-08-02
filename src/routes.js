import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './components/Home';
import Agenda from './components/Agenda';
import Sets from './components/Sets';
import Contato from './components/Contato';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/shows" component={Agenda} />
      <Route path="/sets" component={Sets} />
      <Route path="/contato" component={Contato} />
      <Route path="*" component={Home} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
