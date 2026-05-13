import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { letterContent } from '../content/letter';

const Screen3_Letter = () => {
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen relative flex items-center justify-center p-4 py-12 bg-cover bg-top md:bg-center"
      style={{ backgroundImage: `url('/images/screen3-bg.jpg')` }}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        className="relative z-10 w-full max-w-2xl"
      >
        <div className="bg-[#fdfbf7] text-[#2c2c2c] p-8 md:p-14 rounded-sm shadow-2xl relative"
          style={{ backgroundImage: 'repeating-linear-gradient(transparent, transparent 31px, #e5e5e5 31px, #e5e5e5 32px)', lineHeight: '32px' }}>

          <div className="font-serif text-lg md:text-xl whitespace-pre-wrap italic">
            {letterContent}
          </div>

          <div className="mt-12 flex justify-end">
            <button
              onClick={() => navigate('/video')}
              className="px-6 py-2 bg-romantic-dark text-romantic-light rounded-full text-sm tracking-wider hover:bg-black transition-colors shadow-lg"
            >
              Next 💛
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Screen3_Letter;
