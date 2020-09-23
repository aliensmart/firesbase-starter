import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard'
import ProjectDetails from './components/projects/ProjectDetails'
import SignIn from './components/auth/SignIn'
import SignOut from './components/auth/SignOut'




function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Switch>
          <Route exact path='/' component={Dashboard}/>
          <Route path='/project/:id' component={ProjectDetails}/>
          <Route exact path='/signin' component={SignIn}/>
          <Route exact path='/signout' component={SignOut}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
