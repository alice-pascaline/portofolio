import { Database, Globe, Server, Code, GitBranch, Cloud, Shield, Cpu, Terminal, Star, TrendingUp, Zap, Award } from 'lucide-react'

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Globe className="text-primary" size={32} />,
      skills: [
        { name: "React.js", level: 90, description: "Expert in React hooks, context, and modern patterns" },
        { name: "JavaScript/ES6+", level: 85, description: "Strong understanding of modern JavaScript" },
        { name: "HTML5 & CSS3", level: 90, description: "Semantic HTML and modern CSS techniques" },
        { name: "TailwindCSS", level: 85, description: "Utility-first CSS framework expertise" },
        { name: "Redux/State Management", level: 75, description: "Global state management solutions" }
      ]
    },
    {
      title: "Backend Development",
      icon: <Server className="text-primary" size={32} />,
      skills: [
        { name: "Node.js", level: 85, description: "Server-side JavaScript development" },
        { name: "Express.js", level: 90, description: "RESTful API development and middleware" },
        { name: "MongoDB", level: 80, description: "NoSQL database design and optimization" },
        { name: "REST APIs", level: 85, description: "Designing and implementing RESTful services" },
        { name: "Authentication", level: 75, description: "JWT, OAuth, and security best practices" }
      ]
    },
    {
      title: "Database & Tools",
      icon: <Database className="text-primary" size={32} />,
      skills: [
        { name: "MongoDB", level: 80, description: "Schema design, aggregation, and indexing" },
        { name: "MySQL/PostgreSQL", level: 70, description: "Relational database management" },
        { name: "Git & GitHub", level: 85, description: "Version control and collaborative development" },
        { name: "Docker", level: 65, description: "Containerization and deployment" },
        { name: "Postman", level: 80, description: "API testing and documentation" }
      ]
    },
    {
      title: "Development Tools",
      icon: <Terminal className="text-primary" size={32} />,
      skills: [
        { name: "VS Code", level: 90, description: "Advanced editor configuration and extensions" },
        { name: "Chrome DevTools", level: 85, description: "Debugging and performance optimization" },
        { name: "Webpack/Vite", level: 70, description: "Build tools and bundling" },
        { name: "NPM/Yarn", level: 80, description: "Package management and scripts" },
        { name: "ESLint/Prettier", level: 85, description: "Code quality and formatting" }
      ]
    }
  ]

  const additionalSkills = [
    { icon: <Cloud size={20} />, name: "Cloud Services (AWS, Vercel)" },
    { icon: <Shield size={20} />, name: "Security Best Practices" },
    { icon: <Cpu size={20} />, name: "Performance Optimization" },
    { icon: <GitBranch size={20} />, name: "Agile Methodologies" },
    { icon: <Code size={20} />, name: "Testing (Jest, Cypress)" },
    { icon: <Terminal size={20} />, name: "Command Line Tools" }
  ]

  const getSkillColor = (level) => {
    if (level >= 80) return 'bg-primary'
    if (level >= 70) return 'bg-secondary'
    if (level >= 60) return 'bg-accent'
    return 'bg-gray-400'
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark-background pt-16 md:pt-0">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-secondary/10 dark:from-dark-background dark:to-dark-card section-padding">
        <div className="container-max">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-dark-text mb-6">
              Technical <span className="text-gradient">Skills</span>
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              Comprehensive expertise in modern web development technologies with a focus on 
              the MERN stack and related tools for building scalable, efficient applications.
            </p>
          </div>
        </div>
      </section>

      {/* Main Skills Grid */}
      <section className="section-padding bg-white dark:bg-dark-card">
        <div className="container-max">
          <div className="grid md:grid-cols-2 gap-12">
            {skillCategories.map((category, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-primary/10 dark:bg-primary/20 rounded-xl flex items-center justify-center mr-4">
                    {category.icon}
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-dark-text">{category.title}</h2>
                </div>
                
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="group bg-gray-50 dark:bg-dark-background p-4 rounded-lg hover:shadow-lg transition-all duration-300 border border-transparent hover:border-primary/20">
                      <div className="flex justify-between items-center mb-2">
                        <div className="flex items-center space-x-2">
                          <h3 className="font-semibold text-gray-900 dark:text-dark-text group-hover:text-primary transition-colors">{skill.name}</h3>
                          {skill.level >= 85 && (
                            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              <Star className="text-accent" size={14} />
                            </div>
                          )}
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="text-sm text-primary font-medium">{skill.level}%</span>
                          {skill.level >= 90 && (
                            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              <Award className="text-accent" size={14} />
                            </div>
                          )}
                        </div>
                      </div>
                      
                      {/* Enhanced Progress Bar */}
                      <div className="relative">
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-2">
                          <div 
                            className={`h-2 rounded-full transition-all duration-1000 group-hover:h-3 ${getSkillColor(skill.level)}`}
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                        <div className="absolute -top-1 right-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <TrendingUp className="text-primary" size={12} />
                        </div>
                      </div>
                      
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{skill.description}</p>
                      
                      {/* Skill Level Indicator */}
                      <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                        <Zap size={10} className="mr-1" />
                        <span>
                          {skill.level >= 90 ? 'Expert' : skill.level >= 75 ? 'Advanced' : skill.level >= 60 ? 'Intermediate' : 'Beginner'}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Skills */}
      <section className="section-padding bg-gray-50 dark:bg-dark-background">
        <div className="container-max">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Additional <span className="text-gradient">Expertise</span>
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {additionalSkills.map((skill, index) => (
              <div key={index} className="group bg-white dark:bg-dark-card p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center cursor-default">
                <div className="w-12 h-12 bg-primary/10 dark:bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-3 text-primary group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                  {skill.icon}
                </div>
                <p className="text-sm font-medium text-gray-900 dark:text-dark-text group-hover:text-primary transition-colors">{skill.name}</p>
                <div className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-8 h-0.5 bg-accent mx-auto rounded-full"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Path */}
      <section className="section-padding bg-white dark:bg-dark-card">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Continuous <span className="text-gradient">Learning</span>
            </h2>
            
            <div className="bg-primary/10 dark:bg-primary/20 p-8 rounded-2xl">
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                Technology is constantly evolving, and I'm committed to staying current with the latest 
                developments in web development. I regularly explore new frameworks, tools, and best practices 
                to enhance my skills and deliver cutting-edge solutions.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="bg-white dark:bg-dark-card p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-dark-text mb-2">Currently Learning</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Advanced React patterns, GraphQL, Next.js</p>
                </div>
                <div className="bg-white dark:bg-dark-card p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-dark-text mb-2">Interested In</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">TypeScript, Web3, Machine Learning basics</p>
                </div>
                <div className="bg-white dark:bg-dark-card p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-dark-text mb-2">Community</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Active contributor to open-source projects</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Skills
