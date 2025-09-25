import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const CustomCard: React.FC<CardProps> = ({ children, className = '' }) => {
  return (
    <div className={`border rounded-lg shadow-md ${className}`}>
      {children}
    </div>
  );
};

const CustomCardHeader: React.FC<CardProps> = ({ children, className = '' }) => {
  return (
    <div className={`p-4 border-b ${className}`}>
      {children}
    </div>
  );
};

const CustomCardTitle: React.FC<CardProps> = ({ children, className = '' }) => {
  return (
    <h2 className={`text-xl font-semibold ${className}`}>
      {children}
    </h2>
  );
};

const CustomCardContent: React.FC<CardProps> = ({ children, className = '' }) => {
  return (
    <div className={`p-4 ${className}`}>
      {children}
    </div>
  );
};

export { 
  CustomCard as Card, 
  CustomCardHeader as CardHeader, 
  CustomCardTitle as CardTitle, 
  CustomCardContent as CardContent 
};