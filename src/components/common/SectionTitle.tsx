import React from 'react';

interface SectionTitleProps {
  children: React.ReactNode;
}

const SectionTitle = ({ children }: SectionTitleProps) => {
  return (
    <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
      {children}
    </h2>
  );
};

export default SectionTitle;