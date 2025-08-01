import { FileText, Wand2, Download } from 'lucide-react';

export default function HowItWorksSection() {
  const steps = [
    {
      icon: <FileText className="w-12 h-12 text-blue-600" />,
      title: "Write or Paste Text",
      description: "Simply type your content or paste existing text into our editor or use our Chrome extension on any website."
    },
    {
      icon: <Wand2 className="w-12 h-12 text-purple-600" />,
      title: "AI Analysis",
      description: "Our advanced AI instantly analyzes your text for grammar errors, style improvements, and summarization opportunities."
    },
    {
      icon: <Download className="w-12 h-12 text-green-600" />,
      title: "Get Results",
      description: "Receive instant corrections, suggestions, and summaries. Apply changes with one click and improve your writing."
    }
  ];

  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get perfect writing in three simple steps
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <div key={index} className="text-center relative">
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-6 left-1/2 w-full h-0.5 bg-gradient-to-r from-gray-300 to-gray-200 transform translate-x-6"></div>
              )}
              <div className="relative bg-gray-50 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-50 transition-colors">
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </div>
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}