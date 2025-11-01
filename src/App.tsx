import React from 'react';
import { Hero } from './components/Hero';
import { MyProjects } from './components/MyProjects';
import { AboutMe } from './components/AboutMe';

export default function App() {
  return (
    <div className="bg-black min-h-screen">
      <Hero />
      <MyProjects />
      <AboutMe />
    </div>
  );
}
