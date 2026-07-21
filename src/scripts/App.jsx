import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Recipe from './Recipe';

export default function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:recipeId/recipe" element={<Recipe />} />
      </Routes>
      <Footer />
    </div>
  );
}
