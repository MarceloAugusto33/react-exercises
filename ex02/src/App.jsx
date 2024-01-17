import { useEffect, useState } from 'react'
import './App.css'

export function App() {

  const [data, setData] = useState(new Date());

  useEffect(() => {
    const loop = setInterval(() => {
      setData(new Date())
    }, 1000);

    return () => clearInterval(loop)
  }, [])


  return (
    <main>
      <div className="container">
        <div className="card">
          {data.getHours()}
        </div>
        <div className="card">
          {data.getMinutes()}
        </div>
        <div className="card">
          {data.getSeconds()}
        </div>
      </div>
    </main>
  )
}