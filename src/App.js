import React from 'react';
import Navbar from './Navbar/Navbar';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Developers from './Developers';
import Privacypolicy from './Component/Privacypolicy';


function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Developers} />
        <Route path="/privacypolicy" component={Privacypolicy}/>
      </Switch>
    </Router>
  );
}

export default App;
