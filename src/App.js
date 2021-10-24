import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link, Redirect} from "react-router-dom";
import { useState } from 'react';
import {UserContext} from "./components/UserContext"
import Main from './pages/Main/main';
import GlobalStyle from './styles/global';
import Footer from './components/Footer';
import './App.css';
import User from "./components/User"
import Login from "./components/Login"
import Signin from "./components/Signin"


// FALTOU:
// pokemons favoritos do usuario
// pop up com a descrição do pokemon

function App() {
  const [userName, setUserName] = useState();

  return (
    <UserContext.Provider value={[userName, setUserName]}>
      <Router>
        <div>
          <header className="header">
            <h1>Pokedex</h1>
            {userName?(
              <h2>Olá, {userName}</h2>
            ) :
            (<Link className= "login" to="/login">Login</Link>)
            }
            <br/>
          </header>
          <Switch>
            <Route path="/login">
              <Login/>
            </Route>
            <Route path="/signin">
              <Signin/>
            </Route>
            <Route path="/User">
              <User/>
            </Route>
            <Route>
              <Redirect to="/Main"/>
            </Route>
          </Switch>
        </div>
        <div>
          <GlobalStyle/>
          <Main />
          <Footer />
        </div>
      </Router>
    </UserContext.Provider>

  );
}

export default App;
