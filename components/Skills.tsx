import React from 'react';
import { SectionId } from '../types';
import { RADAR_DATA, SKILL_CATEGORIES } from '../constants';
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, Radar } from 'recharts';

export const Skills: React.FC = () => {
  return (
    <section id={SectionId.SKILLS} className="py-24 relative overflow-hidden">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Technical Arsenal</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A balanced blend of theoretical knowledge and practical engineering capabilities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Chart Area */}
            <div className="lg:col-span-2 h-[400px] w-full bg-slate-800/30 rounded-2xl border border-slate-700 p-4 flex items-center justify-center relative">
                 <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900/50 z-0 rounded-2xl" />
                 <div className="w-full h-full z-10">
                    <ResponsiveContainer width="100%" height="100%">
                        <RadarChart cx="50%" cy="50%" outerRadius="70%" data={RADAR_DATA}>
                            <PolarGrid stroke="#475569" />
                            <PolarAngleAxis dataKey="subject" tick={{ fill: '#94a3b8', fontSize: 12 }} />
                            <Radar
                                name="Alex"
                                dataKey="A"
                                stroke="#8b5cf6"
                                strokeWidth={2}
                                fill="#8b5cf6"
                                fillOpacity={0.4}
                            />
                        </RadarChart>
                    </ResponsiveContainer>
                 </div>
            </div>

            {/* Lists Area */}
            <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6">
                {SKILL_CATEGORIES.map((group) => (
                    <div key={group.category} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 hover:border-primary/50 transition-colors">
                        <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                            <span className="w-2 h-8 bg-primary rounded-full"></span>
                            {group.category}
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {group.items.map((skill) => (
                                <span key={skill} className="px-3 py-1 bg-slate-900 text-slate-300 text-sm rounded-md border border-slate-700 hover:text-white hover:border-slate-500 transition-colors cursor-default">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
                
                {/* Soft Skills Block */}
                 <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl p-6 border border-slate-700/50">
                    <h3 className="text-xl font-bold text-white mb-4">Core Competencies</h3>
                    <ul className="space-y-2 text-slate-300">
                        <li className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span> Problem decomposition & Algorithmic thinking
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span> Technical Leadership & Mentoring
                        </li>
                         <li className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span> Research Implementation
                        </li>
                    </ul>
                 </div>
            </div>
        </div>
       </div>
    </section>
  );
};