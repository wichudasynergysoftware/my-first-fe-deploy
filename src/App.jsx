import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      <h1>My First FE Deploy</h1>
      <p className="subtitle">React + Vite + GitHub Pages</p>

      <div className="card">
        <button onClick={() => setCount((c) => c + 1)}>
          นับเลข: {count}
        </button>
        <p>แก้ไข <code>src/App.jsx</code> แล้วบันทึกเพื่อดูผล</p>
      </div>

      <p className="footer">ทดลอง deploy ครั้งแรก</p>
    </div>
  )
}

export default App
