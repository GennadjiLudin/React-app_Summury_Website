import React from 'react';
import {Route, Switch} from 'react-router-dom';

//Components
import Logo from './layers/Logo/Logo';
import Menu from './layers/Menu/Menu';
import Home from './pages/Home/Home';
import AboutUs from './pages/AboutUs/AboutUs';
import Contacts from './pages/Contacts/Contacts';
import ProjectsPage from './pages/ProjectsPage/ProjcetsPage';
import Text from './elements/Text/Text';
import Footer from './layers/Footer/Footer';

//Style
import './App.scss';

function App() {
  return ( 
    <div className="app">
      <div className = "container">
        <Logo />
        <Menu />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/projects/:id">
            <Text text="Projects 1" />
          </Route>
          <Route path="/projects">
            <ProjectsPage />
          </Route>
          <Route path="/contacts">
            <Contacts />
          </Route>
          <Route path="/about-us">
            <AboutUs />
          </Route>
        </Switch>
      </div>
        <Footer />
    </div>
  );
}

export default App;