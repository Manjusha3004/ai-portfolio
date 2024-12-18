import React from 'react';
import Navigation from './Navigation';
import Logo from '../common/Logo';

const Header = () => {
  return (
    <header className="fixed w-full top-0 z-50 bg-opacity-90 bg-gray-900 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Logo />
          <Navigation />
        </div>
      </div>
    </header>
  );
};

export default Header;