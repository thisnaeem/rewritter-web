'use client';

import { useRef } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import { Marquee } from '@/components/ui/3d-testimonials';
import ScrollFloat from '@/components/ui/scroll-float';

const testimonials = [
  {
    name: 'Sarah Johnson',
    username: '@sarah',
    body: 'Rewritter has completely transformed my writing workflow. The AI suggestions are incredibly accurate!',
    img: 'https://images.unsplash.com/photo-1494790108755-2616b9c5e8e1?w=150&h=150&fit=crop&crop=face',
    country: '🇺🇸 USA',
  },
  {
    name: 'Michael Chen',
    username: '@michael',
    body: 'As a non-native English speaker, Rewritter helps me write with confidence. Amazing tool!',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    country: '🇨🇳 China',
  },
  {
    name: 'Emily Rodriguez',
    username: '@emily',
    body: 'The summarization feature is a game-changer for processing long reports quickly.',
    img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    country: '🇪🇸 Spain',
  },
  {
    name: 'David Kim',
    username: '@david',
    body: 'Chrome extension works seamlessly on every website. Love the instant corrections!',
    img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    country: '🇰🇷 Korea',
  },
  {
    name: 'Anna Mueller',
    username: '@anna',
    body: 'Perfect for academic writing. The context-aware suggestions are spot-on.',
    img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face',
    country: '🇩🇪 Germany',
  },
  {
    name: 'James Wilson',
    username: '@james',
    body: 'Lightning fast performance and incredibly intuitive interface. Highly recommended!',
    img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
    country: '🇬🇧 UK',
  },
  {
    name: 'Maria Santos',
    username: '@maria',
    body: 'The AI understands context better than any other tool I have used before.',
    img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face',
    country: '🇧🇷 Brazil',
  },
  {
    name: 'Alex Thompson',
    username: '@alex',
    body: 'Great for content creation. Saves me hours of editing time every week.',
    img: 'https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=150&h=150&fit=crop&crop=face',
    country: '🇨🇦 Canada',
  },
  {
    name: 'Priya Patel',
    username: '@priya',
    body: 'Excellent for business communications. Makes my emails sound professional.',
    img: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face',
    country: '🇮🇳 India',
  },
  {
    name: 'Lucas Martinez',
    username: '@lucas',
    body: 'The grammar corrections are so accurate. It catches mistakes I never would have noticed.',
    img: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=150&h=150&fit=crop&crop=face',
    country: '🇲🇽 Mexico',
  },
  {
    name: 'Sophie Laurent',
    username: '@sophie',
    body: 'Rewritter makes my French-to-English translations sound natural and fluent.',
    img: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=face',
    country: '🇫🇷 France',
  },
  {
    name: 'Raj Sharma',
    username: '@raj',
    body: 'Perfect for technical documentation. The AI understands complex terminology.',
    img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face',
    country: '🇮🇳 India',
  },
  {
    name: 'Emma Watson',
    username: '@emma',
    body: 'The Chrome extension is a lifesaver for social media posts and emails.',
    img: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=150&h=150&fit=crop&crop=face',
    country: '🇦🇺 Australia',
  },
  {
    name: 'Carlos Mendez',
    username: '@carlos',
    body: 'Incredible tool for bloggers. My content quality has improved dramatically.',
    img: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=150&h=150&fit=crop&crop=face',
    country: '🇦🇷 Argentina',
  },
  {
    name: 'Yuki Tanaka',
    username: '@yuki',
    body: 'Helps me write better English for my international clients. Very reliable.',
    img: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=150&h=150&fit=crop&crop=face',
    country: '🇯🇵 Japan',
  },
];

function TestimonialCard({ img, name, username, body, country }: (typeof testimonials)[number]) {
  return (
    <Card className="w-72 mx-2 my-2 bg-white border border-gray-200 shadow-sm">
      <CardContent className="p-5">
        <div className="flex items-center gap-3 mb-3">
          <Avatar className="h-10 w-10">
            <AvatarImage src={img} alt={name} />
            <AvatarFallback className="bg-gray-100 text-gray-700">{name[0]}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-gray-900 text-sm">{name}</span>
              <span className="text-xs">{country}</span>
            </div>
            <p className="text-xs text-gray-500">{username}</p>
          </div>
        </div>
        <blockquote className="text-gray-700 text-sm leading-relaxed">"{body}"</blockquote>
      </CardContent>
    </Card>
  );
}

export default function TestimonialsSection() {
  const scrollContainerRef = useRef(null);

  return (
    <section className="bg-white py-20 lg:py-28 overflow-hidden" ref={scrollContainerRef}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <ScrollFloat
            scrollContainerRef={scrollContainerRef}
            containerClassName="mb-6"
            textClassName="text-4xl lg:text-5xl font-bold text-gray-900"
          >
            What Our Users Say
          </ScrollFloat>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of satisfied writers who trust Rewritter to perfect their content
          </p>
        </div>
      </div>
      
      <div className="relative flex h-96 w-full flex-row items-center justify-center overflow-hidden bg-white [perspective:300px]">
        <div
          className="flex flex-row items-center gap-3"
          style={{
            transform: 'translateX(-50px) translateY(0px) translateZ(-50px) rotateX(15deg) rotateY(-8deg) rotateZ(15deg)',
          }}
        >
          {/* Column 1 */}
          <Marquee vertical pauseOnHover repeat={4} className="[--duration:35s]">
            {testimonials.slice(0, 3).map((review) => (
              <TestimonialCard key={review.username} {...review} />
            ))}
          </Marquee>

          {/* Column 2 */}
          <Marquee vertical pauseOnHover reverse repeat={4} className="[--duration:40s]">
            {testimonials.slice(3, 6).map((review) => (
              <TestimonialCard key={review.username} {...review} />
            ))}
          </Marquee>

          {/* Column 3 */}
          <Marquee vertical pauseOnHover repeat={4} className="[--duration:45s]">
            {testimonials.slice(6, 9).map((review) => (
              <TestimonialCard key={review.username} {...review} />
            ))}
          </Marquee>

          {/* Column 4 */}
          <Marquee vertical pauseOnHover reverse repeat={4} className="[--duration:38s]">
            {testimonials.slice(9, 12).map((review) => (
              <TestimonialCard key={review.username} {...review} />
            ))}
          </Marquee>

          {/* Column 5 */}
          <Marquee vertical pauseOnHover repeat={4} className="[--duration:42s]">
            {testimonials.slice(12, 15).map((review) => (
              <TestimonialCard key={review.username} {...review} />
            ))}
          </Marquee>

          {/* Gradient overlays */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-white"></div>
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-white"></div>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-white"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-white"></div>
        </div>
      </div>
    </section>
  );
}