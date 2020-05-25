import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import About from './pages/About';
import Home from './pages/Home';

function App() {

  let [count,setCount] = useState(0);
  useEffect(()=>{
    console.log("Usando el efecto")
  })
  useEffect(() => {
    document.title = `El contador está a ${count}`
  });

  return (
    <Router>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <hr/>
        <Switch>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/">
            <Home></Home>
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
