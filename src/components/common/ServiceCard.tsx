import React from 'react';
import { Service } from '../../types';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  service: Service;
}

const ServiceCard = ({ service }: ServiceCardProps) => {
  return (
    <div className="bg-gray-800 p-8 rounded-lg">
      <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
      <p className="text-gray-300 mb-6">{service.description}</p>
      <a href="#" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors">
        Learn More <ArrowRight className="w-4 h-4 ml-2" />
      </a>
    </div>
  );
};

export default ServiceCard;