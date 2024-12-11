'use client';

export default function Footer() {
  return (
    <footer className="bg-[#3B432B] text-white">
      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Nosotros Section */}
          <div>
            <h3 className="text-sm font-medium tracking-wide mb-4">Nosotros</h3>
         
          </div>

          {/* Ayuda Section */}
          <div>
            <h3 className="text-sm font-medium tracking-wide mb-4">AYUDA</h3>

          </div>

          {/* Servicio al Cliente Section */}
          <div>
            <h3 className="text-sm font-medium tracking-wide mb-4">SERVICIO AL CLIENTE</h3>

          </div>

          {/* Additional Ayuda Section */}
          <div>
            <h3 className="text-sm font-medium tracking-wide mb-4">AYUDA</h3>

          </div>
        </div>
      </div>
    </footer>
  );
}

