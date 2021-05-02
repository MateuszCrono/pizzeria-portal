import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout/MainLayout';
import Ktichen from './components/views/kitchen/Kitchen';
import Login from './components/views/Login/Login';
import Tables from './components/views/table/Table';
import Waiter from './components/views/waiter/Waiter';
import Dashboard from './components';

function App() {
  return (
    <BrowserRouter basename={'/panel'}>
      <MainLayout>
        <Switch>
          <Route exact path={`${process.env.PUBLIC_URL}/`} component={Dashboard} />
          <Route exact path={process.env.PUBLIC_URL + '/login'} component={Login} />
          <Route exact path={process.env.PUBLIC_URL + '/tables'} component={Tables} />
          <Route exact path={process.env.PUBLIC_URL + '/waiter'} component={Waiter} />
          <Route exact path={process.env.PUBLIC_URL + '/kitchen'} component={Ktichen} />
        </Switch>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
