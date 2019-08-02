import React, { Component } from 'react';
import Routes from "./routes";
import GlobalStyle from './styles/global';
import Header from './components/Header';
import recursiva from './services/clock';

recursiva();

export default class App extends Component {

  render() {
    return (
      <> 
      <GlobalStyle />
      <Header />      
      <Routes />
      </>
    )
  }
}
