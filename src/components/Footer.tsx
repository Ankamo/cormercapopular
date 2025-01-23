import '@fortawesome/fontawesome-free/css/all.min.css';
import footerData from '../utils/databse/InfoData.json';

const Footer = () => {
  return (
    <footer className='bg-blue-950 text-white py-1 px-4 mt-10 flex flex-col'>
      <div className='flex justify-between'>
        <div className='flex-1 text-center'>
          <h3>Contacto</h3>
          <p><i className="fas fa-envelope"></i> {/* Ícono de Email */} {footerData.footer.contactInfo.email}</p>
          <p><i className="fas fa-phone"></i> {/* Ícono de Teléfono */} {footerData.footer.contactInfo.phone}</p>
          <p><i className="fas fa-map-marker-alt"></i> {/* Ícono de Dirección */} {footerData.footer.contactInfo.address}</p>
          <p><i className="fas fa-map-marker-alt"></i> {/* Ícono de Barrio */} {footerData.footer.contactInfo.barrio}</p>
          <p><i className="fas fa-city"></i> {/* Ícono de Ciudad */} {footerData.footer.contactInfo.Ciudad}</p>
        </div>
        <div className='flex-1 text-center'>
          <h3>Redes Sociales</h3>
          <ul>{footerData.footer.socialLinks.map(link => (<li key={link.name}><a href={link.url} target='_blank' rel='noopener noreferrer'>{link.name}</a></li>))}</ul>
        </div>
        <div className='flex-1 text-center'>
          <h3>Créditos</h3>
          <p>Desarrollado por <a href={footerData.footer.credits.devBy.url} target='_blank' rel='noopener noreferrer' className='text-blue-400 hover:text-blue-300'>{footerData.footer.credits.devBy.name}</a></p>
          <p>Propiedad de <a href={footerData.footer.credits.propiedad.url} target='_blank' rel='noopener noreferrer' className='text-blue-400 hover:text-blue-300'>{footerData.footer.credits.propiedad.name}</a></p>
          <p>Esta Corporación administra: <a href={footerData.footer.credits.corporacion.url} target='_blank' rel='noopener noreferrer' className='text-blue-400 hover:text-blue-300'>{footerData.footer.credits.corporacion.name}</a></p>
          <p>&copy; {new Date().getFullYear()}. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
