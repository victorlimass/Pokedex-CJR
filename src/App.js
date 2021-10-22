import React from 'react';
import Main from './pages/Main/main';
import GlobalStyle from './styles/global';
import Footer from './components/Footer';
import {BrowserRouter as Router, Switch, Route, Link, Redirect} from "react-router-dom";
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <header>
          <h1>Pokédex</h1>
          <Link to="/login">Login</Link>
        </header>
      </div>
    <div>
      <GlobalStyle/>
      <Main />
      <Footer />
    </div>
    </Router>
  );
}

export default App;
