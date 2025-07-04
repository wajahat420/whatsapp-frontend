// src/context/AuthContext.tsx
import { createContext, useState, type ReactNode } from 'react'

interface AuthContextType {
    isAuthenticated: boolean
    login: () => void
    logout: () => void
}

export const AuthContext = createContext<AuthContextType | null>(null)

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
        return !!localStorage.getItem('token')
    })

    const login = () => {
        localStorage.setItem('token', 'dummy_token')
        setIsAuthenticated(true)
    }

    const logout = () => {
        localStorage.removeItem('token')
        setIsAuthenticated(false)
    }

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}
