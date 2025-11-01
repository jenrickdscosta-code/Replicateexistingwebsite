import React from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function AboutMe() {
  return (
    <section className="bg-black px-12 py-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text */}
          <div>
            <h2 className="text-white text-[100px] uppercase mb-12" style={{ fontWeight: 900, letterSpacing: '0.05em' }}>
              ABOUT ME
            </h2>
            
            <p className="text-white text-[18px] leading-relaxed mb-12" style={{ fontWeight: 700 }}>
              Hi, my name is Jenrick — I'm a passionate video editor and content creator who loves turning ideas into powerful visuals. With a strong sense of rhythm, storytelling, and style, I create cinematic edits that connect emotionally. Through my channel Jenrick Vibes, I share inspiring and creative visual experiences.
            </p>

            <div className="h-1 w-full bg-gradient-to-r from-orange-500 to-transparent"></div>
          </div>

          {/* Right Column - Images Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2 relative aspect-[16/9] bg-gray-900 rounded-lg overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1679415354049-a6915b106654?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaG90b2dyYXBoZXIlMjB3b3JraW5nJTIwc3R1ZGlvfGVufDF8fHx8MTc2MjAwODA4MHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Studio work"
                className="w-full h-full object-cover grayscale"
              />
              <div className="absolute top-0 right-0 w-24 h-8 bg-orange-500"></div>
            </div>
            
            <div className="relative aspect-square bg-gray-900 rounded-lg overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1603400938371-d030ad03505b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMGVkaXRvciUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NjE5ODc4NTF8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Editing workspace"
                className="w-full h-full object-cover grayscale"
              />
            </div>
            
            <div className="relative aspect-square bg-gray-900 rounded-lg overflow-hidden border-r-8 border-orange-500">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMGVkaXRpbmclMjB0aW1lbGluZXxlbnwxfHx8fDE3NjE5MTUzODB8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Camera work"
                className="w-full h-full object-cover grayscale"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
