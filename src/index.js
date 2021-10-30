import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MovieApp from './components/movie-query/MovieApp';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route } from "react-router-dom"
import Home from "./components/Home"
import MovieDetail from "./components/movie-query/MovieDetail"
import "./components/firebase-app/Firebase"
//import firebaseApp from "./components/firebase-app/FirebaseApp"
import Firebase from "./components/firebase-app/Firebase"
import Login from "./components/firebase-app/Login"
import Register from "./components/firebase-app/Register"

const routs = (
   <Router>
      <div>
         <Route exact path="/movie" component={MovieApp} />
         <Route exact path="/" component={Home} />
         <Route exact path="/movie/:id" component={MovieDetail} />
         <Route exact path="/firebase-app" component={Firebase} />
         <Route exact path="/firebase-app/login" component={Login} />
         <Route exact path="/firebase-app/register" component={Register} />
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
