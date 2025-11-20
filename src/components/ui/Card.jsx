import React from 'react';
import { clsx } from 'clsx';

const Card = ({ 
  children, 
  className = '',
  hover = false,
  padding = 'md',
  ...props 
}) => {
  const baseStyles = 'bg-white rounded-xl border border-slate-200 transition-all duration-200';
  
  const hoverStyles = hover ? 'hover:shadow-lg hover:border-emerald-200 cursor-pointer' : 'shadow-sm';
  
  const paddingStyles = {
    none: '',
    sm: 'p-3',
    md: 'p-4',
    lg: 'p-6',
  };
  
  return (
    <div
      className={clsx(
        baseStyles,
        hoverStyles,
        paddingStyles[padding],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
