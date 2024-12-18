import React from 'react';
import { ArrowRight } from 'lucide-react';
import Button from '../common/Button';

const Hero = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="container mx-auto px-4 pt-32 pb-20">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              HELLO! I'M A WEB DESIGNER + DEVELOPER
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Crafting beautiful and functional digital experiences with modern web technologies
            </p>
            <Button href="#contact">
              Get in Touch <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-full overflow-hidden">
              <img 
                //src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
                src="/profile.jpg"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-gray-800 px-6 py-4 rounded-lg">
              <p className="text-sm text-gray-400">WHO I AM</p>
              <p className="text-xl font-bold">SENIOR DESIGNER</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;