// src/pages/Login.jsx
import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post('http://localhost:8000/api/token/', { username, password })
      localStorage.setItem('access', res.data.access)
      localStorage.setItem('refresh', res.data.refresh)
      navigate('/')
    } catch (err) {
      alert('Invalid credentials')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <input placeholder='Username' value={username} onChange={e => setUsername(e.target.value)} required />
      <input type='password' placeholder='Password' value={password} onChange={e => setPassword(e.target.value)} required />
      <button type='submit'>Login</button>
    </form>
  )
}

export default Login
