import React from 'react';
import { Service } from '../../types';
import ServiceCard from '../common/ServiceCard';
import SectionTitle from '../common/SectionTitle';

const services: Service[] = [
  {
    title: 'Web Design',
    description: 'Creating beautiful, intuitive interfaces that engage users and drive results',
    icon: 'palette'
  },
  {
    title: 'Development',
    description: 'Building fast, responsive websites using modern web technologies',
    icon: 'code'
  },
  {
    title: 'Branding',
    description: 'Developing strong brand identities that resonate with your audience',
    icon: 'brush'
  },
  {
    title: 'Marketing',
    description: 'Implementing effective digital marketing strategies for growth',
    icon: 'trending-up'
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <SectionTitle>Services</SectionTitle>
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;