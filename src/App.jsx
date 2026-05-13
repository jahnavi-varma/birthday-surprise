import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Screen1_Login from './pages/Screen1_Login';
import Screen2_Wish from './pages/Screen2_Wish';
import Screen3_Letter from './pages/Screen3_Letter';
import Screen4_Video from './pages/Screen4_Video';
import Screen5_Questions from './pages/Screen5_Questions';
import Screen6_Slideshow from './pages/Screen6_Slideshow';
import Admin_Answers from './pages/Admin_Answers';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Screen1_Login />} />
      <Route path="/wish" element={<Screen2_Wish />} />
      <Route path="/letter" element={<Screen3_Letter />} />
      <Route path="/video" element={<Screen4_Video />} />
      <Route path="/questions" element={<Screen5_Questions />} />
      <Route path="/slideshow" element={<Screen6_Slideshow />} />
      <Route path="/admin" element={<Admin_Answers />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
