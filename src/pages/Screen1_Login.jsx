import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import GlassCard from '../components/GlassCard';
import { config } from '../content/config';
import { Heart } from 'lucide-react';

const Screen1_Login = () => {
  const [answer, setAnswer] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (answer.trim().toLowerCase() === config.secretAnswer.toLowerCase()) {
      navigate('/wish');
    } else {
      setError(true);
      setTimeout(() => setError(false), 800);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <motion.div
        animate={error ? { x: [-10, 10, -10, 10, 0] } : {}}
        transition={{ duration: 0.4 }}
        className="w-full max-w-md"
      >
        <GlassCard>
          <div className="flex justify-center mb-6">
            <Heart className="text-romantic-pink w-12 h-12 animate-pulse" fill="currentColor" />
          </div>
          <h1 className="text-2xl md:text-3xl font-serif font-bold text-romantic-light mb-8">
            {config.secretQuestion}
          </h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="text"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              placeholder="Your answer..."
              className="w-full bg-white/5 border border-romantic-pink/30 rounded-xl px-4 py-3 text-center text-romantic-light placeholder-white/30 focus:outline-none focus:border-romantic-pink transition-colors"
            />
            {error && (
              <p className="text-romantic-pink text-sm mt-2">
                Oops, that's not it! Try again cutie 💛
              </p>
            )}
            <button
              type="submit"
              className="w-full bg-romantic-pink/20 hover:bg-romantic-pink/30 text-romantic-pink border border-romantic-pink/50 rounded-xl py-3 font-medium transition-all duration-300"
            >
              Enter
            </button>
          </form>
        </GlassCard>
      </motion.div>
    </div>
  );
};

export default Screen1_Login;
