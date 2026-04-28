import { useState } from 'react'
import { Code, Database, Globe, Server, Target, Users, Award, BookOpen, Rocket, Lightbulb, CheckCircle, Mail, Phone, MapPin, TrendingUp, Eye } from 'lucide-react'

const About = () => {
  const [hoveredHighlight, setHoveredHighlight] = useState(null)
  const [viewCount, setViewCount] = useState({})
  
  const highlights = [
    {
      icon: <Code className="text-primary" size={24} />,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and efficient code following industry best practices",
      stats: "95% Code Quality",
      features: ["ESLint", "Prettier", "TypeScript Ready"]
    },
    {
      icon: <Database className="text-primary" size={24} />,
      title: "Database Design",
      description: "Designing robust database schemas and optimizing data flow for performance",
      stats: "50+ Databases",
      features: ["MongoDB", "PostgreSQL", "Redis"]
    },
    {
      icon: <Globe className="text-primary" size={24} />,
      title: "Responsive Design",
      description: "Creating beautiful, responsive interfaces that work seamlessly across all devices",
      stats: "100% Mobile-First",
      features: ["TailwindCSS", "Progressive Web App", "Cross-Browser"]
    },
    {
      icon: <Server className="text-primary" size={24} />,
      title: "API Development",
      description: "Building RESTful APIs with proper authentication, validation, and error handling",
      stats: "100+ APIs Built",
      features: ["RESTful", "GraphQL", "WebSocket"]
    },
    {
      icon: <Target className="text-primary" size={24} />,
      title: "Problem Solving",
      description: "Approaching complex challenges with analytical thinking and creative solutions",
      stats: "200+ Problems Solved",
      features: ["Algorithm Design", "System Architecture", "Debugging"]
    },
    {
      icon: <Users className="text-primary" size={24} />,
      title: "Team Collaboration",
      description: "Working effectively in team environments using agile methodologies",
      stats: "15+ Teams",
      features: ["Agile/Scrum", "Code Reviews", "Mentoring"]
    }
  ]

  const timeline = [
    {
      year: "2023 - Present",
      title: "Full Stack Developer",
      company: "Tech Company",
      description: "Developing and maintaining web applications using MERN stack, implementing new features, and optimizing performance."
    },
    {
      year: "2021 - 2023",
      title: "Frontend Developer",
      company: "Digital Agency",
      description: "Creating responsive user interfaces and interactive web experiences using React.js and modern CSS frameworks."
    },
    {
      year: "2020 - 2021",
      title: "Junior Developer",
      company: "Startup Inc",
      description: "Assisted in developing web applications, gained experience in full-stack development and agile workflows."
    },
    {
      year: "2019 - 2020",
      title: "Web Development Bootcamp",
      company: "Tech Academy",
      description: "Intensive training in full-stack web development, focusing on JavaScript, React, Node.js, and database management."
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark-background pt-16 md:pt-0">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-secondary/10 dark:from-dark-background dark:to-dark-card section-padding">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-dark-text mb-6">
              About <span className="text-gradient">Me</span>
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
              Passionate MERN stack developer with a strong foundation in IT and a drive for creating 
              innovative web solutions. I thrive on turning complex problems into elegant, user-friendly applications.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-white dark:bg-dark-card">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              My <span className="text-gradient">Journey</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  My journey into web development began with a curiosity about how websites work and evolved 
                  into a passion for creating digital experiences that make a difference. With a strong background 
                  in IT fundamentals, I've developed expertise in building scalable, full-stack applications.
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  I specialize in the MERN stack and have experience working with various databases, APIs, 
                  and modern development tools. I'm committed to continuous learning and staying updated with 
                  the latest industry trends and best practices.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  My goal is to work on challenging projects that allow me to grow as a developer while 
                  contributing to meaningful solutions that help businesses and users achieve their objectives.
                </p>
              </div>
              
              <div className="bg-primary/10 dark:bg-primary/20 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-dark-text mb-6">Career Goals</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700 dark:text-gray-300">Become an expert in full-stack JavaScript development</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700 dark:text-gray-300">Lead development teams and mentor junior developers</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700 dark:text-gray-300">Contribute to open-source projects and tech community</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700 dark:text-gray-300">Build innovative products that solve real-world problems</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="section-padding bg-gray-50 dark:bg-dark-background">
        <div className="container-max">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            What I <span className="text-gradient">Bring</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => (
              <div 
                key={index} 
                className="group bg-white dark:bg-dark-card p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                onMouseEnter={() => setHoveredHighlight(index)}
                onMouseLeave={() => setHoveredHighlight(null)}
                onClick={() => setViewCount(prev => ({...prev, [index]: (prev[index] || 0) + 1}))}
              >
                <div className="relative">
                  <div className="w-12 h-12 bg-primary/10 dark:bg-primary/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    {highlight.icon}
                  </div>
                  <div className="absolute top-0 right-0 w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Award className="text-accent" size={16} />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-dark-text mb-3 group-hover:text-primary transition-colors">{highlight.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">{highlight.description}</p>
                
                {/* View Counter */}
                {viewCount[index] > 0 && (
                  <div className="absolute top-0 right-0 bg-primary text-white text-xs px-2 py-1 rounded-full animate-fade-in">
                    <TrendingUp className="inline mr-1" size={10} />
                    {viewCount[index]}
                  </div>
                )}
                
                {/* Features */}
                <div className="space-y-2">
                  <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Technologies</p>
                  <div className="flex flex-wrap gap-2">
                    {highlight.features.map((feature, featureIndex) => (
                      <span
                        key={featureIndex}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-md hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section-padding bg-white dark:bg-dark-card">
        <div className="container-max">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Professional <span className="text-gradient">Timeline</span>
          </h2>
          
          <div className="max-w-4xl mx-auto">
            {timeline.map((item, index) => (
              <div key={index} className="group flex flex-col md:flex-row gap-6 mb-8">
                <div className="md:w-1/4">
                  <div className="relative">
                    <span className="text-primary font-semibold group-hover:scale-105 transition-transform inline-block">{item.year}</span>
                    <div className="absolute -bottom-2 left-0 w-full h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                  </div>
                </div>
                <div className="md:w-3/4">
                  <div className="bg-gray-50 dark:bg-dark-background p-6 rounded-lg group-hover:shadow-lg transition-all duration-300 border border-transparent group-hover:border-primary/20">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-dark-text group-hover:text-primary transition-colors">{item.title}</h3>
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Rocket className="text-accent" size={20} />
                      </div>
                    </div>
                    <p className="text-primary font-medium mb-3">{item.company}</p>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">{item.description}</p>
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <BookOpen size={14} className="mr-2" />
                      <span>Key Achievements: Team Leadership, Project Delivery, Innovation</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
