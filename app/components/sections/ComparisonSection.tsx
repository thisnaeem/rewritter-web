"use client";

import { useState } from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { GripVertical, Check, X } from "lucide-react";

export default function ComparisonSection() {
  const [inset, setInset] = useState<number>(50);
  const [onMouseDown, setOnMouseDown] = useState<boolean>(false);

  const onMouseMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!onMouseDown) return;

    const rect = e.currentTarget.getBoundingClientRect();
    let x = 0;

    if ("touches" in e && e.touches.length > 0) {
      x = e.touches[0].clientX - rect.left;
    } else if ("clientX" in e) {
      x = e.clientX - rect.left;
    }

    const percentage = (x / rect.width) * 100;
    setInset(Math.max(0, Math.min(100, percentage)));
  };

  const comparisonFeatures = [
    { feature: "Real-time Grammar Check", rewritter: true, others: true },
    { feature: "AI-Powered Summarization", rewritter: true, others: false },
    { feature: "Context-Aware Corrections", rewritter: true, others: false },
    { feature: "Works on All Websites", rewritter: true, others: true },
    { feature: "Lightweight & Fast", rewritter: true, others: false },
    { feature: "Privacy-First Design", rewritter: true, others: false },
  ];

  return (
    <section className="bg-gray-50 py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <Badge className="mb-6">Extension Comparison</Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Why Choose Rewritter?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how Rewritter compares to other grammar checking extensions. Drag the slider to compare interfaces.
          </p>
        </div>

        {/* Interactive Comparison */}
        <div className="mb-16">
          <div
            className="relative aspect-video w-full max-w-4xl mx-auto overflow-hidden rounded-2xl select-none shadow-2xl"
            onMouseMove={onMouseMove}
            onMouseUp={() => setOnMouseDown(false)}
            onTouchMove={onMouseMove}
            onTouchEnd={() => setOnMouseDown(false)}
          >
            <div
              className="bg-white h-full w-1 absolute z-20 top-0 -ml-1 select-none shadow-lg"
              style={{
                left: inset + "%",
              }}
            >
              <button
                className="bg-white rounded-full hover:scale-110 transition-all w-8 h-8 select-none -translate-y-1/2 absolute top-1/2 -ml-4 z-30 cursor-ew-resize flex justify-center items-center shadow-lg border-2 border-gray-200"
                onTouchStart={(e) => {
                  setOnMouseDown(true);
                  onMouseMove(e);
                }}
                onMouseDown={(e) => {
                  setOnMouseDown(true);
                  onMouseMove(e);
                }}
                onTouchEnd={() => setOnMouseDown(false)}
                onMouseUp={() => setOnMouseDown(false)}
              >
                <GripVertical className="h-4 w-4 select-none text-gray-600" />
              </button>
            </div>
            
            {/* Rewritter Interface Simulation */}
            <div
              className="absolute left-0 top-0 z-10 w-full h-full bg-white rounded-2xl select-none p-6"
              style={{
                clipPath: "inset(0 0 0 " + inset + "%)",
              }}
            >
              {/* Rewritter UI */}
              <div className="h-full flex flex-col">
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <Image
                      src="/logo.png"
                      alt="Rewritter Logo"
                      width={32}
                      height={32}
                      className="rounded-lg"
                    />
                    <span className="font-semibold text-gray-900">Rewritter</span>
                  </div>
                  <div className="flex space-x-1">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  </div>
                </div>

                {/* Content Area */}
                <div className="flex-1 bg-gray-50 rounded-lg p-4">
                  <div className="mb-4">
                    <div className="text-sm text-gray-600 mb-2">Gmail Compose</div>
                    <div className="bg-white rounded-lg p-3 border-2 border-green-200">
                      <div className="text-sm text-gray-800 mb-2">
                        Dear John, I hope your doing well. I wanted to reach out about the project we discussed.
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">
                          ✓ Fixed: "your" → "you're"
                        </div>
                        <div className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                          💡 Tone: Professional
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* AI Summary Feature */}
                  <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg p-3 border border-purple-200">
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="w-4 h-4 bg-purple-500 rounded"></div>
                      <span className="text-sm font-medium text-purple-800">AI Summary</span>
                    </div>
                    <div className="text-xs text-purple-700">
                      "Professional email about project discussion with grammar correction"
                    </div>
                  </div>
                </div>

                {/* Stats */}
                <div className="mt-4 flex justify-between text-xs text-gray-600">
                  <span>✓ 1 error fixed</span>
                  <span>⚡ 0.2s response</span>
                  <span>🎯 99% accuracy</span>
                </div>
              </div>
            </div>
            
            {/* Other Extension Interface Simulation */}
            <div className="absolute left-0 top-0 w-full h-full bg-gray-100 rounded-2xl select-none p-6">
              {/* Other Extension UI */}
              <div className="h-full flex flex-col">
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-gray-600 rounded-lg flex items-center justify-center">
                      <span className="text-white text-xs font-bold">G</span>
                    </div>
                    <span className="font-semibold text-gray-700">Other Extension</span>
                  </div>
                  <div className="flex space-x-1">
                    <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                  </div>
                </div>

                {/* Content Area */}
                <div className="flex-1 bg-white rounded-lg p-4 border border-gray-200">
                  <div className="mb-4">
                    <div className="text-sm text-gray-500 mb-2">Gmail Compose</div>
                    <div className="bg-gray-50 rounded-lg p-3 border border-gray-300">
                      <div className="text-sm text-gray-700 mb-2">
                        Dear John, I hope your doing well. I wanted to reach out about the project we discussed.
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="bg-red-100 text-red-700 px-2 py-1 rounded text-xs">
                          ❌ Error detected
                        </div>
                        <div className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                          Basic check only
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Limited Features */}
                  <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="w-4 h-4 bg-gray-400 rounded"></div>
                      <span className="text-sm font-medium text-gray-600">Basic Grammar</span>
                    </div>
                    <div className="text-xs text-gray-500">
                      "Limited features available. Upgrade for more."
                    </div>
                  </div>
                </div>

                {/* Stats */}
                <div className="mt-4 flex justify-between text-xs text-gray-500">
                  <span>⚠️ Errors found</span>
                  <span>🐌 2.1s response</span>
                  <span>📊 85% accuracy</span>
                </div>
              </div>
            </div>
            

          </div>
        </div>

        {/* Feature Comparison Table */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden max-w-4xl mx-auto">
          <div className="px-8 py-6 bg-gray-50 border-b">
            <h3 className="text-2xl font-bold text-gray-900 text-center">
              Feature Comparison
            </h3>
          </div>
          <div className="divide-y divide-gray-200">
            {comparisonFeatures.map((item, index) => (
              <div key={index} className="px-8 py-4 flex items-center justify-between">
                <div className="flex-1">
                  <span className="text-lg font-medium text-gray-900">
                    {item.feature}
                  </span>
                </div>
                <div className="flex items-center space-x-12">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-medium text-gray-600 w-20 text-right">
                      Rewritter
                    </span>
                    {item.rewritter ? (
                      <Check className="w-5 h-5 text-green-600" />
                    ) : (
                      <X className="w-5 h-5 text-red-500" />
                    )}
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-medium text-gray-600 w-20 text-right">
                      Others
                    </span>
                    {item.others ? (
                      <Check className="w-5 h-5 text-green-600" />
                    ) : (
                      <X className="w-5 h-5 text-red-500" />
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}