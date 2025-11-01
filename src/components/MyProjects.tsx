import image_4842cadf5ed53022bd7216990e644840e29858f6 from 'figma:asset/4842cadf5ed53022bd7216990e644840e29858f6.png';
import image_0edb593ae8f10ba1e66f1ca71ec1ef88e351ccec from 'figma:asset/0edb593ae8f10ba1e66f1ca71ec1ef88e351ccec.png';
import React from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function MyProjects() {
  return (
    <section className="bg-black px-12 py-24">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h2 className="text-white text-[100px] uppercase mb-16" style={{ fontWeight: 900, letterSpacing: '0.1em' }}>
          MY PROJECT
        </h2>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Video Editing Software */}
          <div className="space-y-4">
            <div className="relative aspect-video bg-gray-900 rounded-lg overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1603400938371-d030ad03505b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMGVkaXRvciUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NjE5ODc4NTF8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Video editing software"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative aspect-video bg-gray-900 rounded-lg overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1625930669470-38c7ade6d96b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNlcnQlMjBjYXIlMjByb2FkfGVufDF8fHx8MTc2MjAwODA3OXww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Desert road scene"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Column - Mobile and Subscribe */}
          <div className="space-y-4">
            <div className="relative aspect-[4/3] bg-gray-900 rounded-lg overflow-hidden">
              <ImageWithFallback
                src={image_0edb593ae8f10ba1e66f1ca71ec1ef88e351ccec}
                alt="Mobile gaming"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Subscribe Section */}
            <a href="https://www.youtube.com/@jenrickdscosta" target="_blank" rel="noopener noreferrer" className="bg-black border-4 border-white rounded-lg p-8 relative block hover:border-orange-500 hover:scale-105 transition-all duration-300 cursor-pointer">
              <div className="text-white text-[72px] uppercase tracking-wider" style={{ fontWeight: 900, WebkitTextStroke: '2px white', WebkitTextFillColor: 'transparent' }}>
                SUBSCRIBE
              </div>
              <div className="absolute right-8 bottom-8">
                <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 40H60M60 40L45 25M60 40L45 55" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </a>

            {/* Bottom Image */}
            <div className="relative aspect-video bg-gray-900 rounded-lg overflow-hidden">
              <ImageWithFallback
                src={image_4842cadf5ed53022bd7216990e644840e29858f6}
                alt="Content creation"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Bottom Icons */}
        <div className="flex gap-8 mt-12 justify-center">
          <div className="w-16 h-16 bg-white rounded-lg"></div>
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="8" cy="20" r="4" fill="black"/>
              <circle cx="20" cy="20" r="6" fill="black"/>
              <circle cx="32" cy="20" r="4" fill="black"/>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
