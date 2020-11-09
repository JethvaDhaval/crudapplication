import './App.css';
import React from 'react';
import Navbar from './components/layout/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/pages/Home';
import ContactUs from './components/pages/ContactUs';
import Users from './components/pages/user/Users';
import AddUser from './components/pages/user/AddUser';
import EditUser from './components/pages/user/EditUser';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/contactus" component={ContactUs} />
          <Route exact path="/user/adduser" component={AddUser} />
          <Route exact path="/user/edituser/:id" component={EditUser} />
          <Route exact path="/user/:id" component={Users} />
         
        </Switch>
      </Router>
    </div>
  );
}

export default App;
