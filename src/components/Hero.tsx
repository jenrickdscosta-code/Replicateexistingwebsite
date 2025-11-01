import React from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  return (
    <section className="relative min-h-screen bg-black flex items-center justify-center px-8 py-20">
      {/* Background Timeline Image */}
      <div className="absolute top-8 left-0 right-0 h-48 opacity-60">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMGVkaXRpbmclMjB0aW1lbGluZXxlbnwxfHx8fDE3NjE5MTUzODB8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Video editing timeline"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center">
        <h1 className="text-white text-[120px] tracking-[0.2em] mb-8 uppercase" style={{ fontWeight: 900, letterSpacing: '0.3em' }}>
          PORTFOLIO
        </h1>
        
        <div className="flex items-center justify-center gap-8 mb-12">
          <div className="h-1 w-48 bg-white"></div>
          <h2 className="text-orange-500 text-[60px]" style={{ fontWeight: 800 }}>
            Jenrick Dsouza
          </h2>
          <div className="h-1 w-48 bg-white"></div>
        </div>

        <p className="text-white text-[48px] tracking-[0.4em] uppercase" style={{ fontWeight: 300 }}>
          Video Editor
        </p>
      </div>
    </section>
  );
}
