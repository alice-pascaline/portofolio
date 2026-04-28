import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowDown, Download, Github, Linkedin, Mail, TrendingUp, Users, Award } from 'lucide-react'

const Home = () => {
  const [typedText, setTypedText] = useState('')
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  
  const words = ["Umulisa Alice Pascaline", "Aspiring Full-Stack Developer", "Problem Solver", "Tech Enthusiast"]
  const currentWord = words[currentWordIndex]
  
  // Typing animation effect
  useEffect(() => {
    const typingSpeed = isDeleting ? 50 : 100
    const handleTyping = setTimeout(() => {
      if (!isDeleting && typedText.length < currentWord.length) {
        setTypedText(currentWord.slice(0, typedText.length + 1))
      } else if (isDeleting && typedText.length > 0) {
        setTypedText(typedText.slice(0, -1))
      } else if (!isDeleting && typedText.length === currentWord.length) {
        setTimeout(() => setIsDeleting(true), 2000)
      } else if (isDeleting && typedText.length === 0) {
        setIsDeleting(false)
        setCurrentWordIndex((prev) => (prev + 1) % words.length)
      }
    }, typingSpeed)
    
    return () => clearTimeout(handleTyping)
  }, [typedText, currentWord, isDeleting, currentWordIndex])
  
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-secondary/10 dark:from-dark-background dark:to-dark-card section-padding">
        <div className="container-max">
          <div className="max-w-6xl mx-auto">
            {/* Hero Section - Modern Clean Design */}
            <div className="flex flex-col items-center justify-center min-h-[80vh] px-4">
              {/* Profile Picture - Round Shape */}
              <div className="relative animate-fade-in mb-8">
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 border-4 border-cyan-500/30 group">
                  <img 
                    src="/profile-photo.jpg.png" 
                    alt="Umulisa Alice Pascaline" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Name Section with Typing Animation */}
              <div className="relative animate-fade-in text-center mb-12">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight mb-4 tracking-wide">
                  <span className="block mb-2 opacity-80">
                    Hello, I'm
                  </span>
                  <span className="block font-medium text-cyan-400">
                    {typedText}
                    <span className="animate-pulse text-cyan-300">|</span>
                  </span>
                </h1>
              </div>

              {/* Title Badge */}
              <div className="animate-slide-up mb-8" style={{ animationDelay: '0.1s' }}>
                <span className="px-6 py-2 bg-cyan-500/20 text-cyan-300 text-sm font-medium rounded-full border border-cyan-500/30">
                  Open for Internship Opportunities
                </span>
              </div>

              {/* Description */}
              <div className="animate-slide-up mb-12 max-w-2xl" style={{ animationDelay: '0.2s' }}>
                <p className="text-lg text-white leading-relaxed text-center">
                  MERN Stack developer passionate about building modern web applications and solving real-world problems through technology.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="animate-slide-up flex flex-col sm:flex-row gap-4 justify-center" style={{ animationDelay: '0.3s' }}>
                <Link 
                  to="/projects" 
                  className="px-8 py-3 bg-cyan-600 hover:bg-cyan-700 text-white font-medium rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-600/25"
                >
                  View My Projects
                </Link>
                
                <Link 
                  to="/contact" 
                  className="px-8 py-3 bg-transparent hover:bg-cyan-600/10 text-cyan-300 hover:text-white font-medium rounded-lg border border-cyan-500/30 hover:border-cyan-400 transition-all duration-300 hover:scale-105"
                >
                  Contact Me
                </Link>
              </div>
            </div>

            {/* Service Cards Section */}
            <div className="mb-20 bg-white dark:bg-dark-card">
              <div className="text-center mb-12 section-padding">
                <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 dark:text-slate-100 mb-4">
                  What I <span className="text-white font-semibold font-mono">Do</span>
                </h2>
                <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                  Specialized services to bring your ideas to life with modern web technologies
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                {/* Web Development Card */}
                <div className="group bg-white dark:bg-slate-800 p-6 lg:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-slate-100 dark:border-slate-700">
                  <div className="w-14 h-14 bg-indigo-100 dark:bg-indigo-900/30 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                    <svg className="text-indigo-600 dark:text-indigo-400" size={28} fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-100 mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    Full-Stack Development
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    Building enterprise-grade applications with microservices, serverless architecture, and progressive web apps
                  </p>
                </div>

                {/* Responsive Design Card */}
                <div className="group bg-white dark:bg-dark-card p-6 lg:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 dark:border-gray-700">
                  <div className="w-14 h-14 bg-secondary/10 dark:bg-secondary/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                    <svg className="text-secondary" size={28} fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    UI/UX Design Systems
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    Creating responsive design systems, component libraries, and accessibility-first interfaces with WCAG compliance
                  </p>
                </div>

                {/* Secure Systems Card */}
                <div className="group bg-white dark:bg-dark-card p-6 lg:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 dark:border-gray-700">
                  <div className="w-14 h-14 bg-accent/10 dark:bg-accent/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                    <svg className="text-accent" size={28} fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M12,6A6,6 0 0,0 6,12A6,6 0 0,0 12,18A6,6 0 0,0 18,12A6,6 0 0,0 12,6M12,8A4,4 0 0,1 16,12A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8Z"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    UI/UX Designer
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    Creating intuitive user interfaces, user experience research, wireframing, prototyping, and design system development
                  </p>
                </div>

                {/* API Development Card */}
                <div className="group bg-white dark:bg-dark-card p-6 lg:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 dark:border-gray-700">
                  <div className="w-14 h-14 bg-primary/10 dark:bg-primary/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                    <svg className="text-primary" size={28} fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M12,6A6,6 0 0,0 6,12A6,6 0 0,0 12,18A6,6 0 0,0 18,12A6,6 0 0,0 12,6M12,8A4,4 0 0,1 16,12A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8Z"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    Cloud Architecture
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    Designing GraphQL APIs, WebSocket services, Kubernetes orchestration, and serverless functions
                  </p>
                </div>
              </div>
            </div>

            {/* Technology Stack Section */}
            <div className="mb-20 bg-gray-50 dark:bg-dark-background">
              <div className="text-center mb-12 section-padding">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  Advanced Tech Stack
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                  Cutting-edge technologies for enterprise-scale applications
                </p>
              </div>
              
              <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12">
                {/* MongoDB */}
                <div className="group flex flex-col items-center">
                  <div className="w-16 h-16 bg-white dark:bg-dark-card rounded-xl shadow-md hover:shadow-xl transition-all duration-500 flex items-center justify-center group-hover:scale-110 border border-gray-100 dark:border-gray-700">
                    <svg className="w-10 h-10 text-green-600" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.193 17.193h-1.72V13.41c0-.738-.014-1.686-1.027-1.686-1.028 0-1.185.802-1.185 1.631v3.838h-1.72v-7.736h1.65v1.059h.023c.23-.435.79-.894 1.623-.894 1.736 0 2.055 1.142 2.055 2.627v4.944zM8.61 9.398c-.552 0-1-.448-1-1s.448-1 1-1 1 .448 1 1-.448 1-1 1zm.865 7.795h-1.73V9.457h1.73v7.736zM18.345 4h-12.69C4.283 4 3 5.283 3 6.655v10.69C3 18.717 4.283 20 5.655 20h12.69c1.372 0 2.655-1.283 2.655-2.655V6.655C21 5.283 19.717 4 18.345 4z"/>
                    </svg>
                  </div>
                  <span className="mt-3 text-sm font-medium text-gray-700 dark:text-gray-300">MongoDB</span>
                </div>

                {/* Express */}
                <div className="group flex flex-col items-center">
                  <div className="w-16 h-16 bg-white dark:bg-dark-card rounded-xl shadow-md hover:shadow-xl transition-all duration-500 flex items-center justify-center group-hover:scale-110 border border-gray-100 dark:border-gray-700">
                    <div className="text-2xl font-bold text-gray-800 dark:text-gray-200">E</div>
                  </div>
                  <span className="mt-3 text-sm font-medium text-gray-700 dark:text-gray-300">Express</span>
                </div>

                {/* React */}
                <div className="group flex flex-col items-center">
                  <div className="w-16 h-16 bg-white dark:bg-dark-card rounded-xl shadow-md hover:shadow-xl transition-all duration-500 flex items-center justify-center group-hover:scale-110 border border-gray-100 dark:border-gray-700">
                    <svg className="w-10 h-10 text-cyan-500" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-2.582-.393-5.166-.394-7.743 0-1.154.18-2.033 1.086-2.183 2.245-.26 2.056-.26 4.123 0 6.179.15 1.158 1.029 2.065 2.183 2.244 2.58.393 5.166.394 7.743 0 1.154-.18 2.033-1.086 2.183-2.244.26-2.056.26-4.123 0-6.179-.15-1.158-1.029-2.065-2.183-2.245z"/>
                    </svg>
                  </div>
                  <span className="mt-3 text-sm font-medium text-gray-700 dark:text-gray-300">React</span>
                </div>

                {/* Node */}
                <div className="group flex flex-col items-center">
                  <div className="w-16 h-16 bg-white dark:bg-dark-card rounded-xl shadow-md hover:shadow-xl transition-all duration-500 flex items-center justify-center group-hover:scale-110 border border-gray-100 dark:border-gray-700">
                    <svg className="w-10 h-10 text-green-600" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M11.998 24c-1.321 0-2.642-.27-3.868-.811l-2.952-1.386c-.896-.42-1.458-1.27-1.458-2.263v-9.92c0-.993.562-1.843 1.458-2.263l2.952-1.386a8.974 8.974 0 0 1 7.736 0l2.952 1.386c.896.42 1.458 1.27 1.458 2.263v9.92c0 .993-.562 1.843-1.458 2.263l-2.952 1.386a8.974 8.974 0 0 1-3.868.811z"/>
                    </svg>
                  </div>
                  <span className="mt-3 text-sm font-medium text-gray-700 dark:text-gray-300">Node.js</span>
                </div>

                {/* Docker */}
                <div className="group flex flex-col items-center">
                  <div className="w-16 h-16 bg-white dark:bg-dark-card rounded-xl shadow-md hover:shadow-xl transition-all duration-500 flex items-center justify-center group-hover:scale-110 border border-gray-100 dark:border-gray-700">
                    <svg className="w-10 h-10 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12.91 2.76c.23-.86.91-1.46 1.72-1.46.5 0 .97.23 1.28.61l.01.01c.31-.38.78-.61 1.28-.61.81 0 1.49.6 1.72 1.46l.07.28h.07c.83 0 1.5.67 1.5 1.5v1.5h-.5v8.5c0 .83-.67 1.5-1.5 1.5h-6c-.83 0-1.5-.67-1.5-1.5v-8.5h-.5v-1.5c0-.83.67-1.5 1.5-1.5h.07l.07-.28z"/>
                    </svg>
                  </div>
                  <span className="mt-3 text-sm font-medium text-gray-700 dark:text-gray-300">Docker</span>
                </div>

                {/* Kubernetes */}
                <div className="group flex flex-col items-center">
                  <div className="w-16 h-16 bg-white dark:bg-dark-card rounded-xl shadow-md hover:shadow-xl transition-all duration-500 flex items-center justify-center group-hover:scale-110 border border-gray-100 dark:border-gray-700">
                    <svg className="w-10 h-10 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </div>
                  <span className="mt-3 text-sm font-medium text-gray-700 dark:text-gray-300">Kubernetes</span>
                </div>

                {/* AWS */}
                <div className="group flex flex-col items-center">
                  <div className="w-16 h-16 bg-white dark:bg-dark-card rounded-xl shadow-md hover:shadow-xl transition-all duration-500 flex items-center justify-center group-hover:scale-110 border border-gray-100 dark:border-gray-700">
                    <svg className="w-10 h-10 text-orange-500" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12.5 2.5c-1.1 0-2 .9-2 2v1c0 .55.45 1 1 1s1-.45 1-1v-1c0-.55.45-1 1-1s1 .45 1 1v1c0 .55.45 1 1 1s1-.45 1-1v-1c0-1.1-.9-2-2-2zm-5 5c-.83 0-1.5.67-1.5 1.5v8c0 .83.67 1.5 1.5 1.5h10c.83 0 1.5-.67 1.5-1.5v-8c0-.83-.67-1.5-1.5-1.5h-10z"/>
                    </svg>
                  </div>
                  <span className="mt-3 text-sm font-medium text-gray-700 dark:text-gray-300">AWS</span>
                </div>

                {/* GraphQL */}
                <div className="group flex flex-col items-center">
                  <div className="w-16 h-16 bg-white dark:bg-dark-card rounded-xl shadow-md hover:shadow-xl transition-all duration-500 flex items-center justify-center group-hover:scale-110 border border-gray-100 dark:border-gray-700">
                    <svg className="w-10 h-10 text-pink-600" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  </div>
                  <span className="mt-3 text-sm font-medium text-gray-700 dark:text-gray-300">GraphQL</span>
                </div>
              </div>
            </div>

            {/* Social Links & Resume */}
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mb-12">
              {/* Social Links */}
              <div className="flex justify-center lg:justify-start space-x-6 animate-slide-up" style={{ animationDelay: '0.5s' }}>
                <a 
                  href="https://github.com/pascaline alice" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group relative p-3 bg-white dark:bg-dark-card rounded-full shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
                  aria-label="GitHub"
                >
                  <Github className="text-gray-700 dark:text-gray-300 group-hover:text-white transition-colors" size={24} />
                  <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-dark-card text-dark-text px-2 py-1 rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200">View GitHub</span>
                </a>
                <a 
                  href="https://linkedin.com/in/pascaline alice" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group relative p-3 bg-white dark:bg-dark-card rounded-full shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="text-gray-700 dark:text-gray-300 group-hover:text-white transition-colors" size={24} />
                  <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-dark-card text-dark-text px-2 py-1 rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200">Connect on LinkedIn</span>
                </a>
                <a 
                  href="mailto:umulisaalicepascaline@gmail.com"
                  className="group relative p-3 bg-white dark:bg-dark-card rounded-full shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
                  aria-label="Email"
                >
                  <Mail className="text-gray-700 dark:text-gray-300 group-hover:text-white transition-colors" size={24} />
                  <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-dark-card text-dark-text px-2 py-1 rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200">Send Email</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
