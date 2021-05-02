import React from 'react';
import styles from './Login.module.scss';
import {Link} from 'react-dom';

const Login = () => (

  <div className={styles.component}>
    <Link exact to={`${process.env.PUBLIC_URL}/`} activeClassName='active'>Dashboard</Link>
    <Link to={`${process.env.PUBLIC_URL}/tables`} activeClassName='active'>Tables</Link>
    <Link to={`${process.env.PUBLIC_URL}/waiter`} activeClassName='active'>Waiter</Link>
    <Link to={`${process.env.PUBLIC_URL}/kitchen`} activeClassName='active'>Kitchen</Link>
    <h2> {'Login View'}</h2>
  </div>

);

export default Login;
