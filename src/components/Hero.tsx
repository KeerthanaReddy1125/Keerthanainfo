import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
      <section
          id="home"
          className="relative min-h-screen flex items-center"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=2070')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
      >
        <div className="container mx-auto px-6 py-20">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0 text-white z-10">
              <h1 className="text-5xl md:text-6xl font-bold mb-4">
                Hello 👋<br />
                Keerthana here!
                <span className="text-blue-400">.</span>
              </h1>
              <h2 className="text-2xl md:text-3xl text-gray-300 mb-6">
                Software Engineer | Full Stack Developer

              </h2>
              <p className="text-gray-300 mb-8 text-lg">
                "Where Problem-Solving  🧩 Becomes an Art Form 💻."<br/>
                With 3 years of passion for crafting scalable applications, with the latest technologies to solve real-world problems and drive meaningful innovation.
              </p>
              <div className="flex space-x-4">
                <a
                    href="#projects"
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg flex items-center hover:bg-blue-700 transition-colors"
                >
                  View My Work
                  <ArrowRight className="ml-2" size={20} />
                </a>
                <a
                    href="#contact"
                    className="border-2 border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-gray-900 transition-colors"
                >
                  Contact Me
                </a>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-blue-600 rounded-lg transform rotate-3"></div>
                <img
                    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800"
                    alt="Coding workspace"
                    className="relative rounded-lg shadow-2xl transform -rotate-3 transition-transform hover:rotate-0"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default Hero;