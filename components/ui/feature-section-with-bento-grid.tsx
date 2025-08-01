import { CheckCircle, Sparkles, Globe, Monitor, Zap, Brain } from "lucide-react";
import { Badge } from "@/components/ui/badge";

function Feature() {
  return (
    <div className="w-full py-20 lg:py-40">
      <div className="container mx-auto">
        <div className="flex flex-col gap-10">
          <div className="flex gap-4 flex-col items-start">
            <div>
              <Badge>Features</Badge>
            </div>
            <div className="flex gap-2 flex-col">
              <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular text-left">
                Why Choose Rewritter?
              </h2>
              <p className="text-lg max-w-xl lg:max-w-lg leading-relaxed tracking-tight text-muted-foreground text-left">
                Experience the future of writing assistance with our advanced AI technology.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Smart Grammar Correction - Large */}
            <div className="bg-muted rounded-md h-full lg:col-span-2 p-6 aspect-square lg:aspect-auto flex justify-between flex-col">
              <CheckCircle className="w-8 h-8 stroke-1 text-green-600" />
              <div className="flex flex-col">
                <h3 className="text-xl tracking-tight">Smart Grammar Correction</h3>
                <p className="text-muted-foreground max-w-xs text-base">
                  Advanced AI detects and fixes grammar, spelling, and punctuation errors with context-aware suggestions.
                </p>
              </div>
            </div>
            
            {/* Intelligent Summarization */}
            <div className="bg-muted rounded-md aspect-square p-6 flex justify-between flex-col">
              <Sparkles className="w-8 h-8 stroke-1 text-purple-600" />
              <div className="flex flex-col">
                <h3 className="text-xl tracking-tight">Intelligent Summarization</h3>
                <p className="text-muted-foreground max-w-xs text-base">
                  Instantly summarize long texts, articles, and documents while preserving key information.
                </p>
              </div>
            </div>
            
            {/* Web Application */}
            <div className="bg-muted rounded-md aspect-square p-6 flex justify-between flex-col">
              <Globe className="w-8 h-8 stroke-1 text-blue-600" />
              <div className="flex flex-col">
                <h3 className="text-xl tracking-tight">Web Application</h3>
                <p className="text-muted-foreground max-w-xs text-base">
                  Full-featured web app with advanced editing tools, document management, and collaboration features.
                </p>
              </div>
            </div>
            
            {/* Chrome Extension - Large */}
            <div className="bg-muted rounded-md h-full lg:col-span-2 p-6 aspect-square lg:aspect-auto flex justify-between flex-col">
              <Monitor className="w-8 h-8 stroke-1 text-orange-600" />
              <div className="flex flex-col">
                <h3 className="text-xl tracking-tight">Chrome Extension</h3>
                <p className="text-muted-foreground max-w-xs text-base">
                  Seamlessly integrate with any website. Fix grammar and summarize content anywhere you browse.
                </p>
              </div>
            </div>
            
            {/* Lightning Fast */}
            <div className="bg-muted rounded-md aspect-square p-6 flex justify-between flex-col">
              <Zap className="w-8 h-8 stroke-1 text-yellow-600" />
              <div className="flex flex-col">
                <h3 className="text-xl tracking-tight">Lightning Fast</h3>
                <p className="text-muted-foreground max-w-xs text-base">
                  Get instant results with our optimized AI models. No waiting, just immediate writing improvements.
                </p>
              </div>
            </div>
            
            {/* Contextual Intelligence */}
            <div className="bg-muted rounded-md aspect-square p-6 flex justify-between flex-col">
              <Brain className="w-8 h-8 stroke-1 text-indigo-600" />
              <div className="flex flex-col">
                <h3 className="text-xl tracking-tight">Contextual Intelligence</h3>
                <p className="text-muted-foreground max-w-xs text-base">
                  Our AI understands context, tone, and intent to provide suggestions that match your writing style.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Feature };