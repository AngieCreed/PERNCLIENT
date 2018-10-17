import React, { Component } from 'react';
import AuthForm from './components/auth/AuthForm';
import './App.css';
import Navbar from './components/layout/Navbar';
import ChemSplash from './components/data/ChemSplash';
import SurveySplash from './components/survey/SurveySplash';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';



class App extends Component {

  constructor() {
    super();
    this.state = {
      sessionToken: '' //1 - set state of our token - empty string
    }
  }

  componentWillMount() {
    const token = localStorage.getItem('token');
    if (token && !this.state.sessionToken) {
      this.setState({ sessionToken: token});
    }
  }

  setSessionState = (token) => {  // 2-3 this function gets passed as a setToken prop to AuthForm signup and login
    localStorage.setItem('token', token);
    this.setState({ sessionToken: token});
  }

logout = () => {
  this.setState({
    sessionToken: '',
  });
  localStorage.clear();
}

protectedViews = () => {
  if (this.state.sessionToken === localStorage.getItem('token') && this.state.sessionToken !== 'undefined') {
    return (
      <Switch>
          <Route path='/' exact>
            <ChemSplash sessionToken={this.state.sessionToken} />
          </Route>
          <Route path='/survey'>
            <SurveySplash sessionToken={this.state.sessionToken} />
          </Route>
      </Switch>
    )
  } else {
    return (
      <Route path="/auth" >
        <AuthForm setToken={this.setSessionState}/>
      </Route>
      
    )
  }
}


  render() {
    return (
      <Router>
        <div>
        <Navbar clickLogout={this.logout} />
          <Header />
          {this.protectedViews()} 
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
