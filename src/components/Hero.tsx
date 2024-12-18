import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white flex items-center">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Frontend Developer
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Passionate about creating beautiful, responsive, and user-friendly web applications
          </p>
          <div className="flex gap-4">
            <a href="https://github.com" className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com" className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:your.email@example.com" className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;