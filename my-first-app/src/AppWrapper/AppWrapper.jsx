import Wrapper from './AppWrapper.module.css';
import ContentContainer from '../AppWrapper/Content/ContentContainer';
import NavBar from '../AppWrapper/Navbar/Navbar.jsx';
import React from 'react';

const AppWrapper = (props) => {
   return (
      <div className={Wrapper.appWrapper}>
         <NavBar />
         <ContentContainer />
      </div>
   )
}

export default AppWrapper;