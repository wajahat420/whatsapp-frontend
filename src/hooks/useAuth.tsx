// src/hooks/useAuth.ts
import { useContext, useState } from 'react'
import API from '../api'
import { AuthContext } from '../context/AuthContext'

export const useAuth = () => {
    const context = useContext(AuthContext)
    if (!context) throw new Error('useAuth must be used within AuthProvider')

    const { isAuthenticated, login: contextLogin, logout } = context
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)

    const login = async (email: string, password: string) => {
        try {
            setLoading(true)
            setError(null)

            const res = await API.post('/auth/login', { email, password })
            const token = res.data.token

            localStorage.setItem('token', token)
            contextLogin()
        } catch (err: any) {
            setError(err.response?.data?.message || 'Login failed')
        } finally {
            setLoading(false)
        }
    }

    const register = async (name: string, email: string, password: string) => {
        try {
            setLoading(true)
            setError(null)

            const res = await API.post('/auth/register', { name, email, password })
            const token = res.data.token

            localStorage.setItem('token', token)
            contextLogin()
        } catch (err: any) {
            setError(err.response?.data?.message || 'Register failed')
        } finally {
            setLoading(false)
        }
    }

    return { isAuthenticated, login, register, logout, loading, error }
}
