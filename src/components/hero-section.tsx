import React from 'react';
import { Button } from "@heroui/react";
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const HeroSection: React.FC = () => {
  return (
    <div className="relative h-[90vh] overflow-hidden">
      <img 
        src="https://img.heroui.chat/image/ai?w=1920&h=1080&u=pulsarsound-party" 
        alt="PULSARSOUND Event" 
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      <div className="absolute inset-0 hero-gradient flex flex-col justify-end items-center text-center p-8 md:p-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">PULSAR<span className="text-primary">SOUND</span></h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            El sello de música electrónica líder en San Pedro Sula, Honduras
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              as={Link}
              to="/events"
              color="primary"
              size="lg"
              className="font-medium"
            >
              Próximos Eventos
            </Button>
            <Button
              as={Link}
              to="/gallery"
              variant="flat"
              color="default"
              size="lg"
              className="font-medium"
            >
              Ver Galería
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;