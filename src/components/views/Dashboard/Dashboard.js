import React from 'react';
import styles from './Dashboard.module.scss';
import {Link} from 'react-dom';


const Dashboard = () => (

  <div className={styles.component}>
    <Link to={`${process.env.PUBLIC_URL}/login`} activeClassName='active'>Login</Link>
    <Link to={`${process.env.PUBLIC_URL}/tables`} activeClassName='active'>Tables</Link>
    <Link to={`${process.env.PUBLIC_URL}/waiter`} activeClassName='active'>Waiter</Link>
    <Link to={`${process.env.PUBLIC_URL}/kitchen`} activeClassName='active'>Kitchen</Link>
    <h2> {'Dashboard View'}</h2>
  </div>

);

export default Dashboard;
