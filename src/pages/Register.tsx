import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import '../styles/auth.scss'

const Register: React.FC = () => {
    const { register, loading, error } = useAuth()
    const navigate = useNavigate()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        await register(name, email, password)
        navigate('/chat')
    }

    return (
        <div className="auth-page">
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Name" required />
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" required />
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" required />
                <button type="submit" disabled={loading}>Register</button>
                {error && <p className="error">{error}</p>}
                <p>Already have an account? <a href="/">Login</a></p>
            </form>
        </div>
    )
}

export default Register
