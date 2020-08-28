import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import './index.css'
import Blogs from "./Blogs";
import Home from "./Home";
import Videos from "./Videos";
import Recipes from "./Recipes";
import whiteninetofivelogo from './whiteninetofivelogo';

export default function App() {
  return (
    <header>
      <Router>
        <div>
          <div className={"topnav"}>
          <ul>
            <div className={"logoSmall"}>
             <Link to={"/"}>
               <img src={whiteninetofivelogo} height={"60"} width={"60"}/>
             </Link>
            </div>
              <Link to="/">Home</Link>
              <Link to="/blogs">Blogs</Link>
              <Link to="/videos">Videos</Link>
              <Link to="/recipes">Recipes</Link>
          </ul>
          </div>


          {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/blogs">
              <Blogs />
            </Route>
            <Route path="/videos">
              <Videos />
            </Route>
            <Route path="/recipes">
              <Recipes />
            </Route>
          </Switch>
        </div>
      </Router>
    </header>

  );
}



