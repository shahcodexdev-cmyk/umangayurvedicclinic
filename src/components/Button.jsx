import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ children, variant = 'primary', className = '', href, to, onClick, ...props }) => {
  const baseClasses = 'inline-flex items-center justify-center px-6 py-3 font-medium rounded-md transition-colors duration-300';
  
  const variants = {
    primary: 'bg-primary text-white hover:bg-primary-light shadow-sm',
    secondary: 'bg-secondary text-white hover:bg-secondary-light shadow-sm',
    outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white',
    ghost: 'text-primary hover:bg-muted'
  };

  const classes = `${baseClasses} ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes} {...props}>
      {children}
    </button>
  );
};

export default Button;
