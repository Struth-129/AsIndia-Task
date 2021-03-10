import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Movies from './Pages/Movies';
import Attack from './Pages/Attack';
import Deathnote from './Pages/Deathnote';
import Imm from './Pages/Imm';

ReactDOM.render(
  <>
    <BrowserRouter>
        <Switch>
          <Route exact path="/" component={App}/> 
          <Route exact path="/Attack" component={Attack}/>
          <Route exact path="/Deathnote" component={Deathnote}/>
          <Route exact path="/Imm" component={Imm}/>
          <Route exact path="/Movies" component={Movies}/>
        </Switch>
    </BrowserRouter>
  </>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
