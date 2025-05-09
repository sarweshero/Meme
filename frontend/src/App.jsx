// src/App.jsx
import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import Generate from './pages/Generate.jsx'
import History from './pages/History.jsx'
import './App.css'

const App = () => {
  const token = localStorage.getItem('access')
  return (
    <Routes>
      <Route path='/' element={token ? <Generate /> : <Navigate to='/login' />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/history' element={<History />} />
    </Routes>
  )
}

export default App