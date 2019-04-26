import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './container/App';
import About from './pages/About';
import Contact from './pages/Contact'
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route } from "react-router-dom";



const AppRouter = () => {
  return (
    <Router >
        <Route path="/" exact component={App}/>
        <Route path="/about" exact component={About}/>
        <Route path="/contact" exact component={Contact}/>
    </Router>
  )
}


ReactDOM.render(<AppRouter />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
