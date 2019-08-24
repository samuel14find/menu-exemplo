import React from 'react';
import {BrowserRouter, Link, Route} from 'react-router-dom'
import './App.css';
function Home() {
  return <h3>Home</h3>
}
function About({match}) {
  return <h3>About {match.params.name}</h3>
}
function Contact() {
  return <h3>Contact</h3>
}

function App() {
  return (
      <BrowserRouter>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about/samuel">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>

        </ul>
        <Route exact path="/" component={Home}/>
        <Route path="/about/:name" component={About}/>
        <Route  path="/contact" component={Contact}/>
      </BrowserRouter>
  );
}
export default App;
