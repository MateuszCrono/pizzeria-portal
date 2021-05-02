import React from 'react';
import PageNav from '../PageNav';
import proptypes from 'prop-types';


const MainLayout = (props) => (

  <div>
    <PageNav />
    {props.children}
  </div>

);

export default MainLayout;
