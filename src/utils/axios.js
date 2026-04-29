import axios from 'axios'

// For frontend-only deployment, we'll use mock data or disable API calls
const API_BASE_URL = import.meta.env.VITE_API_URL || 
  (import.meta.env.MODE === 'production' 
    ? null // No backend in frontend-only deployment
    : 'http://localhost:3000')

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  },
  withCredentials: false
})

// Add request interceptor to handle missing backend in production
api.interceptors.request.use(
  (config) => {
    if (!API_BASE_URL) {
      console.warn('API not available in frontend-only deployment')
      return Promise.reject(new Error('API not available in frontend-only deployment'))
    }
    return config
  },
  (error) => Promise.reject(error)
)

export default api
