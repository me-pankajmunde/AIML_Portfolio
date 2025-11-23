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
    <section className="py-24 bg-dark min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Live Demos</h2>
          <p className="text-slate-400 max-w-xl">
            Interactive prototypes and live models.
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => {
                setActiveCategory(category);
                setSelectedDemo(null);
              }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category
                  ? 'bg-primary text-white shadow-lg shadow-primary/25'
                  : 'bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Demos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDemos.map(demo => (
            <div key={demo.id} className="bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 flex flex-col">
              <div className="p-6 border-b border-slate-700">
                <h3 className="text-xl font-bold text-white mb-2">{demo.title}</h3>
                <p className="text-slate-400 text-sm mb-4">{demo.description}</p>
                {demo.tags && (
                  <div className="flex flex-wrap gap-2">
                    {demo.tags.map(tag => (
                      <span key={tag} className="text-xs font-medium px-2 py-1 rounded-md bg-slate-900 text-slate-400 border border-slate-800">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
              
              <div className="relative bg-slate-900 h-60 w- group cursor-pointer" onClick={() => setSelectedDemo(demo.id)}>
                  {demo.thumbnailUrl && (
                      <img src={demo.thumbnailUrl} alt={demo.title} className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity" />
                  )}
                  <div className="absolute inset-0 flex items-center justify-center">
                      <button 
                          className="flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary-dark text-white rounded-full font-bold transition-all transform group-hover:scale-105 shadow-lg shadow-primary/25"
                      >
                          <Play size={20} fill="currentColor" /> Load Demo
                      </button>
                  </div>
              </div>
              <div className="p-4 bg-slate-800/50 flex justify-end">
                  <a href={demo.embedUrl} target="_blank" rel="noreferrer" className="text-xs text-slate-400 hover:text-white flex items-center gap-1">
                      Open in new tab <Maximize2 size={12} />
                  </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedDemo && currentDemo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={() => setSelectedDemo(null)}>
          <div className="bg-slate-900 w-full max-w-6xl h-[85vh] rounded-2xl overflow-hidden relative flex flex-col shadow-2xl border border-slate-700" onClick={e => e.stopPropagation()}>
            <div className="flex justify-between items-center p-4 border-b border-slate-700 bg-slate-800">
              <h3 className="text-xl font-bold text-white">{currentDemo.title}</h3>
              <button onClick={() => setSelectedDemo(null)} className="text-slate-400 hover:text-white transition-colors">
                <X size={24} />
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
