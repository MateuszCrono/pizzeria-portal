import React from 'react';
import styles from './Login.module.scss';
import {Link} from 'react-dom';

const Login = () => (

  <div className={styles.component}>
    <Link exact to={`${process.env.PUBLIC_URL}/`} activeClassName='active'>Dashboard</Link>
    <h2> {'Login View'}</h2>
  </div>

);

export default Login;
