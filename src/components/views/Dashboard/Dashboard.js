import React from 'react';
import styles from './Dashboard.module.scss';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';

const Dashboard = () => (

  <div className={styles.component}>
    <Button  component={Link} to={`${process.env.PUBLIC_URL}/login`}  activeClassName='active'>Login</Button>
    <Button  component={Link} to={`${process.env.PUBLIC_URL}/tables`} activeClassName='active'>Tables</Button>
    <Button  component={Link} to={`${process.env.PUBLIC_URL}/waiter`} activeClassName='active'>Waiter</Button>
    <Button  component={Link} to={`${process.env.PUBLIC_URL}/kitchen`} activeClassName='active'>Kitchen</Button>
    <h2> {'Dashboard View'}</h2>
  </div>

);

export default Dashboard;
