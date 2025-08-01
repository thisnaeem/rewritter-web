'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Mail, Twitter, Github, Linkedin } from 'lucide-react';
import AnimatedText from '@/components/ui/animated-text';

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#0c0d19' }} className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* Large Animated Text Background */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <AnimatedText 
            text="Rewritter"
            className="text-[12rem] lg:text-[16rem] font-bold text-gray-800/10"
            strokeWidth={1}
            fillDelay={1}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <Image
                src="/logo.png"
                alt="Rewritter Logo"
                width={32}
                height={32}
                className="rounded-lg"
              />
              <span className="text-xl font-bold text-white">Rewritter</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              AI-powered writing assistant that helps you perfect your grammar and summarize content with precision.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-white transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Product</h3>
            <ul className="space-y-3">
              <li><Link href="/waitlist" className="text-gray-400 hover:text-white transition-colors">Join Waitlist</Link></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Features</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Chrome Extension</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms</a></li>
            </ul>
          </div>
        </div>



        <div className="relative z-10 border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © 2024 Rewritter. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm mt-4 md:mt-0">
            Made with ❤️ for better writing
          </p>
        </div>


      </div>
    </footer>
  );
}