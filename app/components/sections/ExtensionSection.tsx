'use client';

import { useRef } from "react";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import { Monitor, Zap, CheckCircle, Globe } from "lucide-react";
import ScrollFloat from '@/components/ui/scroll-float';

const content = [
  {
    title: "Instant Grammar Correction",
    description: "Fix grammar, spelling, and punctuation errors instantly on any website. Our Chrome extension works seamlessly across Gmail, social media, documentation sites, and any text field on the web.",
    content: (
      <div className="h-full w-full flex items-center justify-center">
        <img
          src="https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
          width={400}
          height={300}
          className="h-full w-full object-cover rounded-3xl"
          alt="Grammar correction in action"
        />
      </div>
    ),
  },
  {
    title: "Smart Summarization",
    description: "Summarize long articles, emails, and documents with one click. Our AI understands context and extracts key information while preserving the original meaning and important details.",
    content: (
      <div className="h-full w-full flex items-center justify-center">
        <img
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&crop=center"
          width={400}
          height={300}
          className="h-full w-full object-cover rounded-3xl"
          alt="Document summarization interface"
        />
      </div>
    ),
  },
  {
    title: "Universal Compatibility",
    description: "Works on every website and web application. From social media posts to professional emails, from blog comments to documentation - Rewritter enhances your writing everywhere you type.",
    content: (
      <div className="h-full w-full flex items-center justify-center">
        <img
          src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
          width={400}
          height={300}
          className="h-full w-full object-cover rounded-3xl"
          alt="Universal web compatibility"
        />
      </div>
    ),
  },
  {
    title: "Lightning Fast Performance",
    description: "Get instant results with our optimized AI models. No waiting, no delays - just immediate writing improvements that help you communicate more effectively and professionally.",
    content: (
      <div className="h-full w-full flex items-center justify-center">
        <img
          src="https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
          width={400}
          height={300}
          className="h-full w-full object-cover rounded-3xl"
          alt="Lightning fast performance"
        />
      </div>
    ),
  },
  {
    title: "Advanced AI Technology",
    description: "Powered by cutting-edge artificial intelligence that understands context, tone, and writing style. Our models are trained on millions of documents to provide the most accurate suggestions.",
    content: (
      <div className="h-full w-full flex items-center justify-center">
        <img
          src="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
          width={400}
          height={300}
          className="h-full w-full object-cover rounded-3xl"
          alt="AI technology"
        />
      </div>
    ),
  },
];

export default function ExtensionSection() {
  const scrollContainerRef = useRef(null);

  return (
    <section className="bg-white py-20 lg:py-28" ref={scrollContainerRef}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <ScrollFloat
            scrollContainerRef={scrollContainerRef}
            containerClassName="mb-6"
            textClassName="text-4xl lg:text-5xl font-bold text-gray-900"
          >
            Chrome Extension Features
          </ScrollFloat>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience seamless writing assistance across the entire web with our powerful Chrome extension
          </p>
        </div>
        
        <StickyScroll content={content} />
      </div>
    </section>
  );
}