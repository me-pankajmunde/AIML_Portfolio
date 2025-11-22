import React from 'react';
import { SectionId } from '../types';
import { Mail, Linkedin, Github, Twitter } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id={SectionId.CONTACT} className="py-24 relative">
        {/* Footer-like Gradient */}
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/40 to-transparent pointer-events-none"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Let's Connect</h2>
            <p className="text-slate-400 text-lg mb-12">
                I'm always interested in discussing new technologies, social impact projects, and policy frameworks.
                Reach out for collaborations or speaking engagements.
            </p>

            <div className="flex justify-center gap-6 mb-12">
                <SocialLink href="mailto:contact@pankajmunde.in" icon={<Mail size={24} />} label="Email" />
                <SocialLink href="https://linkedin.com" icon={<Linkedin size={24} />} label="LinkedIn" />
                <SocialLink href="https://github.com" icon={<Github size={24} />} label="GitHub" />
                <SocialLink href="https://twitter.com" icon={<Twitter size={24} />} label="Twitter" />
            </div>

            <div className="p-8 rounded-2xl bg-slate-800/30 border border-slate-700 backdrop-blur-sm">
                <p className="text-slate-300 mb-6">
                    "The true measure of technology is the number of lives it touches."
                </p>
                <a 
                    href="mailto:contact@pankajmunde.in"
                    className="inline-block px-8 py-4 rounded-lg bg-white text-slate-900 font-bold hover:bg-slate-200 transition-colors"
                >
                    Get in Touch
                </a>
            </div>

             <div className="mt-20 pt-8 border-t border-slate-800 text-sm text-slate-600">
                <p>© {new Date().getFullYear()} Pankaj Munde. Built with React, Tailwind & Gemini.</p>
            </div>
        </div>
    </section>
  );
};

const SocialLink: React.FC<{ href: string; icon: React.ReactNode; label: string }> = ({ href, icon, label }) => (
    <a 
        href={href} 
        target="_blank" 
        rel="noreferrer"
        className="p-4 rounded-full bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white hover:-translate-y-1 transition-all duration-300 border border-slate-700"
        aria-label={label}
    >
        {icon}
    </a>
);