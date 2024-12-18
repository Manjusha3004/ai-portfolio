import React from 'react';
import Button from '../common/Button';
import SectionTitle from '../common/SectionTitle';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 text-center">
        <SectionTitle>Let's Work Together</SectionTitle>
        <p className="text-gray-300 max-w-2xl mx-auto mb-8">
          Have a project in mind? Let's create something amazing together. 
          I'm always open to discussing new projects and creative ideas.
        </p>
        <Button href="mailto:contact@example.com">
          Get in Touch
        </Button>
      </div>
    </section>
  );
};

export default Contact;