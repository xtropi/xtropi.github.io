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


    <section className="hero">
			<div className="hero-body">
				<div className="container">
					<figure className="image center logo is-size-2">
						Mukhtar Musaev
					</figure>
				</div>
			</div>
		</section>


		<section className="section">
			<div className="container">
				<div className="columns">
					<div className="column">
						<article className="media notification">
							<div className="media-content">
								<div className="content">
                <figure className="image is-128x128">
                  <img className="is-rounded" src="img/person2.png" alt="thats me =)"/>
                </figure>
                <br/><br/>
                <div className="has-text-left is-size-3">
                  Musaev
                  Mukhtar
                  Ruslanovich
					      </div>

								</div>
							</div>
						</article>
					</div>
					<div className="column">
						<article className="media notification">
							<div className="media-content">
								<div className="content">
									<h1 className="title is-size-4">Bio</h1>
									<p className="">
                  In 2015 i received a bachelor's degree in applied mathematics and informatics in Surgut State University.<br/><br/>

                  Russian education was not enough and since 2018 i explosively started to learn technologies i am interested in:<br/>
                  HTML, CSS, JS, WEB Frameworks and little bit artificial neural networks with machine learning.<br/><br/>

                  Also unrelated with developing things:<br/>
                  Futures trading, reading books about business and personal effectiveness.<br/>
									</p>
								</div>
							</div>
						</article>
					</div>
					<div className="column">
						<article className="media notification tile">
							<div className="media-content">
								<div className="content">
									<h1 className="title is-size-4">Parsable bio</h1>
									<div>
                  <pre>
{`{
"fullName":"Mukhtar Musaev",
"gender":"male",
"phone":"+79821395289",
"email":"mukhtarmusaev@yandex.ru",
"birth_date":"1994-06-11"
}`}
                  </pre>
                  </div>
								</div>
							</div>
						</article>
					</div>
				</div>
			</div>
		</section>




		<section className="section">
			<div className="container">
				<div className="columns is-multiline">
					<div className="column is-one-third">
						<article className="media notification has-background-white">
							<figure className="media-left">
								<span className="icon">
									<i className="fas fa-lg fa-columns has-text-warning"></i>
								</span>
							</figure>
							<div className="media-content">
								<div className="content">
									<h1 className="title is-size-4">Columns</h1>
									<p className="subtitle is-size-5">
										The power of <strong>Flexbox</strong> in a simple interface
									</p>
								</div>
							</div>
						</article>
					</div>
					<div className="column is-one-third">
						<article className="media notification has-background-white">
							<figure className="media-left">
								<span className="icon has-text-info">
									<i className="fab fa-lg fa-wpforms"></i>
								</span>
							</figure>
							<div className="media-content">
								<div className="content">
									<h1 className="title is-size-4">Form</h1>
									<p className="subtitle is-size-5">
										The indispensable <strong>form controls</strong>, designed for maximum clarity
									</p>
								</div>
							</div>
						</article>
					</div>
					<div className="column is-one-third">
						<article className="media notification has-background-white">
							<figure className="media-left">
								<span className="icon has-text-danger">
									<i className="fas fa-lg fa-cubes"></i>
								</span>
							</figure>
							<div className="media-content">
								<div className="content">
									<h1 className="title is-size-4">Components</h1>
									<p className="subtitle is-size-5">
										Advanced multi-part components with lots of possibilities
									</p>
								</div>
							</div>
						</article>
					</div>
					<div className="column is-one-third">
						<article className="media notification has-background-white">
							<figure className="media-left">
								<span className="icon has-text-grey">
									<i className="fas fa-lg fa-cogs"></i>
								</span>
							</figure>
							<div className="media-content">
								<div className="content">
									<h1 className="title is-size-4">Modifiers</h1>
									<p className="subtitle is-size-5">
										An <strong>easy-to-read</strong> naming system designed for humans
									</p>
								</div>
							</div>
						</article>
					</div>
					<div className="column is-one-third">
						<article className="media notification has-background-white">
							<figure className="media-left">
								<span className="icon has-text-primary">
									<i className="fas fa-lg fa-warehouse"></i>
								</span>
							</figure>
							<div className="media-content">
								<div className="content">
									<h1 className="title is-size-4">Layout</h1>
									<p className="subtitle is-size-5">
										Design the <strong>structure</strong> of your webpage with these CSS classes
									</p>
								</div>
							</div>
						</article>
					</div>
					<div className="column is-one-third">
						<article className="media notification has-background-white">
							<figure className="media-left">
								<span className="icon has-text-danger">
									<i className="fas fa-lg fa-cube"></i>
								</span>
							</figure>
							<div className="media-content">
								<div className="content">
									<h1 className="title is-size-4">Elements</h1>
									<p className="subtitle is-size-5">
										Essential interface elements that only require a <strong>single CSS className</strong>
									</p>
								</div>
							</div>
						</article>
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
