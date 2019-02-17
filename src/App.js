import React, { Component } from 'react';
import './App.css';
import Main from './components/Main/Main'
import Experience from './components/Experience/Experience'
import Bio from './components/Bio/Bio'
import PBio from './components/PBio/PBio'
import Contacts from './components/Contacts/Contacts'

/* Debug Debug Bulma CSS */
//import './debug.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <section class="hero has-background-black">
          <div class="hero-body">
            <div class="container center logo">
                Mukhtar Musaev
            </div>
          </div>
        </section>

        <section class="section">
          <div class="container">
            <div class="columns">
            <div class="column">
						<div class="notification">
							Bulma is a modern CSS framework from @jgthms, based on Flexbox.
							Using Bulma, we can describe our website's design using just classes. ᕕ( ᐛ )ᕗ
						</div>
            </div>
            <div class="column">
              <div class="notification">
                Flexbox is a CSS spec that makes sectioning and aligning more natural.
                We don't need to know Flexbox but it's how Bulma works behind-the-scenes. ⦤(^ー^)⦥
              </div>
            </div>
            <div class="column">
              <div class="notification">
                Instead of writing our CSS per-element, we can use predefined classes.
                With enough classes, we can describe our website design using semantics. ٩(^ᴗ^)۶
              </div>
            </div>
            </div>
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
