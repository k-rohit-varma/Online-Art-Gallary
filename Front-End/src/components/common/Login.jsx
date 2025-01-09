
import { useState } from 'react';
import Navbar from './Navbar';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setpassword] = useState('')
  const navigate = useNavigate()
  const payload = {
    email : email,
    password : password
  }

  const onSubmitAction = async(e)=>{
      e.preventDefault()
      // console.log(username+"  "+password)
    const response = await axios.post("http://localhost:3000/login",payload,{withCredentials:true})
    if(!response.status==200)
    {
      return navigate("/login")
    }
    else{
      return    navigate('/userHome')
    }
    
  } 

 
  return (
    <div>
    <Navbar/>
      <div className='m-5' >

          <form onSubmit={onSubmitAction} >

            <input onChange={(e)=>setEmail(e.target.value)} value={email} className='rounded-md mr-5 px-6 py-3 outline-none text-black' type='email' placeholder='Enter User Name' ></input>

            <input onChange={(e)=>setpassword(e.target.value)} value={password} className='rounded-md mr-5 px-6 py-3 outline-none text-black' type='password' placeholder='Enter Password'></input>

            <input className='rounded-md mr-5 px-6 py-3  bg-blue-500 ' type='submit' value="Login" ></input>
          </form>
      </div>
    
    </div>
  )
}

export default Login