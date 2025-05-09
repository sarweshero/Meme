// src/pages/History.jsx
import React, { useEffect, useState } from 'react'
import axios from 'axios'

const History = () => {
  const [history, setHistory] = useState([])

  useEffect(() => {
    axios.get('http://localhost:8000/api/history/', {
      headers: { Authorization: `Bearer ${localStorage.getItem('access')}` }
    }).then(res => setHistory(res.data)).catch(() => alert('Error fetching history'))
  }, [])

  return (
    <div>
      <h2>Your Generated History</h2>
      {history.map((item, idx) => (
        <div key={idx}>
          <p>{item.prompt}</p>
          <img src={item.image_url} alt='Generated' style={{ width: '200px' }} />
        </div>
      ))}
    </div>
  )
}

export default History
