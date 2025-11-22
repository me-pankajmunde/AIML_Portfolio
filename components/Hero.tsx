import React from 'react';
import { SectionId } from '../types';
import { ArrowRight, BrainCircuit, Database, Network } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section
      id={SectionId.HERO}
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      {/* Background Grid/Glow Effects */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] -z-10"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[128px] -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700 text-primary text-sm font-medium mb-8 animate-fade-in-up">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          Open for collaborations
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-6">
          AI/ML Associate & <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Deep Learning Specialist</span>
        </h1>

        <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-400 mb-10">
          I'm Pankaj, specializing in Computer Vision, NLP, and Generative AI. I build intelligent solutions that solve real-world challenges and transform industries.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={`#${SectionId.PROJECTS}`}
            className="px-8 py-3 rounded-full bg-primary hover:bg-primary/90 text-white font-semibold transition-all shadow-lg shadow-primary/25 flex items-center gap-2"
          >
            View Projects <ArrowRight size={18} />
          </a>
          <a
            href={`#${SectionId.CONTACT}`}
            className="px-8 py-3 rounded-full bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-semibold transition-all"
          >
            Contact Me
          </a>
        </div>

        {/* Decorative Tech Icons */}
        <div className="mt-24 flex justify-center gap-12 text-slate-600 opacity-50">
            <BrainCircuit size={40} className="hover:text-primary transition-colors duration-500" />
            <Database size={40} className="hover:text-secondary transition-colors duration-500" />
            <Network size={40} className="hover:text-accent transition-colors duration-500" />
        </div>
      </div>
    </section>
  );
};