import { useState } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { Lock, Eye, EyeOff } from 'lucide-react'

const AdminLogin = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  const { login } = useAuth()

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')
    
    console.log('Form state before login:', { username, password }) // Debug form state
    console.log('Username length:', username.length, 'Password length:', password.length) // Debug lengths
    
    try {
      const success = login(username, password)
      console.log('Login result:', success) // Debug login result
      
      if (!success) {
        setError('Invalid credentials')
      } else {
        console.log('Login successful, redirecting...')
        // Force a small delay to ensure state updates
        setTimeout(() => {
          window.location.href = '/admin'
        }, 100)
      }
    } catch (error) {
      console.error('Login error:', error)
      setError('Login failed. Please try again.')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 to-secondary/10 dark:from-dark-background dark:to-dark-card">
      <div className="bg-white dark:bg-dark-card p-8 rounded-2xl shadow-2xl w-full max-w-md">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-primary/10 dark:bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <Lock className="text-primary" size={32} />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-dark-text mb-2">Admin Access</h2>
          <p className="text-gray-600 dark:text-gray-400">Enter your credentials to continue</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Username
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-dark-background text-gray-900 dark:text-dark-text"
              placeholder="Enter username"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 pr-12 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-dark-background text-gray-900 dark:text-dark-text"
                placeholder="Enter password"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          {error && (
            <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-400 px-4 py-3 rounded-lg">
              {error}
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-primary hover:bg-primary/600 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200 hover:shadow-lg"
          >
            Sign In
          </button>
        </form>

        <div className="mt-6 text-center">
          <a href="/" className="text-primary hover:text-primary/600 text-sm">
            ← Back to Home
          </a>
        </div>
      </div>
    </div>
  )
}

export default AdminLogin
