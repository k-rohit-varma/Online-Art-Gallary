import  { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
const Register = () => {
  const [username, setUsername] = useState('');
  const [email , setEmail] = useState('')
  const [password , setPassword] = useState('')
  const [contact, setContact] = useState('')

  const navigate = useNavigate()
  const formSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      userName: username,
      email: email,
      password: password,
      contact: contact,
    };
  
    const response =await axios.post("http://localhost:3000/register",payload,{
      withCredentials: true, // Include cookies in the request
    })
    console.log(response.data+"   "+response.status)

    setUsername('')
    setContact('')
    setEmail('')
    setPassword('')
    
    navigate('/userHome')
  };

  return (
    <>
    <Navbar/>
      <div className='text-white  p-10' >
      <form onSubmit={formSubmit}>
        <input className='rounded p-3 mr-2 outline-none bg-zinc-700' name='userName' type="text"  value={username} onChange={(e) => setUsername(e.target.value)} placeholder='Enter User name ' />
        <input  className='rounded p-3 mr-2 outline-none bg-zinc-700' name='email' type="email"  value={email} onChange={(e) => setEmail(e.target.value)}  placeholder='Enter Email' />
        <input  className='rounded p-3 mr-2 outline-none bg-zinc-700' name='password' type="password"  value={password} onChange={(e) => setPassword(e.target.value)}  placeholder='Enter Password' />
        <input  className='rounded p-3 mr-2 outline-none bg-zinc-700' name='contact' type="number"  value={contact} onChange={(e) => setContact(e.target.value)}  placeholder='Enter Contact Number' />
        <input className='text-white bg-blue-500 px-5 py-3 rounded' type="submit" value="Submit" />
      </form>
    </div>
    </>
  );
};

export default Register;
