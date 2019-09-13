import React from 'react';
import '../../index.scss';
import './App.scss';
import { Header } from '../Header/Header';
import { Main } from '../Main/Main';

export class App extends React.Component {

  render() {
    return (
      <section className="wrapper">
        <Header />
        <Main />
      </section>
    );
  }
}