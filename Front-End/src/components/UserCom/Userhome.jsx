// import { useEffect } from 'react';
import UserNav from './UserNav';
// import Cookies from "js-cookie";
const Userhome = () => {

  // useEffect(() => {
  //   const token = Cookies.get("token");
  //   console.log("Token from Cookies:", token);
  // }, []);

  // useEffect(() => {
  //   console.log("Cookies in React:", document.cookie);
  // }, []);

  // useEffect(()=>{
  //   console.log(`user data is : `)
  // },[])

  return (
    <>
      <UserNav />
      <div>
        userHome
      </div>
    </>
  );
};

export default Userhome;
