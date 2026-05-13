import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import GlassCard from '../components/GlassCard';
import { questions } from '../data/questions';

const Screen5_Questions = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answer, setAnswer] = useState('');
  const [savedAnswers, setSavedAnswers] = useState([]);

  // Load existing answers on mount
  useEffect(() => {
    const existing = localStorage.getItem('birthday-answers');
    if (existing) {
      setSavedAnswers(JSON.parse(existing));
    }
  }, []);

  const handleNext = () => {
    if (!answer.trim()) return;

    const currentQuestion = questions[currentIndex];
    const newAnswers = [
      ...savedAnswers,
      { questionId: currentQuestion.id, question: currentQuestion.text, answer, date: new Date().toISOString() }
    ];

    setSavedAnswers(newAnswers);
    localStorage.setItem('birthday-answers', JSON.stringify(newAnswers));
    setAnswer('');

    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      navigate('/slideshow');
    }
  };

  return (
    <div 
      className="min-h-screen relative flex items-center justify-center p-4 bg-cover bg-top md:bg-center"
      style={{ backgroundImage: `url('/images/screen5-bg.jpg')` }}
    >
      <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]"></div>

      <div className="relative z-10 w-full max-w-md">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
          >
            <GlassCard>
              <div className="mb-8">
                <span className="text-romantic-pink text-sm uppercase tracking-widest font-semibold">
                  Question {currentIndex + 1} of {questions.length}
                </span>
              </div>
              
              <h2 className="text-2xl md:text-3xl font-serif text-romantic-light mb-8 leading-snug">
                {questions[currentIndex].text}
              </h2>

              <textarea
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                placeholder="Type your answer here..."
                className="w-full h-32 bg-white/5 border border-white/20 rounded-xl p-4 text-romantic-light placeholder-white/40 focus:outline-none focus:border-romantic-pink resize-none transition-colors"
              />

              <button
                onClick={handleNext}
                disabled={!answer.trim()}
                className={`mt-6 w-full py-3 rounded-xl tracking-wider transition-all duration-300 ${
                  answer.trim() 
                    ? 'bg-romantic-pink text-black hover:bg-white' 
                    : 'bg-white/10 text-white/30 cursor-not-allowed'
                }`}
              >
                {currentIndex === questions.length - 1 ? 'Finish 💛' : 'Next'}
              </button>
            </GlassCard>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Screen5_Questions;
