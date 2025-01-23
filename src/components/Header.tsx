import Image from 'next/image';
import footerData from '../utils/databse/InfoData.json';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-0 shadow-lg">
      <div className="flex flex-col items-center">
        <div className="flex items-center justify-center">
          <Image src={footerData.header.logoLeft} alt="Logo Izquierdo" width={80} height={80} className="object-cover mx-auto" />
          <div className="text-center mx-2">
            <h1 className="text-2xl font-bold">{footerData.header.title}</h1>
            <h3 className="text-lg mt-0">{footerData.header.subtitle}</h3>
          </div>
          <Image src={footerData.header.logoRight} alt="Logo Derecho" width={80} height={80} className="object-cover mx-auto" />
        </div>
      </div>
    </header>
  );
};

export default Header;
