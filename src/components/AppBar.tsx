'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function AppBar() {
  const pathname = usePathname(); // Obtiene la ruta actual

  return (
    <nav className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div className="text-2xl font-bold">
          <Link href="/">MyApp</Link>
        </div>
        <div className="flex space-x-4">
          <Link
            href="/"
            className={`hover:text-gray-300 ${
              pathname === '/' ? 'font-bold underline' : ''
            }`}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`hover:text-gray-300 ${
              pathname === '/about' ? 'font-bold underline' : ''
            }`}
          >
            About
          </Link>
          <Link
            href="/products"
            className={`hover:text-gray-300 ${
              pathname === '/products' ? 'font-bold underline' : ''
            }`}
          >
            Products
          </Link>
          <Link
            href="/contact"
            className={`hover:text-gray-300 ${
              pathname === '/contact' ? 'font-bold underline' : ''
            }`}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}