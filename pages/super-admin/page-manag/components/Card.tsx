"use client"

import React from 'react';

interface CardProps {
  id: number;
  selectedCard: {
    id: number;
  } | null;
  handleCardClick: (id: number) => void;
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ 
  id, 
  selectedCard, 
  handleCardClick, 
  title, 
  description 
}) => {
  return (
    <div 
      className={`p-4 cursor-pointer transition-colors hover:bg-gray-50
        ${selectedCard?.id === id ? 'border-2 border-blue-500' : ''}`}
      onClick={() => handleCardClick(id)}
    >
      <h3 className="font-medium">{title}</h3>
      <p className="text-sm text-gray-600 mt-1">{description}</p>
    </div>
  );
};

export default Card;