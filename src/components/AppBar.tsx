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
            href="/cart"
            className={`hover:text-gray-300 ${
              pathname === '/about' ? 'font-bold underline' : ''
            }`}
          >
            cart
          </Link>
          <Link
            href="/catalog"
            className={`hover:text-gray-300 ${
              pathname === '/products' ? 'font-bold underline' : ''
            }`}
          >
            catalog
          </Link>
          <Link
            href="/discover"
            className={`hover:text-gray-300 ${
              pathname === '/contact' ? 'font-bold underline' : ''
            }`}
          >
            discover
          </Link>
          <Link
            href="/fabrics"
            className={`hover:text-gray-300 ${
              pathname === '/contact' ? 'font-bold underline' : ''
            }`}
          >
            fabrics
          </Link>
          <Link
            href="/product"
            className={`hover:text-gray-300 ${
              pathname === '/contact' ? 'font-bold underline' : ''
            }`}
          >
            product
          </Link>
        </div>
      </div>
    </nav>
  );
}