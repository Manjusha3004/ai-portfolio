import React from 'react';
import { Project } from '../../types';
import ProjectCard from '../common/ProjectCard';
import SectionTitle from '../common/SectionTitle';

const projects: Project[] = [
  {
    title: 'E-commerce Platform',
    description: 'A modern e-commerce platform built with React and Node.js',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
    tags: ['React', 'Node.js', 'MongoDB'],
    link: '#'
  },
  {
    title: 'Portfolio Website',
    description: 'A minimalist portfolio website for a photographer',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8',
    tags: ['React', 'Tailwind CSS'],
    link: '#'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <SectionTitle>My Projects</SectionTitle>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;