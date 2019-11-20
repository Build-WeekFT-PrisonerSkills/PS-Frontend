import React from 'react';
import {Route, Switch} from 'react-router-dom';
import PrivateRoute from './Utils/PrivateRoute';

// PAGES BELOW
import {LandingPage} from './Pages/LandingPage';
import {RegisterPage} from './Pages/RegisterPage';
import {LoginPage} from './Pages/LoginPage';

import {PrisonListPage} from './Pages/PrisonListPage';
import {PrisonProfilePage} from './Pages/PrisonProfilePage';



import CC_PrisonProfile from './Pages/CC_PrisonProfile';
import CC_AddPrison from './Pages/CC_AddPrison';
import CC_EditPrison from './Pages/CC_EditPrison';

import {CC_EmployeeProfile} from './Pages/CC_EmployeeProfile';
import CC_AddEmployee from './Pages/CC_AddEmployee';
import {CC_EditEmployee} from './Pages/CC_EditEmployee';
import CC_Dashboard from './Pages/CC_Dashboard';
import PrisonList from './Components/PrisonList/PrisonList';
import PrisonDetail from './Components/PrisonList/PrisonDetail';
import PrisonInmates from './Components/PrisonList/PrisonInmates';
import PrisonInmatesSingle from './Components/PrisonList/PrisonInmatesSingle';

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route exact path='/' component={LandingPage} />
        <Route exact path='/register' render={props => <RegisterPage {...props} />} />
        <Route exact path='/login' render={props => <LoginPage {...props} />} />
        <Route exact path='/prisonList' render={props => <PrisonList {...props} />} />
        <Route exact path='/prisonProfile/:id' render={props => <PrisonDetail {...props} />} />
        <Route exact path='/employeeList/:id/employees' render={props => <PrisonInmates {...props} />} />
        <Route exact path='/employeeProfile/:id' render={props => <PrisonInmatesSingle {...props} />} />
        <PrivateRoute>
          <Route exact path="/prisonProfile" render={props => <CC_PrisonProfile {...props}/>} />
          <Route exact path="/addPrison" render={props => <CC_AddPrison {...props}/>} />
          <Route exact path="/editPrison/:id" render={props => <CC_EditPrison {...props}/>} />
          <Route exact path="/employeeProfile" render={props => <CC_EmployeeProfile {...props}/>} />
          <Route exact path="/addEmployee" render={props => <CC_AddEmployee {...props}/>} />
          <Route exact path="/editEmployee/:id" render={props => <CC_EditEmployee {...props}/>} />
          <Route exact path="/dashboard" render={props => <CC_Dashboard {...props}/> } />
        </PrivateRoute>
      </Switch>
    </div>
  );
}

export default App;
