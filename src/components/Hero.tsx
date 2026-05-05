import { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';

export default function Hero() {
  const [typedText, setTypedText] = useState('');

  const fullText = 'Data-Driven Professional | ML & AI Enthusiast';

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setTypedText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative px-4">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto text-center relative z-10">
        {/* Racing Flag Pattern */}
        <div className="flex justify-center mb-8">
          <div className="grid grid-cols-8 gap-1 w-16 h-10">
            {[...Array(32)].map((_, i) => (
              <div
                key={i}
                className={`${(Math.floor(i / 4) + Math.floor(i / 8)) % 2 === 0
                    ? 'bg-white'
                    : 'bg-black'
                  }`}
              />
            ))}
          </div>
        </div>

        {/* Name */}
        <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">
          <span className="text-white">MANOJ</span>
          <span className="text-red-500"> S</span>
        </h1>

        {/* Subtitle with typing effect */}
        <p className="text-xl md:text-2xl text-slate-400 mb-6 h-8">
          {typedText}
          <span className="animate-pulse">|</span>
        </p>

        {/* Target Statement */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="inline-block px-4 py-2 rounded-full border border-red-500/50 bg-red-500/10">
            <p className="text-red-400 font-medium">
              🚗 Aspiring to join the world of Motorsport
            </p>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="flex flex-wrap justify-center gap-8 mb-12">
          <div className="text-center">
            <div className="text-4xl font-bold text-white">3 TB</div>
            <div className="text-sm text-slate-500">Data Processed</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white">{'<100ms'}</div>
            <div className="text-sm text-slate-500">Response Time</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white">6+</div>
            <div className="text-sm text-slate-500">ML Projects</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white">98%</div>
            <div className="text-sm text-slate-500">Model Accuracy</div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <a
            href="#contact"
            className="px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded transition-all duration-200 transform hover:scale-105"
          >
            Get In Touch
          </a>
          <a
            href="#projects"
            className="px-8 py-3 border border-slate-700 hover:border-red-500 text-white font-semibold rounded transition-all duration-200"
          >
            View Projects
          </a>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mb-12">
          <a
            href="https://linkedin.com/in/ms1307"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full border border-slate-800 hover:border-blue-500 hover:bg-blue-500/10 transition-all duration-200"
          >
            <Linkedin size={24} className="text-slate-400 hover:text-blue-400" />
          </a>
          <a
            href="https://github.com/Manoj1307"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full border border-slate-800 hover:border-white hover:bg-white/10 transition-all duration-200"
          >
            <Github size={24} className="text-slate-400 hover:text-white" />
          </a>
          <a
            href="mailto:manojsivaraj13@gmail.com"
            className="p-3 rounded-full border border-slate-800 hover:border-red-500 hover:bg-red-500/10 transition-all duration-200"
          >
            <Mail size={24} className="text-slate-400 hover:text-red-400" />
          </a>
        </div>

        {/* Scroll Indicator */}
        <a
          href="#about"
          className="inline-flex flex-col items-center text-slate-500 hover:text-red-500 transition-colors"
        >
          <span className="text-sm mb-2">Scroll Down</span>
          <ChevronDown className="animate-bounce" size={24} />
        </a>
      </div>
    </section>
  );
}