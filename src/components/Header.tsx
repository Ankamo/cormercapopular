import Image from "next/image";
import footerData from "../utils/databse/InfoData.json";

interface HeaderProps {
  showNav: boolean; // Nueva prop para controlar la visibilidad del nav
}

// En el componente Header.tsx
const Header = ({ showNav }: HeaderProps) => {
  return (
    <header className="bg-blue-950 text-white shadow-lg"> {/* Cambia bg-gray-800 por el color del Footer */}
      <div className="flex flex-col items-center">
        <div className="flex items-center justify-center">
          <Image
            src={footerData.header.logoLeft}
            alt="Logo Izquierdo"
            width={80}
            height={80}
            className="object-cover mx-auto"
          />
          <div className="text-center">
            <h1 className="text-2xl font-bold">{footerData.header.title}</h1>
            <h3 className="text-lg mt-0">{footerData.header.subtitle}</h3>
          </div>
          <Image
            src={footerData.header.logoRight}
            alt="Logo Derecho"
            width={80}
            height={80}
            className="object-cover mx-auto"
          />
        </div>
      </div>
      {showNav && (
        <nav className="bg-blue-950 text-white">
          <ul className="flex flex-row justify-center items-center space-x-4">
            <li>
              <a href="#identidad" className="text-white hover:underline">
                Identidad Corporativa
              </a>
            </li>
            <li className="relative group">
              <a href="#" className="text-white hover:underline">
                Normatividad
              </a>
              <ul className="absolute left-0 hidden mt-2 bg-gray-800 text-white group-hover:block">
                <li>
                  <a
                    href="#actasAsamblea"
                    className="block px-4 py-2 text-white hover:bg-gray-600"
                  >
                    Actas de Asamblea
                  </a>
                </li>
                <li>
                  <a
                    href="#actasDirectiva"
                    className="block px-4 py-2 text-white hover:bg-gray-600"
                  >
                    Actas de Directiva
                  </a>
                </li>
                <li>
                  <a
                    href="#resoluciones"
                    className="block px-4 py-2 text-white hover:bg-gray-600"
                  >
                    Resoluciones
                  </a>
                </li>
                <li>
                  <a
                    href="#politicas"
                    className="block px-4 py-2 text-white hover:bg-gray-600"
                  >
                    Políticas Corporativas
                  </a>
                </li>
                <li>
                  <a
                    href="#reglamento"
                    className="block px-4 py-2 text-white hover:bg-gray-600"
                  >
                    Reglamento Interno de Trabajo
                  </a>
                </li>
                <li>
                  <a
                    href="#manual"
                    className="block px-4 py-2 text-white hover:bg-gray-600"
                  >
                    Manual de Funciones
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#contactos" className="text-white hover:underline">
                Contactos
              </a>
            </li>
            <li className="relative group">
              <a href="#" className="text-white hover:underline">
                Corporados
              </a>
              <ul className="absolute left-0 hidden mt-2 bg-gray-800 text-white group-hover:block">
                <li>
                  <a
                    href="#asambleaGeneral"
                    className="block px-4 py-2 text-white hover:bg-gray-600"
                  >
                    Asamblea General de Corporados
                  </a>
                </li>
                <li>
                  <a
                    href="#juntaDirectiva"
                    className="block px-4 py-2 text-white hover:bg-gray-600"
                  >
                    Junta Directiva
                  </a>
                </li>
                <li>
                  <a
                    href="#organigrama"
                    className="block px-4 py-2 text-white hover:bg-gray-600"
                  >
                    Organigrama
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;