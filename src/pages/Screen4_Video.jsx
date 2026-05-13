import React, { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Screen4_Video = () => {
  const navigate = useNavigate();
  const videoRef = useRef(null);

  useEffect(() => {
    // Attempt autoplay if browser allows
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log("Autoplay prevented. User interaction needed.", error);
      });
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#0f0f0f] flex flex-col items-center justify-center px-4 py-8 relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="w-full max-w-4xl rounded-2xl overflow-hidden shadow-2xl border border-white/10"
      >
        <video
          ref={videoRef}
          controls
          playsInline
          className="w-full max-h-[85vh] object-contain bg-black"
          onEnded={() => {
            // Optional auto-navigate when video ends
            // navigate('/questions');
          }}
        >
          <source src="/videos/memory-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 1 }}
        className="mt-8"
      >
        <button
          onClick={() => navigate('/questions')}
          className="px-8 py-3 bg-white/10 hover:bg-white/20 border border-white/30 rounded-full text-white tracking-widest uppercase text-sm transition-all duration-300"
        >
          Continue
        </button>
      </motion.div>
    </div>
  );
};

export default Screen4_Video;
