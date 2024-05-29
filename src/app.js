import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import AboutMe from './pages/AboutMe';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import './style/style.css';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <Navigation />
        <main>
          <Switch>
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/contact" component={Contact} />
            <Route path="/resume" component={Resume} />
            <Route path="/" component={AboutMe} />
          </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
