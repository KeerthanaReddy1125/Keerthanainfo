import React from 'react';
import { Code2, Database, Layout, Settings } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: <Layout className="w-8 h-8 text-blue-600" />,
      skills: ['HTML', 'CSS', 'Bootstrap', 'React', 'Next.js','Redux','Angular'],
    },
    {
      title: 'Backend Development',
      icon: <Database className="w-8 h-8 text-green-600" />,
      skills: ['REST APIs','Spring Frameworks','Node.js', 'Python', 'MySQL', 'MongoDB', 'Redis'],
    },
    {
      title: 'Tools & Methods',
      icon: <Settings className="w-8 h-8 text-purple-600" />,
      skills: ['Git', 'Docker', 'CI/CD', 'Agile', 'Jest'],
    },
    {
      title: 'Languages',
      icon: <Code2 className="w-8 h-8 text-red-600" />,
      skills: ['Java','JavaScript', 'Python', 'JavaScript','TypeScript', 'SQL', 'HTML/CSS'],
    },
  ];

  return (
      <section id="skills" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Skills & Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, index) => (
                <div
                    key={index}
                    className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-center mb-4">
                    {category.icon}
                    <h3 className="text-xl font-bold ml-2">{category.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {category.skills.map((skill, skillIndex) => (
                        <li
                            key={skillIndex}
                            className="flex items-center text-gray-600"
                        >
                          <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                          {skill}
                        </li>
                    ))}
                  </ul>
                </div>
            ))}
          </div>
        </div>
      </section>
  );
};

export default Skills;