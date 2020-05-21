import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import store from './store';

import '../css/styles.css';
import '../css/icon-font.css';

import Index from '../components/Index';
import ProfileGithubRepos from '../components/ProfileGithubRepos';
import Menu from '../components/Menu';
import AboutMe from '../components/AboutMe';
import Education from '../components/Education';
import Experience from '../components/Experience';
import Footer from '../components/Footer';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Fragment>
          <Index />
          <AboutMe />
          <Education />
          <Experience />
          <ProfileGithubRepos />
          <Menu />
          <Footer />
        </Fragment>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
