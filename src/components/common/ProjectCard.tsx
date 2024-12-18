import React from 'react';
import { Project } from '../../types';
import { ArrowRight } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="bg-gray-900 rounded-lg overflow-hidden">
      <img 
        src={project.image} 
        alt={project.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
        <p className="text-gray-300 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <span 
              key={tag}
              className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <a 
          href={project.link}
          className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
        >
          View Details <ArrowRight className="w-4 h-4 ml-2" />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;