// main components am Anfang importieren
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";

// dependencies & eigene components mittig importieren
import Header from './components/Header/Header';
import Basic from './pages/Basic';
import Work from './pages/Work';
import About from './pages/About';
import News from './pages/News';
import Thinking from './pages/Thinking';
import Contact from './pages/Contact';
import Menu from './pages/Menu';
import Footer from './components/Footer/Footer';


// best practice: css am Ende importieren
import './App.scss';


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path='/'>
            <Basic />
          </Route>

          <Route exact path='/work'>
            <Work />
          </Route>

          <Route exact path='/about'>
            <About />
          </Route>

          <Route exact path='/news'>
            <News />
          </Route>

          <Route exact path='/thinking'>
            <Thinking />
          </Route>

          <Route exact path='/contact'>
            <Contact />
          </Route>

          <Route exact path='/menu'>
            <Menu />
          </Route>

        </Switch>
        <Footer />

      </Router>
    </div>
  );
}

export default App;
