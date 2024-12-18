import React from 'react';
import Header from './components/layout/Header';
import Hero from './components/sections/Hero';
import Services from './components/sections/Services';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';

function App() {
  return (
    <div className="bg-gray-900 text-white">
      <Header />
      <main>
        <Hero />
        <Services />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;