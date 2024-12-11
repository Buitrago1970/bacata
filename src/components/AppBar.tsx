'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
// import { ShoppingCart } from 'lucide-react';

export default function AppBar() {
  const pathname = usePathname();

  return (
    <nav className="bg-[#1C1C1C] text-white">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Left Navigation */}
          <div className="flex items-center space-x-8">
            <Link
              href="/nosotros"
              className={`text-sm tracking-wide hover:text-gray-300 ${
                pathname === '/nosotros' ? 'font-medium' : ''
              }`}
            >
              NOSOTROS
            </Link>
            <Link
              href="/capsulas"
              className={`text-sm tracking-wide hover:text-gray-300 ${
                pathname === '/capsulas' ? 'font-medium' : ''
              }`}
            >
              CÁPSULAS
            </Link>
            <Link
              href="/nuevo"
              className={`text-sm tracking-wide hover:text-gray-300 ${
                pathname === '/nuevo' ? 'font-medium' : ''
              }`}
            >
              NUEVO
            </Link>
          </div>

          {/* Center Logo */}
          <div className="text-3xl font-bold tracking-wider absolute left-1/2 transform -translate-x-1/2">
            <Link href="/">BACATÁ</Link>
          </div>

          {/* Right Navigation */}
          <div className="flex items-center space-x-8">
            <Link
              href="/catalogo"
              className={`text-sm tracking-wide hover:text-gray-300 ${
                pathname === '/catalogo' ? 'font-medium' : ''
              }`}
            >
              CATALOGO
            </Link>
            <Link
              href="/descubre"
              className={`text-sm tracking-wide hover:text-gray-300 ${
                pathname === '/descubre' ? 'font-medium' : ''
              }`}
            >
              DESCUBRE
            </Link>
            <Link
              href="/telas"
              className={`text-sm tracking-wide hover:text-gray-300 ${
                pathname === '/telas' ? 'font-medium' : ''
              }`}
            >
              TELAS
            </Link>
            <Link href="/cart" className="hover:text-gray-300">
              {/* <ShoppingCart className="h-5 w-5" /> */}
              <span className="sr-only">Cart</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

