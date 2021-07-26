import {useEffect} from 'react';
import './App.css';
import Header from './Header';
import Login from './Login';
import Home from './Home';
import Footer from './Footer';
import Checkout from './Checkout';
import Navlinks from './Navlinks';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/checkout">
            <Header/>
            <Checkout/>
            <Footer/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/">
            <Header/>
            <Navlinks/>
            <Home/>
            <Footer/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
