import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { finalMessages } from '../content/finalMessages';
import { Play, Pause } from 'lucide-react';

const Screen6_Slideshow = () => {
  const [index, setIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const audioRef = useRef(null);

  useEffect(() => {
    let timer;
    if (isPlaying && index < finalMessages.length - 1) {
      timer = setTimeout(() => {
        setIndex(prev => prev + 1);
      }, 5000); // 5 seconds per slide
    }
    return () => clearTimeout(timer);
  }, [index, isPlaying]);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current?.pause();
    } else {
      audioRef.current?.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div 
      className="min-h-screen relative flex flex-col items-center justify-center p-4 bg-cover bg-top md:bg-center overflow-hidden"
      style={{ backgroundImage: `url('/images/screen6-bg.jpg')` }}
    >
      {/* Reduced overlay opacity so the background photo shows clearly */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Romantic Audio Track */}
      <audio 
        ref={audioRef}
        src="https://www.bensound.com/bensound-music/bensound-love.mp3" 
        autoPlay 
        loop 
      />

      {/* Controls */}
      <div className="absolute top-6 right-6 z-20">
        <button 
          onClick={togglePlay}
          className="flex items-center justify-center w-12 h-12 bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-full border border-white/40 transition-all text-white"
        >
          {isPlaying ? <Pause size={24} /> : <Play size={24} className="ml-1" />}
        </button>
      </div>

      <div className="relative z-10 w-full max-w-3xl text-center px-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
            transition={{ duration: 2, ease: "easeInOut" }}
          >
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif text-white text-glow leading-relaxed">
              {finalMessages[index]}
            </h1>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Screen6_Slideshow;
