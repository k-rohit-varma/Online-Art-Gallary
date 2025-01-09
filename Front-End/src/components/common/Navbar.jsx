import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='bg-zinc-800 text-white' >

    <nav className='flex justify-between align-middle p-5' >
        <div className="text-xl">
            Online-Art-Gallary
        </div>
        <div className="flex gap-10 ">
            <Link to='/' >Home</Link>
            <Link to='/about' >About</Link>
            <Link to='/register' >Register</Link>
            <Link to='/login' >Login</Link>
            <Link to='/allUsers'>Available Users</Link>
        </div>
    </nav>

    </div>
  )
}

export default Navbar