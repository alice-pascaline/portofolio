import { createContext, useContext, useState, useEffect } from 'react'

const AuthContext = createContext()

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check if user is logged in (you can customize this logic)
    const checkAuth = () => {
      try {
        const token = localStorage.getItem('admin_token')
        const user = localStorage.getItem('admin_user')
        
        console.log('Checking auth:', { token, user }) // Debug auth check
        
        // Simple authentication check - you can enhance this
        if (token === 'admin_access_token' && user === 'alice_pascaline') {
          setIsAuthenticated(true)
          console.log('User is authenticated')
        } else {
          setIsAuthenticated(false)
          console.log('User is not authenticated')
        }
      } catch (error) {
        console.error('Auth check error:', error)
        setIsAuthenticated(false)
      }
      setIsLoading(false)
    }

    checkAuth()
  }, [])

  const login = (username, password) => {
    // Simple login logic - replace with proper authentication
    console.log('Login attempt:', { username, password }) // Debug line
    
    // More explicit comparison
    const isCorrectUsername = username === 'alice_pascaline'
    const isCorrectPassword = password === 'alice@250'
    console.log('Username correct:', isCorrectUsername, 'Password correct:', isCorrectPassword)
    
    if (isCorrectUsername && isCorrectPassword) {
      localStorage.setItem('admin_token', 'admin_access_token')
      localStorage.setItem('admin_user', 'alice_pascaline')
      setIsAuthenticated(true)
      console.log('Login successful!')
      return true
    }
    
    console.log('Login failed!')
    return false
  }

  const logout = () => {
    localStorage.removeItem('admin_token')
    localStorage.removeItem('admin_user')
    setIsAuthenticated(false)
  }

  const value = {
    isAuthenticated,
    isLoading,
    login,
    logout
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}
