import React from 'react';

const skillCategories = [
  {
    title: "Frontend",
    skills: ["React", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"]
  },
  {
    title: "Tools & Others",
    skills: ["Git", "VS Code", "Webpack", "RESTful APIs", "Responsive Design"]
  }
];

const Skills = () => {
  return (
    <div className="bg-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Skills</h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, idx) => (
                  <span 
                    key={idx}
                    className="px-4 py-2 bg-gray-200 rounded-full text-gray-700 text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;