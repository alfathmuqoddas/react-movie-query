import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MovieApp from './components/movie-query/MovieApp';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route } from "react-router-dom"
import Home from "./components/Home"
import MovieDetail from "./components/movie-query/MovieDetail"

const routs = (
   <Router>
      <div>
         <Route exact path="/movie" component={MovieApp} />
         <Route exact path="/" component={Home} />
         <Route exact path="/movie/:id" component={MovieDetail} />
      </div>
    </Router>
 );

ReactDOM.render(
  routs,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
