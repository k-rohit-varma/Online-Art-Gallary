import React from 'react'
import Cookies from "js-cookie";
import Navbar from './Navbar';

const Login = () => {

  React.useEffect(() => {
    const token = Cookies.get("token");
    console.log("Token from Cookies:", token);
  }, []);

  React.useEffect(() => {
    console.log("Cookies in React:", document.cookie);
  }, []);
  
  
  return (
    <div>
    <Navbar/>
    Login
    
    </div>
  )
}

export default Login