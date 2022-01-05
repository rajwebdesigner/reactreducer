import React, { useState,  useEffect } from 'react';
import './App.css';
import Login from './components/Login/Login';
import MainHeader from './components/MainHeader/MainHeader';
import Home from './components/Home/Home';

function App() {
  const [isLoggedin, setLoggedin]=useState(false);
  
  useEffect(()=>{ 
    var usr = localStorage.getItem("userlogin");  
    if(usr === '1'){
      setLoggedin(true);
    }
  },[isLoggedin]);
  const LoginHandler =(usrname, pass)=>{
    console.log(usrname);
    localStorage.setItem("userlogin", 1);
    setLoggedin(true);    
  };  
  const LogoutHandler=()=>{
    localStorage.removeItem("userlogin");
    setLoggedin(false);
  };
  return (
    <div className="App">
      <MainHeader Authotication={isLoggedin} Logout={LogoutHandler} />
      {!isLoggedin && <Login userLogin={LoginHandler} />}
      {isLoggedin && <Home />}
    </div>
  );
}

export default App;
