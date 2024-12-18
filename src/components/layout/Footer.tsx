import React from 'react';
import { NavItem, SocialLink } from '../../types';
import Logo from '../common/Logo';

const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' }
];

const socialLinks: SocialLink[] = [
  { platform: 'GitHub', url: 'https://github.com', icon: 'github' },
  { platform: 'LinkedIn', url: 'https://linkedin.com', icon: 'linkedin' },
  { platform: 'Twitter', url: 'https://twitter.com', icon: 'twitter' }
];

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <Logo />
            <p className="mt-4">Creating beautiful digital experiences with modern web technologies.</p>
          </div>
          <div>
            <h3 className="font-bold mb-4">Navigation</h3>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="hover:text-white transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Connect</h3>
            <ul className="space-y-2">
              {socialLinks.map((link) => (
                <li key={link.platform}>
                  <a 
                    href={link.url}
                    className="hover:text-white transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.platform}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Contact</h3>
            <p>contact@example.com</p>
            <p className="mt-2">+1 (555) 123-4567</p>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;