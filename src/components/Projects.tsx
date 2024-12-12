import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'E-commerce Platform',
      description: 'A full-stack e-commerce solution built Java, Spring Boot, RESTful APIs, Git, Python, Scikit-learn, IntelliJ IDEA, MySQL .',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800',
      technologies: ['Java', 'Node.js', 'MySQL', 'React', 'Python', 'Git',],
      githubUrl: 'https://github.com/KeerthanaReddy1125/E-commerce',

    },
    {
      title: 'Zomato Smart Suggestions',
      description: 'An AI-powered restaurant recommendation system using machine learning algorithms and user preferences.',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800',
      technologies: ['Python', 'TensorFlow', 'NumPy', 'Pandas', 'PyTorch', 'MySQL'],
      githubUrl: 'https://github.com/KeerthanaReddy1125/Zomato-Smart-Suggestions',

    },
    {
      title: 'Forestry Management Platform',
      description: 'A comprehensive Web- based forest monitoring and management system.',
      image: 'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&q=80&w=800',
      technologies: ['Java', 'HTML', 'CSS', 'MySQL'],
      githubUrl: 'https://github.com/KeerthanaReddy1125/Forestry-Management-Platform',

    },
    {
      title: 'AI Chat Box',
      description: 'An intelligent data visualization tool that automatically generates a chatbox.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
      technologies: ['Python', 'OpenAL', 'LangChain'],
      githubUrl: 'https://github.com/KeerthanaReddy1125/Chatbot-with-OpenAI-and-LangChain',

    },
  ];

  return (
      <section id="projects" className="py-20 bg-gradient-to-b from-blue-50 via-blue-100 to-blue-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
                <div
                    key={index}
                    className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-blue-100"
                >
                  <div className="relative overflow-hidden group">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 object-cover transform transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-gray-800">{project.title}</h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                          <span
                              key={techIndex}
                              className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium border border-blue-100"
                          >
                      {tech}
                    </span>
                      ))}
                    </div>
                    <div className="flex space-x-4">
                      <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
                      >
                        <Github size={20} className="mr-1" />
                        Code
                      </a>
                      <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
                      >

                      </a>
                    </div>
                  </div>
                </div>
            ))}
          </div>
        </div>
      </section>
  );
};

export default Projects;