import React from 'react';
import styles from './Table.module.scss';
import {Link} from 'react-dom';

const Table = () => (

  <div className={styles.component}>
    <Link exact to={`${process.env.PUBLIC_URL}/`} activeClassName='active'>Dashboard</Link>
    <Link to={`${process.env.PUBLIC_URL}/login`} activeClassName='active'>Login</Link>
    <Link to={`${process.env.PUBLIC_URL}/waiter`} activeClassName='active'>Waiter</Link>
    <Link to={`${process.env.PUBLIC_URL}/kitchen`} activeClassName='active'>Kitchen</Link>
    <h2> {'Table View'}</h2>
  </div>

);

export default Table;
