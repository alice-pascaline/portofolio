import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Menu, X, Github, Linkedin, Mail, Instagram, Twitter, Facebook, User, Settings, LogIn, LogOut } from 'lucide-react'
import ThemeToggle from './ThemeToggle'
import { useAuth } from '../contexts/AuthContext'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const { isAuthenticated, logout } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [location])

  const navLinks = [
    { name: 'Home', path: '/', icon: <User size={16} /> },
    { name: 'About', path: '/about', icon: <User size={16} /> },
    { name: 'Skills', path: '/skills', icon: <Settings size={16} /> },
    { name: 'Projects', path: '/projects', icon: <Settings size={16} /> },
    { name: 'Contact', path: '/contact', icon: <Mail size={16} /> },
  ]

  // Add admin link only if authenticated
  if (isAuthenticated) {
    navLinks.push({ name: 'Admin', path: '/admin', icon: <LogIn size={16} /> })
  }

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  return (
   <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 dark:bg-dark-card/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
      <div className="container-max">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link 
            to="/" 
            className="text-2xl font-bold text-gradient"
          >
            Portfolio
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`font-medium transition-colors duration-200 hover:text-primary ${
                  location.pathname === link.path ? 'text-primary' : 'text-gray-700 dark:text-dark-text'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Theme Toggle & Social Links - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            {isAuthenticated && (
              <button
                onClick={handleLogout}
                className="flex items-center space-x-2 text-gray-600 dark:text-dark-text hover:text-red-600 dark:hover:text-red-400 transition-colors"
                title="Logout"
              >
                <LogOut size={20} />
                <span className="text-sm font-medium">Logout</span>
              </button>
            )}
            <a 
              href="https://instagram.com/pascaline alice" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-dark-text hover:text-accent transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <a 
              href="https://linkedin.com/in/pascaline alice" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-dark-text hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="https://twitter.com/yourusername" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-dark-text hover:text-sky-500 transition-colors"
              aria-label="Twitter"
            >
              <Twitter size={20} />
            </a>
            <a 
              href="https://github.com/yourusername" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-dark-text hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a 
              href="mailto:umulisaalicepascaline@.com"
              className="text-gray-600 dark:text-dark-text hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>

          {/* Mobile menu button & Theme Toggle */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 dark:text-dark-text hover:text-primary transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-white dark:bg-dark-card border-t border-gray-200 dark:border-dark-border">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`block px-3 py-2 rounded-md font-medium transition-colors duration-200 ${
                    location.pathname === link.path
                      ? 'text-primary bg-primary/10 dark:bg-primary/20'
                      : 'text-gray-700 dark:text-dark-text hover:text-primary hover:bg-gray-50 dark:hover:bg-dark-border'
                  }`}
                >
                  {link.name}
                </Link> 
              ))}
              
              {/* Mobile Logout Button */}
              {isAuthenticated && (
                <button
                  onClick={handleLogout}
                  className="block w-full text-left px-3 py-2 rounded-md font-medium text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors duration-200"
                >
                  <div className="flex items-center space-x-2">
                    <LogOut size={16} />
                    <span>Logout</span>
                  </div>
                </button>
              )}
              
              {/* Mobile Social Links */}
              <div className="flex items-center space-x-4 px-3 py-2 pt-4 border-t border-gray-200 dark:border-dark-border">
                <a 
                  href="https://instagram.com/yourusername" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-dark-text hover:text-accent transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </a>
                <a 
                  href="https://linkedin.com/in/yourusername" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-dark-text hover:text-primary transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
                <a 
                  href="https://twitter.com/yourusername" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-sky-500 transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter size={20} />
                </a>
                <a 
                  href="https://github.com/yourusername" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-dark-text hover:text-primary transition-colors"
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </a>
                <a 
                  href="mailto:your.email@example.com"
                  className="text-gray-600 dark:text-dark-text hover:text-primary transition-colors"
                  aria-label="Email"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
