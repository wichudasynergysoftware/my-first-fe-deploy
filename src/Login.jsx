import { useState } from 'react'
import './Login.css'

function Login({ onLogin }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')

    if (!email || !password) {
      setError('กรุณากรอกอีเมลและรหัสผ่าน')
      return
    }

    if (password.length < 6) {
      setError('รหัสผ่านต้องมีอย่างน้อย 6 ตัวอักษร')
      return
    }

    onLogin({ email })
  }

  return (
    <div className="login">
      <div className="login-card">
        <h1>เข้าสู่ระบบ</h1>
        <p className="login-subtitle">ยินดีต้อนรับกลับ</p>

        <form onSubmit={handleSubmit} className="login-form">
          <label>
            <span>อีเมล</span>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              autoComplete="email"
            />
          </label>

          <label>
            <span>รหัสผ่าน</span>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="อย่างน้อย 6 ตัวอักษร"
              autoComplete="current-password"
            />
          </label>

          {error && <p className="login-error">{error}</p>}

          <button type="submit" className="login-submit">
            เข้าสู่ระบบ
          </button>
        </form>

        <p className="login-hint">* เดโมเฉยๆ ใส่อะไรก็ได้ที่ผ่าน validation</p>
      </div>
    </div>
  )
}

export default Login
