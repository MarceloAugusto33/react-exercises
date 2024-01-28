import { useState } from 'react'
import './App.css'

export function App() {

  const [cont, setCont] = useState(0)

  return (
    <div className="container">
      <div className="card">
        <h1>{cont}</h1>
        <div className="btn__wrapper">
          <button
            onClick={() => setCont(prev => prev + 1)}
          >
            increment
          </button>
          <button
            onClick={() => setCont(prev => prev - 1)}
          >
            Decrement
          </button>
          <button
            onClick={() => setCont(0)}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  )
}