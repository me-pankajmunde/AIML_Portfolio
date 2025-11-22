import React from 'react';
import { SectionId } from '../types';
import { Code2, Cpu, Globe } from 'lucide-react';

const stats = [
  { label: 'Years Experience', value: '6+' },
  { label: 'Key Projects', value: '10+' },
  { label: 'Efficiency Gain', value: '35%' },
];

export const About: React.FC = () => {
  return (
    <section id={SectionId.ABOUT} className="py-24 bg-dark-lighter/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden border border-slate-700 shadow-2xl">
                <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800" 
                    alt="Pankaj Munde" 
                    className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-700"
                />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-8 -right-8 glass-panel p-6 rounded-xl max-w-xs hidden md:block shadow-xl">
                <p className="text-slate-300 italic">"Leveraging AI to drive innovation and transform industries."</p>
                <p className="text-primary font-bold mt-2">- Pankaj Munde</p>
            </div>
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Bridging Research & <br />
              <span className="text-secondary">Real-World Application</span>
            </h2>
            <p className="text-slate-400 text-lg mb-6 leading-relaxed">
              With over 6 years of experience in the field, I specialize in Computer Vision, Deep Learning, and NLP. My journey has been defined by developing and deploying AI solutions that tackle tangible problems in sectors like Agriculture and Retail.
            </p>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              Currently an Associate in AI/ML at Shivrai Technologies, I focus on advanced model development—from optimizing satellite imagery analysis to finetuning Large Language Models (LLMs) for specialized tasks like RAG and digital expert systems.
            </p>

            <div className="grid grid-cols-3 gap-4 mb-10">
                {stats.map((stat) => (
                    <div key={stat.label} className="text-center p-4 rounded-lg bg-slate-800/50 border border-slate-700">
                        <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                        <div className="text-xs text-slate-500 uppercase tracking-wider">{stat.label}</div>
                    </div>
                ))}
            </div>

            <div className="space-y-4">
                <div className="flex items-center gap-4 text-slate-300">
                    <div className="p-3 rounded-full bg-primary/10 text-primary">
                        <Cpu size={20} />
                    </div>
                    <div>
                        <h3 className="font-semibold text-white">Advanced AI Techniques</h3>
                        <p className="text-sm text-slate-500">Expertise in RAG, GraphRAG, GANs, and LLM finetuning.</p>
                    </div>
                </div>
                <div className="flex items-center gap-4 text-slate-300">
                    <div className="p-3 rounded-full bg-secondary/10 text-secondary">
                        <Code2 size={20} />
                    </div>
                    <div>
                        <h3 className="font-semibold text-white">Robust Engineering</h3>
                        <p className="text-sm text-slate-500">Developing scalable APIs with FastAPI/Flask & optimizing data pipelines.</p>
                    </div>
                </div>
                <div className="flex items-center gap-4 text-slate-300">
                    <div className="p-3 rounded-full bg-accent/10 text-accent">
                        <Globe size={20} />
                    </div>
                    <div>
                        <h3 className="font-semibold text-white">Impact Driven</h3>
                        <p className="text-sm text-slate-500">Proven track record of increasing efficiency and accuracy by 30-40%.</p>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};