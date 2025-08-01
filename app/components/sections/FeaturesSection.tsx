'use client';

import { useRef } from "react";
import { CheckCircle, Sparkles, Globe, Monitor } from "lucide-react";
import ScrollFloat from '@/components/ui/scroll-float';

export default function FeaturesSection() {
  const scrollContainerRef = useRef(null);

  return (
    <section className="bg-gray-50 py-20 lg:py-28" ref={scrollContainerRef}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <ScrollFloat
            scrollContainerRef={scrollContainerRef}
            containerClassName="mb-6"
            textClassName="text-4xl lg:text-5xl font-bold text-gray-900"
          >
            Why Choose Rewritter?
          </ScrollFloat>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the future of writing assistance with our advanced AI technology
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Smart Grammar Correction - Large */}
          <div className="bg-white rounded-3xl h-full lg:col-span-2 p-8 aspect-square lg:aspect-auto flex justify-between flex-col shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <CheckCircle className="w-8 h-8 stroke-1 text-green-600" />
            <div className="flex flex-col">
              <h3 className="text-xl tracking-tight font-semibold text-gray-900 mb-2">Smart Grammar Correction</h3>
              <p className="text-gray-600 max-w-xs text-base leading-relaxed">
                Advanced AI detects and fixes grammar, spelling, and punctuation errors with context-aware suggestions.
              </p>
            </div>
          </div>
          
          {/* Intelligent Summarization */}
          <div className="bg-white rounded-3xl aspect-square p-8 flex justify-between flex-col shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <Sparkles className="w-8 h-8 stroke-1 text-purple-600" />
            <div className="flex flex-col">
              <h3 className="text-xl tracking-tight font-semibold text-gray-900 mb-2">Intelligent Summarization</h3>
              <p className="text-gray-600 max-w-xs text-base leading-relaxed">
                Instantly summarize long texts, articles, and documents while preserving key information.
              </p>
            </div>
          </div>
          
          {/* Web Application */}
          <div className="bg-white rounded-3xl aspect-square p-8 flex justify-between flex-col shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <Globe className="w-8 h-8 stroke-1 text-blue-600" />
            <div className="flex flex-col">
              <h3 className="text-xl tracking-tight font-semibold text-gray-900 mb-2">Web Application</h3>
              <p className="text-gray-600 max-w-xs text-base leading-relaxed">
                Full-featured web app with advanced editing tools, document management, and collaboration features.
              </p>
            </div>
          </div>
          
          {/* Chrome Extension - Large */}
          <div className="bg-white rounded-3xl h-full lg:col-span-2 p-8 aspect-square lg:aspect-auto flex justify-between flex-col shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <Monitor className="w-8 h-8 stroke-1 text-orange-600" />
            <div className="flex flex-col">
              <h3 className="text-xl tracking-tight font-semibold text-gray-900 mb-2">Chrome Extension</h3>
              <p className="text-gray-600 max-w-xs text-base leading-relaxed">
                Seamlessly integrate with any website. Fix grammar and summarize content anywhere you browse.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}