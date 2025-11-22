import React from 'react';
import { SectionId } from '../types';
import { PROJECTS } from '../constants';
import { ExternalLink, Github } from 'lucide-react';

export const Projects: React.FC = () => {
  return (
    <section id={SectionId.PROJECTS} className="py-24 bg-dark-lighter/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Projects</h2>
                <p className="text-slate-400 max-w-xl">
                    A selection of work ranging from scalable ML infrastructure to experimental AI applications.
                </p>
            </div>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="text-primary hover:text-white transition-colors flex items-center gap-2">
                View GitHub Profile <ArrowRightIcon />
            </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((project) => (
                <div key={project.id} className="group relative bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-1">
                    {/* Image */}
                    <div className="h-48 overflow-hidden relative">
                        <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors z-10"></div>
                        <img 
                            src={project.imageUrl} 
                            alt={project.title} 
                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                        />
                    </div>

                    {/* Content */}
                    <div className="p-6">
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                            {project.title}
                        </h3>
                        <p className="text-slate-400 text-sm mb-4 line-clamp-3">
                            {project.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-2 mb-6">
                            {project.tags.map(tag => (
                                <span key={tag} className="text-xs font-medium px-2 py-1 rounded-md bg-slate-900 text-slate-400 border border-slate-800">
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <div className="flex items-center gap-4 mt-auto">
                            {project.githubUrl && (
                                <a href={project.githubUrl} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-sm text-slate-300 hover:text-white transition-colors">
                                    <Github size={16} /> Code
                                </a>
                            )}
                            {project.demoUrl && (
                                <a href={project.demoUrl} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-sm text-slate-300 hover:text-white transition-colors">
                                    <ExternalLink size={16} /> Live Demo
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

const ArrowRightIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
);