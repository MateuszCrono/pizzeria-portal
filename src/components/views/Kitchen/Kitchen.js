import React from 'react';
import styles from './Kitchen.module.scss';
import {Link} from 'react-dom';


const Ktichen = () => (

  <div className={styles.component}>
    <Link exact to={`${process.env.PUBLIC_URL}/`} activeClassName='active'>Dashboard</Link>
    <Link to={`${process.env.PUBLIC_URL}/login`} activeClassName='active'>Login</Link>
    <Link to={`${process.env.PUBLIC_URL}/tables`} activeClassName='active'>Tables</Link>
    <Link to={`${process.env.PUBLIC_URL}/waiter`} activeClassName='active'>Waiter</Link>
    <h2> {'Kitchen View'}</h2>
  </div>

);

export default Ktichen;
