import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/login/Login'
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
import Register from './components/register/Register'
import Users from './components/users/Users'
import ProtectedRoute from './components/ProtectedRoute'

function App() {
  const [count, setCount] = useState(0)
 
  
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/users' element={<ProtectedRoute/>}>
        <Route path='/users' element={<Users/>}/>
        </Route>
        
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
