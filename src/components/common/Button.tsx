import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
}

const Button = ({ children, href, onClick, variant = 'primary' }: ButtonProps) => {
  const baseClasses = "inline-flex items-center px-6 py-3 rounded-lg font-medium transition-colors";
  const variantClasses = {
    primary: "bg-cyan-500 hover:bg-cyan-600 text-white",
    secondary: "bg-gray-800 hover:bg-gray-700 text-white"
  };

  const classes = `${baseClasses} ${variantClasses[variant]}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
};

export default Button;