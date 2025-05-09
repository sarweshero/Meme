// src/pages/Register.jsx
import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await axios.post('http://localhost:8000/api/register/', { username, password, email })
      alert('Registered successfully!')
      navigate('/login')
    } catch (err) {
      alert('Username already exists')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Register</h2>
      <input placeholder='Username' value={username} onChange={e => setUsername(e.target.value)} required />
      <input type='email' placeholder='Email' value={email} onChange={e => setEmail(e.target.value)} />
      <input type='password' placeholder='Password' value={password} onChange={e => setPassword(e.target.value)} required />
      <button type='submit'>Register</button>
    </form>
  )
}

export default Register