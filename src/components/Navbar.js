import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto p-4 flex items-center justify-between">
        {/* Logo o nombre de la galería */}
        <div className="text-2xl font-bold text-gray-800">
          Mi Galería
        </div>
        
        {/* Menú de navegación */}
        <ul className="flex space-x-4">
          <li><a href="#" className="text-gray-700 hover:text-gray-900">Artesanías</a></li>
          <li><a href="#" className="text-gray-700 hover:text-gray-900">Pinturas</a></li>
          <li><a href="#" className="text-gray-700 hover:text-gray-900">Obra artística</a></li>
        </ul>

        {/* Barra de búsqueda */}
        <div className="flex items-center space-x-2">
          <input
            type="text"
            placeholder="Buscar..."
            className="px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-400"
          />
        </div>

        {/* Avatar */}
        <div className="flex items-center ml-4">
          <Image
            src="/avatar.jpg"  // Asegúrate de tener esta imagen en la carpeta public
            alt="Avatar"
            width={40}
            height={40}
            className="rounded-full"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
