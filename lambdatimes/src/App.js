import React from 'react';
//import TopBar from './components/TopBar';
//import Header from './components/Header';
//import Content from './components/Content/Content';
import Authenticate from './components/Login/Authenticate';
import Login from './components/Login/Login';

const App = () => {
  return (
    <div className="App">
    	<Login />
    </div>
  );
}

export default Authenticate(App);


      
