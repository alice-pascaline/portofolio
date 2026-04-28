import { useState } from 'react'
import { ExternalLink, Github, Calendar, Users, Database, Eye, TrendingUp, Clock, Zap, Code, BarChart3, MessageCircle } from 'lucide-react'

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null)
  const [viewCount, setViewCount] = useState({})
  
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-featured e-commerce platform with user authentication, product management, shopping cart, and payment integration. Built with modern MERN stack architecture.",
      image: "/api/placeholder/600/400",
      technologies: ["React.js", "Node.js", "MongoDB", "Express.js", "JWT", "Stripe API"],
      features: ["User authentication", "Product catalog", "Shopping cart", "Payment processing", "Admin dashboard"],
      liveUrl: "https://example-ecommerce.com",
      githubUrl: "https://github.com/yourusername/ecommerce-platform",
      category: "Full Stack",
      status: "Completed",
      teamSize: "Solo",
      duration: "3 months"
    },
    {
      id: 2,
      title: "Task Management System",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features. Includes comprehensive CRUD operations.",
      image: "/api/placeholder/600/400",
      technologies: ["React.js", "Node.js", "MongoDB", "Socket.io", "Express.js", "TailwindCSS"],
      features: ["Real-time collaboration", "Drag & drop interface", "Task assignments", "Progress tracking", "Team management"],
      liveUrl: "https://example-tasks.com",
      githubUrl: "https://github.com/yourusername/task-manager",
      category: "Full Stack",
      status: "Completed",
      teamSize: "2 members",
      duration: "2 months"
    },
    {
      id: 3,
      title: "RESTful API Service",
      description: "A robust RESTful API service for data management with comprehensive CRUD operations, authentication, rate limiting, and detailed documentation.",
      image: "/api/placeholder/600/400",
      technologies: ["Node.js", "Express.js", "MongoDB", "JWT", "Joi", "Swagger"],
      features: ["RESTful endpoints", "JWT authentication", "Rate limiting", "Input validation", "API documentation"],
      liveUrl: "https://api.example.com",
      githubUrl: "https://github.com/yourusername/restful-api",
      category: "Backend",
      status: "Completed",
      teamSize: "Solo",
      duration: "1 month"
    },
    {
      id: 4,
      title: "Authentication Dashboard",
      description: "A secure authentication system with role-based access control, user management, and comprehensive admin dashboard for monitoring and managing users.",
      image: "/api/placeholder/600/400",
      technologies: ["React.js", "Node.js", "MongoDB", "Express.js", "JWT", "bcrypt"],
      features: ["Role-based access", "User management", "Secure authentication", "Admin dashboard", "Activity logs"],
      liveUrl: "https://example-auth.com",
      githubUrl: "https://github.com/yourusername/auth-system",
      category: "Full Stack",
      status: "Completed",
      teamSize: "Solo",
      duration: "6 weeks"
    },
    {
      id: 5,
      title: "Blog Platform",
      description: "A dynamic blogging platform with rich text editor, comment system, and content management. Features SEO optimization and social media integration.",
      image: "/api/placeholder/600/400",
      technologies: ["React.js", "Node.js", "MongoDB", "Express.js", "Markdown", "SEO"],
      features: ["Rich text editor", "Comment system", "SEO optimization", "Social sharing", "Content management"],
      liveUrl: "https://example-blog.com",
      githubUrl: "https://github.com/yourusername/blog-platform",
      category: "Full Stack",
      status: "In Progress",
      teamSize: "Solo",
      duration: "Ongoing"
    },
    {
      id: 6,
      title: "Data Analytics Dashboard",
      description: "An interactive dashboard for data visualization and analytics with real-time updates, custom charts, and comprehensive reporting features.",
      image: "/api/placeholder/600/400",
      technologies: ["React.js", "Node.js", "MongoDB", "Chart.js", "Express.js", "Aggregation"],
      features: ["Data visualization", "Real-time updates", "Custom reports", "Export functionality", "Analytics"],
      liveUrl: "https://example-analytics.com",
      githubUrl: "https://github.com/yourusername/analytics-dashboard",
      category: "Full Stack",
      status: "Completed",
      teamSize: "3 members",
      duration: "4 months"
    }
  ]

  const categories = ["All", "Full Stack", "Frontend", "Backend", "Mobile"]

  const getStatusColor = (status) => {
    switch (status) {
      case "Completed":
        return "bg-green-100 text-green-800"
      case "In Progress":
        return "bg-yellow-100 text-yellow-800"
      case "Planning":
        return "bg-blue-100 text-blue-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark-background pt-16 md:pt-0">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-secondary/10 dark:from-dark-background dark:to-dark-card section-padding">
        <div className="container-max">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-dark-text mb-6">
              My <span className="text-gradient">Projects</span>
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              A showcase of real-world projects demonstrating my expertise in MERN stack development, 
              CRUD applications, authentication systems, and API design.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="section-padding bg-white dark:bg-dark-card">
        <div className="container-max">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  category === "All"
                    ? "bg-primary text-white"
                    : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding bg-gray-50 dark:bg-dark-background">
        <div className="container-max">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={project.id} 
                className={`bg-white dark:bg-dark-card rounded-xl shadow-lg overflow-hidden card-hover transition-all duration-500 ${
                  hoveredProject === project.id ? 'scale-105 shadow-2xl' : ''
                }`}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                onClick={() => {
                  setViewCount(prev => ({
                    ...prev,
                    [project.id]: (prev[project.id] || 0) + 1
                  }))
                }}
              >
                {/* Project Image */}
                <div className="h-48 bg-gradient-to-br from-primary/10 to-secondary/10 dark:from-dark-background dark:to-dark-card flex items-center justify-center relative">
                  {/* Live Indicator */}
                  {project.liveUrl && (
                    <div className="absolute top-2 right-2 w-3 h-3 bg-green-500 rounded-full animate-pulse flex items-center justify-center">
                      <Eye className="text-white" size={12} />
                    </div>
                  )}
                  <Database className="text-primary mx-auto mb-2" size={48} />
                  <p className="text-primary font-medium">{project.title}</p>
                  
                  {/* View Counter */}
                  {viewCount[project.id] > 0 && (
                    <div className="absolute top-2 left-2 bg-primary text-white text-xs px-2 py-1 rounded-full animate-fade-in">
                      <TrendingUp className="inline mr-1" size={10} />
                      {viewCount[project.id]}
                    </div>
                  )}
                </div>

                {/* Project Content */}
                <div className="p-6">
                  {/* Header */}
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-dark-text">{project.title}</h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                      {project.status}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">{project.description}</p>

                  {/* Technologies */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-dark-text mb-2">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-primary/10 dark:bg-primary/20 text-primary text-xs rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 text-xs rounded-md">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Key Features */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-dark-text mb-2">Key Features</h4>
                    <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                      {project.features.slice(0, 2).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                          {feature}
                        </li>
                      ))}
                      {project.features.length > 2 && (
                        <li className="text-primary">+{project.features.length - 2} more</li>
                      )}
                    </ul>
                  </div>

                  {/* Project Meta */}
                  <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                    <div className="flex items-center">
                      <Users size={14} className="mr-1" />
                      {project.teamSize}
                    </div>
                    <div className="flex items-center">
                      <Calendar size={14} className="mr-1" />
                      {project.duration}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-3">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-gray-900 dark:bg-gray-800 hover:bg-gray-800 dark:hover:bg-gray-700 text-white py-2 px-4 rounded-lg transition-colors flex items-center justify-center"
                    >
                      <Github size={16} className="mr-2" />
                      Code
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-primary hover:bg-secondary text-white py-2 px-4 rounded-lg transition-colors flex items-center justify-center"
                    >
                      <ExternalLink size={16} className="mr-2" />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-white dark:bg-dark-card">
        <div className="container-max">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Interested in <span className="text-gradient">Collaboration?</span>
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>
            <a
              href="/contact"
              className="btn-primary inline-flex items-center"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Projects
