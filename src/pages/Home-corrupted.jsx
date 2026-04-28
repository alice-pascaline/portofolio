import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowDown, Download, Github, Linkedin, Mail, Code, Zap, Award, TrendingUp, Users, Monitor, Smartphone, Shield, Server, Eye } from 'lucide-react'
    <div className="min-h-screen bg-gradient-to-br from-primary/10 to-secondary/10 dark:from-dark-background dark:to-dark-card">
      {/* Hero Section */}
      <section className="section-padding">
        <div className="container-max">
          <div className="max-w-6xl mx-auto">
            {/* Hero Section - No Profile Image */}
            <div className="flex flex-col items-center justify-center gap-8 lg:gap-12 mb-20">
              {/* Name Section with Typing Animation */}
              <div className="relative animate-slide-up text-center">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-dark-text leading-tight mb-4">
                  <span className="inline-block hover:scale-105 transition-transform duration-300 cursor-default">
                    Hello, I'm
                  </span>
                  <br />
                  <span className="inline-block hover:scale-105 transition-transform duration-300 cursor-default text-gradient">
                    {typedText}
                    <span className="animate-pulse">|</span>
                  </span>
                </h1>
              </div>

                {/* Title with Badge */}
              <div className="animate-slide-up flex flex-col sm:flex-row items-center justify-center gap-3 mb-8" style={{ animationDelay: '0.1s' }}>
                <h2 className="text-2xl md:text-3xl lg:text-4xl text-primary font-semibold">
                  MERN Stack Developer
                </h2>
                <span className="px-4 py-2 bg-accent/20 text-accent text-sm font-medium rounded-full whitespace-nowrap">
                  Available for Hire
                </span>
              </div>

              {/* Description */}
              <div className="animate-slide-up mb-8 max-w-3xl" style={{ animationDelay: '0.2s' }}>
                <p className="text-lg lg:text-xl text-gray-700 dark:text-gray-300 leading-relaxed text-center">
                  I am a passionate MERN Stack Developer from Rwanda, focused on building modern, secure, and user-friendly web applications. I enjoy solving real-world problems through technology.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="animate-slide-up flex flex-col sm:flex-row gap-4 justify-center mb-8" style={{ animationDelay: '0.3s' }}>
                <Link 
                  to="/contact" 
                  className="btn-primary inline-flex items-center justify-center group relative overflow-hidden"
                >
                  <span className="relative z-10 flex items-center">
                    Get In Touch
                    <Mail className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                  </span>
                  <div className="absolute inset-0 bg-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                </Link>
                
                <Link 
                  to="/projects" 
                  className="btn-secondary inline-flex items-center justify-center group relative overflow-hidden"
                >
                  <span className="relative z-10 flex items-center">
                    View Projects
                    <ArrowDown className="ml-2 rotate-180 group-hover:translate-y-1 transition-transform" size={18} />
                  </span>
                  <div className="absolute inset-0 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                </Link>
              </div>

              {/* Quick Stats */}
              <div className="animate-slide-up grid grid-cols-3 gap-8 mb-8" style={{ animationDelay: '0.4s' }}>
                <div className="text-center group">
                  <div className="text-3xl font-bold text-primary group-hover:scale-110 transition-transform">3+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Years Experience</div>
                </div>
                <div className="text-center group">
                  <div className="text-3xl font-bold text-secondary group-hover:scale-110 transition-transform">50+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Projects Completed</div>
                </div>
                <div className="text-center group">
                  <div className="text-3xl font-bold text-accent group-hover:scale-110 transition-transform">100%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Client Satisfaction</div>
                </div>
              </div>

              {/* Download CV Button */}
              <div className="animate-slide-up" style={{ animationDelay: '0.5s' }}>
                <a 
                  href="/resume.pdf" 
                  download
                  className="group inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-primary transition-colors px-6 py-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 border border-gray-300 dark:border-gray-600 hover:border-primary"
                >
                  <Download className="mr-2 group-hover:animate-bounce" size={20} />
                  <span className="font-medium">Download CV</span>
                </a>
              </div>
            </div>

                {/* Description */}
                <div className="animate-slide-up mb-8" style={{ animationDelay: '0.2s' }}>
                  <p className="text-lg lg:text-xl text-gray-700 dark:text-gray-300 max-w-2xl lg:max-w-none leading-relaxed">
                    I am a passionate MERN Stack Developer from Rwanda, focused on building modern, secure, and user-friendly web applications. I enjoy solving real-world problems through technology.
                  </p>
                </div>

                {/* CTA Buttons */}
                <div className="animate-slide-up flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8" style={{ animationDelay: '0.3s' }}>
                  <Link 
                    to="/contact" 
                    className="btn-primary inline-flex items-center justify-center group relative overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center">
                      Get In Touch
                      <Mail className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                    </span>
                    <div className="absolute inset-0 bg-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                  </Link>
                  
                  <Link 
                    to="/projects" 
                    className="btn-secondary inline-flex items-center justify-center group relative overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center">
                      View Projects
                      <ArrowDown className="ml-2 rotate-180 group-hover:translate-y-1 transition-transform" size={18} />
                    </span>
                    <div className="absolute inset-0 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                  </Link>
                </div>
              </div>
          </div>

          {/* Service Cards Section - CSS Grid Layout */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-dark-text mb-4">
                What I <span className="text-gradient">Do</span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Specialized services to bring your ideas to life with modern web technologies
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {/* Web Development Card */}
              <div 
                className="group bg-white dark:bg-dark-card p-6 lg:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 dark:border-gray-700"
                onMouseEnter={() => setHoveredCard('web-dev')}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() => setViewCount(prev => ({...prev, 'web-dev': (prev['web-dev'] || 0) + 1}))}
              >
                <div className="w-14 h-14 bg-primary/10 dark:bg-primary/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  <Monitor className="text-primary" size={28} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-dark-text mb-3 group-hover:text-primary transition-colors">
                  Web Development
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Building modern, responsive web applications with cutting-edge technologies
                </p>
                
                {/* View Counter */}
                {viewCount['web-dev'] > 0 && (
                  <div className="absolute top-2 right-2 bg-primary text-white text-xs px-2 py-1 rounded-full animate-fade-in">
                    <TrendingUp className="inline mr-1" size={10} />
                    {viewCount['web-dev']}
                  </div>
                )}
              </div>

              {/* Responsive Design Card */}
              <div 
                className="group bg-white dark:bg-dark-card p-6 lg:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 dark:border-gray-700"
                onMouseEnter={() => setHoveredCard('responsive-design')}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() => setViewCount(prev => ({...prev, 'responsive-design': (prev['responsive-design'] || 0) + 1}))}
              >
                <div className="w-14 h-14 bg-secondary/10 dark:bg-secondary/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  <Smartphone className="text-secondary" size={28} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-dark-text mb-3 group-hover:text-secondary transition-colors">
                  Responsive Design
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Creating seamless experiences across all devices and screen sizes
                </p>
              </div>

              {/* Secure Systems Card */}
              <div className="group bg-white dark:bg-dark-card p-6 lg:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 dark:border-gray-700">
                <div className="w-14 h-14 bg-accent/10 dark:bg-accent/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  <Shield className="text-accent" size={28} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-dark-text mb-3 group-hover:text-accent transition-colors">
                  Secure Systems
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Implementing robust security measures and best practices
                </p>
              </div>

              {/* API Development Card */}
              <div className="group bg-white dark:bg-dark-card p-6 lg:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 dark:border-gray-700">
                <div className="w-14 h-14 bg-primary/10 dark:bg-primary/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  <Server className="text-primary" size={28} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-dark-text mb-3 group-hover:text-primary transition-colors">
                  API Development
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Designing and building scalable RESTful APIs and services
                </p>
              </div>
            </div>
          </div>

            {/* Technology Stack Section */}
            <div className="mb-20">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-dark-text mb-4">
                  Technologies I <span className="text-gradient">Use</span>
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                  Working with modern tools and frameworks to build amazing applications
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
                  <span className="mt-3 text-sm font-medium text-gray-700 dark:text-gray-300">Node</span>
                </div>

                {/* Git */}
                <div className="group flex flex-col items-center">
                  <div className="w-16 h-16 bg-white dark:bg-dark-card rounded-xl shadow-md hover:shadow-xl transition-all duration-500 flex items-center justify-center group-hover:scale-110 border border-gray-100 dark:border-gray-700">
                    <svg className="w-10 h-10 text-orange-600" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M23.546 10.93L13.067.452c-.598-.599-1.57-.599-2.168 0L8.758 2.593l2.759 2.759c.636-.215 1.361-.071 1.866.434.508.508.65 1.244.43 1.884l2.658 2.658c.64-.22 1.376-.078 1.884.43.711.711.711 1.865 0 2.577-.711.711-1.865.711-2.577 0-.518-.518-.724-1.27-.571-1.965l-2.476-2.476v6.535c.173.086.336.201.48.35.711.711.711 1.865 0 2.577-.711.711-1.865.711-2.577 0-.711-.711-.711-1.865 0-2.577.173-.173.359-.304.557-.393V7.72c-.2-.089-.384-.22-.557-.393-.724-.724-.724-1.9 0-2.624.724-.724 1.9-.724 2.624 0 .724.724.724 1.9 0 2.624-.173.173-.359.304-.557.393v6.568c.198.089.384.22.557.393.724.724.724 1.9 0 2.624-.724.724-1.9.724-2.624 0-.173-.173-.359-.304-.557-.393l2.49-2.49c.695.153 1.447-.053 1.965-.571.711-.711.711-1.865 0-2.577z"/>
                    </svg>
                  </div>
                  <span className="mt-3 text-sm font-medium text-gray-700 dark:text-gray-300">Git</span>
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
                  <Github className="text-gray-700 dark:text-gray-300 group-hover:text-primary transition-colors" size={24} />
                  <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-dark-card text-dark-text px-2 py-1 rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200">View GitHub</span>
                </a>
                <a 
                  href="https://linkedin.com/in/pascaline alice" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group relative p-3 bg-white dark:bg-dark-card rounded-full shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="text-gray-700 dark:text-gray-300 group-hover:text-primary transition-colors" size={24} />
                  <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-dark-card text-dark-text px-2 py-1 rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200">Connect on LinkedIn</span>
                </a>
                <a 
                  href="mailto:umulisaalicepascaline@gmail.com"
                  className="group relative p-3 bg-white dark:bg-dark-card rounded-full shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
                  aria-label="Email"
                >
                  <Mail className="text-gray-700 dark:text-gray-300 group-hover:text-primary transition-colors" size={24} />
                  <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-dark-card text-dark-text px-2 py-1 rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200">Send Email</span>
                </a>
              </div>

              {/* Resume Download */}
              <div className="animate-slide-up" style={{ animationDelay: '0.6s' }}>
                <a 
                  href="/resume.pdf" 
                  download
                  className="group inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-primary transition-colors px-6 py-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  <Download className="mr-2 group-hover:animate-bounce" size={20} />
                  <span className="font-medium">Download Resume</span>
                </a>
              </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
              <div className="group cursor-pointer">
                <ArrowDown className="text-gray-400 dark:text-gray-500 group-hover:text-primary group-hover:scale-110 transition-all duration-300" size={24} />
                <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs text-gray-500 dark:text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                  Explore More
                </span>
              </div>
            </div>

            {/* Floating Stats */}
            <div className="absolute top-8 right-8 hidden xl:block">
              <div className="space-y-4">
                <div className="group flex items-center space-x-3 p-4 bg-white/80 dark:bg-dark-card/80 backdrop-blur rounded-xl hover:scale-105 transition-transform cursor-default shadow-lg">
                  <TrendingUp className="text-primary" size={20} />
                  <div>
                    <p className="text-sm font-semibold text-gray-900 dark:text-dark-text">3+ Years</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">Experience</p>
                  </div>
                </div>
                <div className="group flex items-center space-x-3 p-4 bg-white/80 dark:bg-dark-card/80 backdrop-blur rounded-xl hover:scale-105 transition-transform cursor-default shadow-lg">
                  <Users className="text-accent" size={20} />
                  <div>
                    <p className="text-sm font-semibold text-gray-900 dark:text-dark-text">50+ Projects</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">Completed</p>
                  </div>
                </div>
                <div className="group flex items-center space-x-3 p-4 bg-white/80 dark:bg-dark-card/80 backdrop-blur rounded-xl hover:scale-105 transition-transform cursor-default shadow-lg">
                  <div className="w-5 h-5 bg-green-500 rounded-full animate-pulse"></div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900 dark:text-dark-text">Available</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">For Hire</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
