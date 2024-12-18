import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    title: "Frontend Developer",
    company: "Company Name",
    location: "Location",
    period: "2020 - Present",
    description: [
      "Developed responsive web applications using React and TypeScript",
      "Implemented modern UI/UX designs using Tailwind CSS",
      "Collaborated with backend teams to integrate RESTful APIs",
      "Improved application performance and loading times"
    ]
  },
  // Add more experiences based on the CV
];

const Experience = () => {
  return (
    <div className="bg-gray-100 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Experience</h2>
        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">{exp.title}</h3>
              <div className="text-gray-600 mb-4">
                <p className="font-medium">{exp.company}</p>
                <div className="flex gap-4 text-sm mt-1">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {exp.period}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {exp.location}
                  </span>
                </div>
              </div>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                {exp.description.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;