import React, { useState } from 'react';
import { DEMOS } from '../constants';
import { Play, Maximize2, X } from 'lucide-react';

export const Demos: React.FC = () => {
  const categories = Array.from(new Set(DEMOS.map(d => d.category)));
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [selectedDemo, setSelectedDemo] = useState<string | null>(null);

  const filteredDemos = DEMOS.filter(d => d.category === activeCategory);
  const currentDemo = DEMOS.find(d => d.id === selectedDemo);

  return (
    <section className="py-20 bg-gradient-to-b from-dark via-dark-lighter to-dark min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Demo Apps Gallery
          </h2>
          <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto">
            Explore interactive AI/ML demos showcasing real-world applications
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => {
                setActiveCategory(category);
                setSelectedDemo(null);
              }}
              className={`px-6 py-3 rounded-full text-base font-semibold transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-2xl shadow-primary/50 scale-105'
                  : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700 hover:text-white hover:scale-105'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid - Enhanced */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {filteredDemos.map(demo => (
            <div 
              key={demo.id} 
              className="group relative bg-slate-800/50 backdrop-blur-sm rounded-3xl overflow-hidden border border-slate-700/50 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 flex flex-col"
            >
              {/* Large Thumbnail Section - Primary Focus */}
              <div 
                className="relative bg-gradient-to-br from-slate-900 to-slate-800 h-80 cursor-pointer overflow-hidden" 
                onClick={() => setSelectedDemo(demo.id)}
              >
                {demo.thumbnailUrl && (
                  <img 
                    src={demo.thumbnailUrl} 
                    alt={demo.title} 
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-70 group-hover:opacity-50" 
                  />
                )}
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-80"></div>
                
                {/* Play Button - More Prominent */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <button 
                    className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary text-white rounded-full font-bold text-lg transition-all duration-300 transform group-hover:scale-110 shadow-2xl shadow-primary/50 group-hover:shadow-primary/80"
                  >
                    <Play size={24} fill="currentColor" /> 
                    Launch Demo
                  </button>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-primary/90 backdrop-blur-sm text-white text-xs font-bold rounded-full shadow-lg">
                    {demo.category}
                  </span>
                </div>
              </div>

              {/* Content Section - Reduced Emphasis */}
              <div className="p-5 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                  {demo.title}
                </h3>
                <p className="text-slate-400 text-sm mb-4 flex-1" style={{
                  display: '-webkit-box',
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden'
                }}>
                  {demo.description}
                </p>
                
                {/* Tags - Compact */}
                {demo.tags && (
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {demo.tags.slice(0, 3).map(tag => (
                      <span 
                        key={tag} 
                        className="text-xs font-medium px-2 py-1 rounded-md bg-slate-900/50 text-slate-400 border border-slate-700/50"
                      >
                        {tag}
                      </span>
                    ))}
                    {demo.tags.length > 3 && (
                      <span className="text-xs font-medium px-2 py-1 text-slate-500">
                        +{demo.tags.length - 3}
                      </span>
                    )}
                  </div>
                )}

                {/* External Link - Minimized */}
                <a 
                  href={demo.embedUrl} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="text-xs text-slate-500 hover:text-primary flex items-center gap-1 transition-colors"
                >
                  <Maximize2 size={12} /> External Link
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Enhanced Modal */}
      {selectedDemo && currentDemo && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md transition-opacity duration-300" 
          onClick={() => setSelectedDemo(null)}
        >
          <div 
            className="bg-gradient-to-br from-slate-900 to-slate-800 w-full max-w-7xl h-[90vh] rounded-3xl overflow-hidden relative flex flex-col shadow-2xl border border-primary/30" 
            onClick={e => e.stopPropagation()}
          >
            <div className="flex justify-between items-center p-5 border-b border-slate-700/50 bg-slate-800/80 backdrop-blur-sm">
              <div>
                <h3 className="text-2xl font-bold text-white mb-1">{currentDemo.title}</h3>
                <p className="text-sm text-slate-400">{currentDemo.description}</p>
              </div>
              <button 
                onClick={() => setSelectedDemo(null)} 
                className="text-slate-400 hover:text-white hover:bg-slate-700 p-2 rounded-full transition-all"
              >
                <X size={28} />
              </button>
            </div>
            <div className="flex-1 bg-black relative">
              <iframe
                src={currentDemo.embedUrl}
                className="w-full h-full border-0"
                title={currentDemo.title}
                allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
                sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
