import React from 'react';
import { motion } from 'framer-motion';

const GlassCard = ({ children, className = "" }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`glass-card p-8 md:p-12 w-full max-w-md mx-auto text-center ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default GlassCard;
