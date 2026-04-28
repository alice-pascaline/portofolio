import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { X, Menu, Github, Linkedin, Mail, Instagram, Twitter, Facebook, Home, User, Code, FolderOpen, Contact, Moon, Sun } from 'lucide-react'
import ThemeToggle from './ThemeToggle'

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [location])

  const navLinks = [
    { name: 'Home', path: '/', icon: <Home size={20} /> },
    { name: 'About', path: '/about', icon: <User size={20} /> },
    { name: 'Skills', path: '/skills', icon: <Code size={20} /> },
    { name: 'Projects', path: '/projects', icon: <FolderOpen size={20} /> },
    { name: 'Contact', path: '/contact', icon: <Contact size={20} /> },
  ]

  const socialLinks = [
    {
      name: 'GitHub',
      icon: <Github size={20} />,
      url: 'https://github.com/pascaline alice',
      color: 'hover:bg-gray-900'
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin size={20} />,
      url: 'https://linkedin.com/in/pascaline alice',
      color: 'hover:bg-blue-600'
    },
    {
      name: 'Instagram',
      icon: <Instagram size={20} />,
      url: 'https://instagram.com/pascaline alice',
      color: 'hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500'
    },
    {
      name: 'Twitter',
      icon: <Twitter size={20} />,
      url: 'https://twitter.com/pascaline alice',
      color: 'hover:bg-sky-500'
    },
    {
      name: 'Email',
      icon: <Mail size={20} />,
      url: 'mailto:umulisaalicepascaline@gmail.com',
      color: 'hover:bg-primary'
    }
  ]

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed top-4 left-4 z-50 p-3 bg-white dark:bg-dark-card rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 md:hidden ${
          isScrolled ? 'scale-90' : 'scale-100'
        }`}
        aria-label="Toggle menu"
      >
        {isOpen ? <X className="text-gray-700 dark:text-gray-300" size={24} /> : <Menu className="text-gray-700 dark:text-gray-300" size={24} />}
      </button>

      {/* Sidebar */}
      <div className={`fixed left-0 top-0 h-full bg-white dark:bg-dark-card shadow-2xl transition-all duration-300 z-40 ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } md:translate-x-0 w-64`}>

        {/* Sidebar Header */}
        <div className="p-6 border-b border-gray-200 dark:border-dark-border">
          <div className="flex items-center justify-between">
            <Link 
              to="/" 
              className="text-2xl font-bold text-gradient hover:scale-105 transition-transform"
              onClick={() => setIsOpen(false)}
            >
              Portfolio
            </Link>
            <button
              onClick={() => setIsOpen(false)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              <X className="text-gray-700 dark:text-gray-300" size={20} />
            </button>
          </div>
          <ThemeToggle />
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 group ${
                    location.pathname === link.path
                      ? 'bg-primary text-white shadow-lg'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-primary/10 hover:text-primary'
                  }`}
                >
                  <span className={`transition-transform duration-200 ${
                    location.pathname === link.path ? 'scale-110' : 'group-hover:scale-110'
                  }`}>
                    {link.icon}
                  </span>
                  <span className="font-medium">{link.name}</span>
                  {location.pathname === link.path && (
                    <div className="ml-auto w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Social Links */}
        <div className="p-4 border-t border-gray-200 dark:border-dark-border">
          <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-3 uppercase tracking-wider">
            Connect
          </p>
          <div className="grid grid-cols-3 gap-2">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 transition-all duration-200 hover:scale-110 hover:text-white ${social.color}`}
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Footer Info */}
        <div className="p-4 border-t border-gray-200 dark:border-dark-border">
          <div className="text-center">
            <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">
              © 2024 Umulisa Alice
            </p>
            <p className="text-xs text-gray-400 dark:text-gray-500">
              Built with ❤️ using MERN
            </p>
          </div>
        </div>
      </div>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  )
}

export default Sidebar
