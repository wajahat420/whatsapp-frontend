import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import '../styles/auth.scss'

const Login: React.FC = () => {
    const { login, loading, error } = useAuth()
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        await login(email, password)

        console.log('Login successful, navigating to chat page');
        navigate('/chat')
    }

    return (
        <div className="auth-page">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" required />
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" required />
                <button type="submit" disabled={loading}>Login</button>
                {error && <p className="error">{error}</p>}
                <p>Don’t have an account? <Link to="/register">Register</Link></p>
            </form>
        </div>
    )
}

export default Login
