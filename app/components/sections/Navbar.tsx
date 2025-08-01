import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Image
              src="/logo.png"
              alt="Rewritter Logo"
              width={40}
              height={40}
              className="rounded-lg"
            />
            <span className="text-2xl font-bold text-gray-900">Rewritter</span>
          </div>
          <Link
            href="/waitlist"
            className="bg-[#171717] hover:bg-[#2a2a2a] text-white px-6 py-2.5 rounded-full font-medium transition-colors shadow-sm"
          >
            Join Waitlist
          </Link>
        </div>
      </div>
    </nav>
  );
}