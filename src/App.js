import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Chat from './components/Chat.js'
import Join from './components/Join.js'
const  App=()=> {

  return (
    <div className="app">
      <Router>
        <Route path="/" exact>
          <Join />
        </Route>

        <Route path="/chat">
          <Chat />
        </Route>
      </Router>
    </div>
  );

}

export default App;
