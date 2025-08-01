"use client";

import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function CTASection() {
  return (
    <section className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* 3D Interactive Card */}
        <div 
          className="bg-[#0c0d19] rounded-2xl p-12 lg:p-20 text-center text-white shadow-2xl transition-all duration-300 ease-out hover:shadow-3xl hover:-translate-y-2 hover:scale-[1.02] transform-gpu perspective-1000"
          style={{
            transformStyle: 'preserve-3d',
          }}
          onMouseMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            const rotateX = (y / rect.height) * -10;
            const rotateY = (x / rect.width) * 10;
            e.currentTarget.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px) scale(1.02)`;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px) scale(1)';
          }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 leading-tight">
            Ready to Transform Your Writing?
          </h2>
          
          <p className="text-lg lg:text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Join thousands of writers, students, and professionals who are already improving their writing with Rewritter.
          </p>
          
          <Link
            href="/waitlist"
            className="inline-flex items-center space-x-3 bg-white text-gray-900 hover:bg-gray-100 px-8 py-3 rounded-full font-semibold text-base transition-all transform hover:scale-105 shadow-lg"
          >
            <span>Get Early Access</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}