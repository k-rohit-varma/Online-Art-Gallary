import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const AvailableUsers = () => {
  const [allUsers, setallUsers] = useState([])

  const usersAvailable =async ()=>{
    console.log(`these are all the users available`)
    const users = await axios.get("http://localhost:3000/all")
    setallUsers(users.data)
    console.log(users.data)
  }

  useEffect(()=>{
    usersAvailable()
  },[])
  return (
    <div>
      <Navbar/>
      { allUsers.map( (ele,idx)=>{

        return <h4 className='text-xl text-blue p-10 ' key={idx} > {ele.userName} </h4>

      } ) }

    </div>
  )
}

export default AvailableUsers