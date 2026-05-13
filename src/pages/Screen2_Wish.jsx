import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import GlassCard from '../components/GlassCard';

const Screen2_Wish = () => {
  const navigate = useNavigate();
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    // Generate random floating hearts
    const newHearts = Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100 + '%',
      animationDuration: 3 + Math.random() * 5 + 's',
      animationDelay: Math.random() * 5 + 's',
      size: 10 + Math.random() * 20 + 'px'
    }));
    setHearts(newHearts);
  }, []);

  return (
    <div
      className="min-h-screen relative overflow-hidden bg-cover bg-center bg-no-repeat flex items-center justify-center px-6"
      style={{ backgroundImage: `url('/images/screen2-bg.jpg')` }}
    >
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Floating Hearts */}
      {hearts.map(heart => (
        <motion.div
          key={heart.id}
          className="absolute bottom-0 text-romantic-pink"
          initial={{ y: '100vh', opacity: 0 }}
          animate={{ y: '-100vh', opacity: [0, 1, 0] }}
          transition={{
            duration: parseFloat(heart.animationDuration),
            delay: parseFloat(heart.animationDelay),
            repeat: Infinity,
            ease: "linear"
          }}
          style={{ left: heart.left, fontSize: heart.size }}
        >
          ❤️
        </motion.div>
      ))}

      <div className="relative z-10 w-full max-w-lg">
        <GlassCard className="bg-black/30 backdrop-blur-lg border-romantic-gold/30">
          <motion.h1
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="text-4xl md:text-6xl font-serif font-bold text-romantic-gold text-glow mb-8"
          >
            Happy Birthday Nani 💛
          </motion.h1>

          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
            onClick={() => navigate('/letter')}
            className="mt-8 px-10 py-3 bg-romantic-gold text-black rounded-full text-lg font-semibold shadow-xl hover:scale-105 transition-all duration-300"
          >
            Continue 💛
          </motion.button>
        </GlassCard>
      </div>
    </div>
  );
};

export default Screen2_Wish;
