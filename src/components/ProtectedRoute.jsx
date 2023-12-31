import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';


const ProtectedRoute = () => {
    const auth = localStorage.getItem("token");
    return auth ? <Outlet/> : <Navigate to='/login'/>
  return (
    <div></div>
  )
}

export default ProtectedRoute