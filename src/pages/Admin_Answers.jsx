import React, { useEffect, useState } from 'react';
import GlassCard from '../components/GlassCard';

const Admin_Answers = () => {
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    const data = localStorage.getItem('birthday-answers');
    if (data) {
      setAnswers(JSON.parse(data));
    }
  }, []);

  const clearAnswers = () => {
    if (window.confirm("Are you sure you want to delete all saved answers?")) {
      localStorage.removeItem('birthday-answers');
      setAnswers([]);
    }
  };

  return (
    <div className="min-h-screen bg-[#1a1014] p-6 md:p-12 text-romantic-light">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-3xl font-serif text-romantic-gold">Saved Answers</h1>
          <button
            onClick={clearAnswers}
            className="px-4 py-2 bg-red-500/20 text-red-300 rounded hover:bg-red-500/40 transition-colors"
          >
            Clear Data
          </button>
        </div>

        {answers.length === 0 ? (
          <GlassCard className="text-center">
            <p className="text-white/60">No answers saved yet. Ask him to fill out the surprise first!</p>
          </GlassCard>
        ) : (
          <div className="space-y-6">
            {answers.map((item, index) => (
              <GlassCard key={index} className="!text-left !max-w-none">
                <p className="text-romantic-pink text-sm mb-2 opacity-80">
                  {new Date(item.date).toLocaleString()}
                </p>
                <h3 className="text-xl font-medium mb-4 text-white">Q: {item.question}</h3>
                <div className="bg-black/30 p-4 rounded-xl border border-white/10">
                  <p className="text-white whitespace-pre-wrap">{item.answer}</p>
                </div>
              </GlassCard>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Admin_Answers;
