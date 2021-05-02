import React from 'react';
import styles from './Waiter.module.scss';
import {Link} from 'react-dom';

const Waiter = () => (

  <div className={styles.component}>
    <Link exact to={`${process.env.PUBLIC_URL}/`} activeClassName='active'>Dashboard</Link>
    <Link to={`${process.env.PUBLIC_URL}/login`} activeClassName='active'>Login</Link>
    <Link to={`${process.env.PUBLIC_URL}/tables`} activeClassName='active'>Tables</Link>
    <Link to={`${process.env.PUBLIC_URL}/kitchen`} activeClassName='active'>Kitchen</Link>
    <h2> {'Waiter View'}</h2>
  </div>

);

export default Waiter;
