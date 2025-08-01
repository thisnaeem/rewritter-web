import { CheckCircle, Monitor, Globe, Sparkles, Zap, Brain } from 'lucide-react';
import ScrollStack, { ScrollStackItem } from '@/components/ui/scroll-stack';

const features = [
  {
    icon: <CheckCircle className="w-12 h-12 text-green-600" />,
    title: "Smart Grammar Correction",
    description: "Advanced AI detects and fixes grammar, spelling, and punctuation errors with context-aware suggestions that understand the nuance of your writing.",
    details: "Our AI analyzes sentence structure, context, and intent to provide corrections that maintain your unique voice while ensuring perfect grammar.",
    bgColor: "bg-gradient-to-br from-green-50 to-emerald-50",
    borderColor: "border-green-200"
  },
  {
    icon: <Sparkles className="w-12 h-12 text-purple-600" />,
    title: "Intelligent Summarization",
    description: "Instantly summarize long texts, articles, and documents while preserving key information, context, and the original meaning.",
    details: "Transform lengthy content into concise, actionable summaries that capture the essence of your documents without losing important details.",
    bgColor: "bg-gradient-to-br from-purple-50 to-violet-50",
    borderColor: "border-purple-200"
  },
  {
    icon: <Globe className="w-12 h-12 text-blue-600" />,
    title: "Powerful Web Application",
    description: "Full-featured web app with advanced editing tools, document management, collaboration features, and seamless cloud synchronization.",
    details: "Work from anywhere with our comprehensive web platform that includes real-time collaboration, version history, and advanced formatting options.",
    bgColor: "bg-gradient-to-br from-blue-50 to-cyan-50",
    borderColor: "border-blue-200"
  },
  {
    icon: <Monitor className="w-12 h-12 text-orange-600" />,
    title: "Chrome Extension",
    description: "Seamlessly integrate with any website. Fix grammar and summarize content anywhere you browse with our lightweight extension.",
    details: "One-click installation gives you writing assistance across Gmail, social media, documentation sites, and any text field on the web.",
    bgColor: "bg-gradient-to-br from-orange-50 to-amber-50",
    borderColor: "border-orange-200"
  },
  {
    icon: <Zap className="w-12 h-12 text-yellow-600" />,
    title: "Lightning Fast Performance",
    description: "Get instant results with our optimized AI models. No waiting, just immediate writing improvements and real-time suggestions.",
    details: "Built on cutting-edge infrastructure that processes your text in milliseconds, providing suggestions faster than you can type.",
    bgColor: "bg-gradient-to-br from-yellow-50 to-amber-50",
    borderColor: "border-yellow-200"
  },
  {
    icon: <Brain className="w-12 h-12 text-indigo-600" />,
    title: "Contextual Intelligence",
    description: "Our AI understands context, tone, and intent to provide suggestions that match your writing style and maintain consistency.",
    details: "Advanced machine learning adapts to your writing patterns, industry terminology, and preferred style to deliver personalized assistance.",
    bgColor: "bg-gradient-to-br from-indigo-50 to-purple-50",
    borderColor: "border-indigo-200"
  }
];

export default function FeaturesStackSection() {
  return (
    <ScrollStack>
      {features.map((feature, index) => (
        <ScrollStackItem
          key={index}
          itemClassName={`${feature.bgColor} ${feature.borderColor} border-2`}
        >
          <div className="flex items-start gap-8 h-full">
            <div className="flex-shrink-0">
              <div className="p-4 bg-white rounded-2xl shadow-sm">
                {feature.icon}
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                {feature.description}
              </p>
              <p className="text-gray-600 leading-relaxed">
                {feature.details}
              </p>
            </div>
          </div>
        </ScrollStackItem>
      ))}
    </ScrollStack>
  );
}