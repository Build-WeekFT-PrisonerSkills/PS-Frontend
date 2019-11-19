import React from 'react';
import {Route, Switch} from 'react-router-dom';
import PrivateRoute from './Utils/PrivateRoute';

// PAGES BELOW
import {LandingPage} from './Pages/LandingPage';
import {RegisterPage} from './Pages/RegisterPage';
import {LoginPage} from './Pages/LoginPage';
import {PrisonListPage} from './Pages/PrisonListPage';
import {PrisonProfilePage} from './Pages/PrisonProfilePage';
import {CC_PrisonProfile} from './Pages/CC_PrisonProfile';
import {CC_AddPrison} from './Pages/CC_AddPrison';
import {CC_EditPrison} from './Pages/CC_EditPrison';
import {EmployeeListPage} from './Pages/EmployeeListPage';
import {EmployeeProfilePage} from './Pages/EmployeeProfilePage';
import {CC_EmployeeProfile} from './Pages/CC_EmployeeProfile';
import {CC_AddEmployee} from './Pages/CC_AddEmployee';
import {CC_EditEmployee} from './Pages/CC_EditEmployee';
import {CC_Dashboard} from './Pages/CC_Dashboard';

import PrisonList from './Components/PrisonList/PrisonList';
import PrisonDetail from './Components/PrisonList/PrisonDetail';

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route exact path='/' component={LandingPage} />

        {/* Added these for PrisonList */}
        <Route exact path='/api/users/' component={PrisonList} />
        <Route exact path='/api/users/:id' component={PrisonDetail} />
        <Route exact path='/api/users/:id/inmates' component={PrisonDetail} />

        <PrivateRoute>
          <Route exact path='/api/auth/register' component={RegisterPage} />
          <Route exact path='/api/auth/login' component={LoginPage} />
          <Route exact path='/api/users/' component={PrisonListPage} />
          <Route exact path='/api/users/:id' component={PrisonProfilePage} />
          <Route exact path='/api/auth/login' component={CC_PrisonProfile} />
          <Route exact path='/api/users/prison' component={CC_AddPrison} />
          <Route exact path='/api/users/:id' component={CC_EditPrison} />
          <Route exact path='/api/users/:id/inmates' component={EmployeeListPage} />
          <Route exact path='/api/users/inmates/:id' component={EmployeeProfilePage} />
          <Route exact path='/api/auth/login' component={CC_EmployeeProfile} />
          <Route exact path='/api/users/inmates' component={CC_AddEmployee} />
          <Route exact path='/api/users/inmates/:id' component={CC_EditEmployee} />
          <Route exact path='/api/auth/login' component={CC_Dashboard} />
        </PrivateRoute>
      </Switch>

      {/* <PrisonList /> */}
    </div>
  );
}

export default App;
