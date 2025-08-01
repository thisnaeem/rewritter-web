import { ArrowRight, Chrome, Globe, Zap } from 'lucide-react';
import Link from 'next/link';
import Threads from '@/components/ui/threads';

export default function HeroSection() {
  return (
    <section className="relative bg-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-30">
        <Threads
          color={[0.1, 0.1, 0.1]}
          amplitude={0.8}
          distance={0.3}
          enableMouseInteraction={true}
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 lg:py-28">
        <div className="text-center max-w-5xl mx-auto">
          <div className="inline-flex items-center space-x-2 bg-black text-white px-4 py-2 rounded-full text-sm font-medium mb-8">
            <Zap className="w-4 h-4" />
            <span>AI-Powered Writing Assistant</span>
          </div>
          
          <h1 className="text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight">
            Write Better with<br />
            <span className="text-black">
              AI Power
            </span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
            Transform your writing with intelligent grammar correction and smart summarization. 
            Available as a powerful web app and seamless Chrome extension.
          </p>
          
          <div className="flex flex-col gap-6 justify-center items-center mb-16">
            <Link
              href="/waitlist"
              className="bg-black hover:bg-gray-800 text-white px-10 py-5 rounded-full font-semibold text-lg flex items-center space-x-3 transition-all transform hover:scale-105 shadow-xl"
            >
              <span>Join the Waitlist</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <div className="flex items-center space-x-8 text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <Globe className="w-5 h-5" />
                <span>Web App</span>
              </div>
              <div className="flex items-center space-x-2">
                <Chrome className="w-5 h-5" />
                <span>Chrome Extension</span>
              </div>
            </div>
          </div>


        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
    </section>
  );
}