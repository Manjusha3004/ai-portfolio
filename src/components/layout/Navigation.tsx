import React from 'react';
import { NavItem } from '../../types';

const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' }
];

const Navigation = () => {
  return (
    <nav className="hidden md:block">
      <ul className="flex gap-8">
        {navItems.map((item) => (
          <li key={item.label}>
            <a 
              href={item.href}
              className="text-gray-300 hover:text-white transition-colors"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;