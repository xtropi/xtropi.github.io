import React, { Component } from 'react';
import './App.css';
import Main from './components/Main/Main'
import Experience from './components/Experience/Experience'
import Bio from './components/Bio/Bio'
import PBio from './components/PBio/PBio'
import Contacts from './components/Contacts/Contacts'

/* Debug Debug Bulma CSS */
import './debug.css';


class App extends Component {
  render() {
    return (
      <div className="App">

        <section className="section">
          <div className="container">
            <h1 className="title">
              Hello Bulma
            </h1>
            <p className="subtitle">
              My first website with <strong>Bulma</strong>!
            </p>
          </div>
        </section>



        {/* <Main />
        <Experience />
        <Bio />
        <PBio />
        <Contacts /> */}

      </div>
    );
  }
}

export default App;
