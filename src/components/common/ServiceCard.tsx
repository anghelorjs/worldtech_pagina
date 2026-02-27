import React from 'react';
import Button from './Button';

interface ServiceCardProps {
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description }) => {
  return (
    <div className="group relative p-6 bg-gray-900/50 border border-gray-800 rounded-2xl backdrop-blur-sm hover:bg-gray-800/50 transition-all duration-300 hover:scale-105">
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      <p className="text-gray-400 mb-6">{description}</p>
      <Button href="#contacto" variant="primary" className="text-sm">
        Comenzar Proyecto
      </Button>
    </div>
  );
};

export default ServiceCard;