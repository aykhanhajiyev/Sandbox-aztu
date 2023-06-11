import React, { useState } from 'react';
import Dashboard from './components/Dashboard';
import SignIn from './components/SignIn';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Register from './components/Register';
import { Route, Switch } from 'react-router-dom';
import Landing from './components/Main/Landing';
import Apply from './components/Apply/Apply';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';


function App() {
  
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Landing} />
        <Route path='/signin' component={SignIn} />
        <Route path='/register' component={Register} />
        <Route path='/dashboard' component={Dashboard} />
        <Route path='/apply' component={Apply} />
      </Switch>
      </ BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
