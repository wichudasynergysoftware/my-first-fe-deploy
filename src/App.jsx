import { useState } from 'react'
import Login from './Login'
import './App.css'

function App() {
  const [user, setUser] = useState(null)
  const [count, setCount] = useState(0)

  if (!user) {
    return <Login onLogin={setUser} />
  }

  return (
    <div className="app">
      <header className="app-header">
        <span>สวัสดี, <strong>{user.email}</strong></span>
        <button className="logout" onClick={() => setUser(null)}>
          ออกจากระบบ
        </button>
      </header>

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
