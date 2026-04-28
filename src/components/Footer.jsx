import { Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'

const Footer = ({ className = "" }) => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={`bg-secondary text-white dark:bg-dark-card dark:text-dark-text ${className}`}>
      <div className="section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* About Section */}
            <div>
              <h3 className="text-xl font-bold mb-4 text-gradient">About Me</h3>
              <p className="text-gray-300 dark:text-gray-400 mb-4">
                Passionate MERN stack developer focused on creating robust, scalable web applications 
                with modern technologies and best practices.
              </p>
              <div className="flex space-x-4">
                <a 
                  href="https://github.com/pascaline-alice" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 dark:text-gray-500 hover:text-accent transition-colors"
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </a>
                <a 
                  href="https://linkedin.com/in/pascaline-alice" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 dark:text-gray-500 hover:text-accent transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
                <a 
                  href="mailto:umulisaalicepascaline@.com"
                  className="text-gray-400 dark:text-gray-500 hover:text-accent transition-colors"
                  aria-label="Email"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-bold mb-4 text-gradient">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="text-gray-300 dark:text-gray-400 hover:text-primary transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-gray-300 dark:text-gray-400 hover:text-primary transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/skills" className="text-gray-300 dark:text-gray-400 hover:text-primary transition-colors">
                    Skills
                  </Link>
                </li>
                <li>
                  <Link to="/projects" className="text-gray-300 dark:text-gray-400 hover:text-primary transition-colors">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-gray-300 dark:text-gray-400 hover:text-primary transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-bold mb-4 text-gradient">Contact Info</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail size={18} className="text-primary dark:text-accent" />
                  <span className="text-gray-300 dark:text-gray-400">umulisaalicepascaline@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone size={18} className="text-primary dark:text-accent" />
                  <span className="text-gray-300 dark:text-gray-400">+250 798672283</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin size={18} className="text-primary dark:text-accent" />
                  <span className="text-gray-300 dark:text-gray-400">Kigali city, Rwanda</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-700 dark:border-dark-border mt-8 pt-8 text-center">
            <p className="text-gray-400 dark:text-gray-500">
              © {currentYear} Umulisa alice pascaline. All rights reserved.
            </p>
            {/* Hidden Admin Access - Only you know this exists */}
            <div className="mt-2">
              <Link 
                to="/admin" 
                className="text-gray-500 hover:text-gray-400 text-xs opacity-50 hover:opacity-100 transition-all duration-300"
                title="Admin Access"
              >
                •
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
