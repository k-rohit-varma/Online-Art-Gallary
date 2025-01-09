
import Home from './components/common/Home'

import About from './components/common/About'
import Register from './components/common/Register'
import Login from './components/common/Login'
import { Route,  Routes } from 'react-router-dom'
import Userhome from './components/UserCom/userHome'
import Logout from './components/common/Logout'
import ProtectedRoute from './utility/Protectedroute'
import AvailableUsers from './components/common/AvailableUsers'

const App = () => {



  return (
    <div >
        {/* All commmon Routes */}
        <Routes>
          <Route  path='/' element={<Home/>} />
          <Route  path='/about' element={<About/>} />
          <Route  path='/register' element={<Register />} />
          <Route  path='/login' element={<Login />} />
          <Route path='/allUsers' element={<AvailableUsers/>} />
          <Route  path='/userHome' element={ 
            <ProtectedRoute><Userhome/></ProtectedRoute>
           } />
          <Route  path='/logout' element={<Logout/>} />  

        </Routes>
        
    </div>
  )
}

export default App