// src/pages/Generate.jsx
import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Generate = () => {
  const [prompt, setPrompt] = useState('')
  const [imageUrl, setImageUrl] = useState('')
  const navigate = useNavigate()

  const refreshAccessToken = async () => {
    try {
      const res = await axios.post('http://localhost:8000/api/token/refresh/', {
        refresh: localStorage.getItem('refresh')
      })
      localStorage.setItem('access', res.data.access)
      return res.data.access
    } catch (err) {
      alert('Session expired. Please log in again.')
      navigate('/login')
    }
  }

  const handleGenerate = async () => {
    try {
      let accessToken = localStorage.getItem('access')
      if (!accessToken) {
        accessToken = await refreshAccessToken()
      }

      const res = await axios.post('http://localhost:8000/api/generate-image/', { prompt }, {
        headers: { Authorization: `Bearer ${accessToken}` }
      })
      setImageUrl(res.data.image_url)
    } catch (err) {
      if (err.response && err.response.status === 401) {
        const newAccessToken = await refreshAccessToken()
        if (newAccessToken) {
          handleGenerate()
        }
      } else {
        alert('Failed to generate')
      }
    }
  }

  const logout = () => {
    localStorage.clear()
    navigate('/login')
  }

  return (
    <div>
      <button onClick={logout}>Logout</button>
      <button onClick={() => navigate('/history')}>History</button>
      <h2>Generate Image</h2>
      <input placeholder='Enter your prompt' value={prompt} onChange={e => setPrompt(e.target.value)} />
      <button onClick={handleGenerate}>Generate</button>
      {imageUrl && <img src={imageUrl} alt='Generated' style={{ width: '300px', marginTop: '20px' }} />}
    </div>
  )
}

export default Generate