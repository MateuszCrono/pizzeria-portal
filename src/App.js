import React from 'react';
import MainLayout from './components/layout/MainLayout/MainLayout';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './components/views/Login/Login';
import Kitchen from './components/views/Kitchen/Kitchen';
import Tables from './components/views/Tables/Tables';
import Waiter from './components/views/Waiter/WaiterContainer';
import Dashboard from './components/views/Dashboard/Dashboard';
import Booking from './components/views/Booking/Booking';
import Events from './components/views/Events/Events';
import Order from './components/views/Order/Order';
import { StylesProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { Provider } from 'react-redux';
import store from '../src/redux/store';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#115293',
    },
    secondary: {
      main: '#11cb5f',
    },
  },
});

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <StylesProvider injectFirst>
            <ThemeProvider theme={theme}>
              <MainLayout>
                <Switch>
                  <Route exact path={process.env.PUBLIC_URL + '/'} component={Dashboard} />
                  <Route exact path={process.env.PUBLIC_URL + '/login'} component={Login} />
                  <Route exact path={process.env.PUBLIC_URL + '/kitchen'} component={Kitchen} />
                  <Route exact path={process.env.PUBLIC_URL + '/tables'} component={Tables} />
                  <Route exact path={`${process.env.PUBLIC_URL}/tables/booking/:id`} component={Booking} />
                  <Route exact path={`${process.env.PUBLIC_URL}/tables/booking/new`} component = {Booking}/>
                  <Route exact path={`${process.env.PUBLIC_URL}/tables/events/:id`} component = {Events}/>
                  <Route exact path={`${process.env.PUBLIC_URL}/tables/events/new`} component = {Events}/>
                  <Route exact path={`${process.env.PUBLIC_URL}/waiter`} component={Waiter} />
                  <Route exact path={`${process.env.PUBLIC_URL}/waiter/order/:id`} component={Order} />
                  <Route exact path={`${process.env.PUBLIC_URL}/waiter/order/new`} component={Order} />
                </Switch>
              </MainLayout>
            </ThemeProvider>
          </StylesProvider>
        </BrowserRouter>
      </div>
    </Provider>

  );
};

export default App;
