import { faInstagram, faSkype, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Social = () => {
  return (
    <div className="container-social" id="social">
      <br />
      <br />
      <div className="grid grid-cols-3 gap-1 text-center">
        <div className="col-start-2">
          <p className="text-xs text-orange-300 tracking-wide">CONTACT</p>
          <p className="text-3xl font-medium text-white my-2">Ways To Contact Me</p>
          <p className="text-xs md:text-sm text-slate-300 leading-relaxed">Contact me now and let's discuss how I can provide you with top-notch services, ensuring a seamless and impactful online presence for your business.</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-8 gap-4 mt-10">
        <div className="md:col-start-2 md:col-span-2 px-5 py-2" style={{ backgroundColor: '#2c2d32' }}>
          <FontAwesomeIcon icon={faWhatsapp} style={{ color: '#ffffff' }} />
          <p className="inline text-sm text-orange-300 ml-3">(+62) 851 7216 0300</p>
        </div>
        <div className="md:col-span-2 px-5 py-2" style={{ backgroundColor: '#2c2d32' }}>
          <FontAwesomeIcon icon={faEnvelope} style={{ color: '#ffffff' }} />
          <p className="inline text-sm text-orange-300 ml-3">danielkamasi.business@outlook.com</p>
        </div>
        <div className="px-5 py-2 md:col-span-2" style={{ backgroundColor: '#2c2d32' }}>
          <FontAwesomeIcon icon={faSkype} style={{ color: '#ffffff' }} />
          <p className="inline text-sm text-orange-300 ml-3">live:.cid.65188dd0b0633da3</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-10 gap-5 mt-5">
        <div className="md:col-start-4 md:col-span-2 px-5 py-2" style={{ backgroundColor: '#2c2d32' }}>
          <FontAwesomeIcon icon={faTwitter} style={{ color: '#ffffff' }} />
          <p className="inline text-sm text-orange-300 ml-3">@danieldwipaska</p>
        </div>
        <div className="px-5 py-2 md:col-span-2" style={{ backgroundColor: '#2c2d32' }}>
          <FontAwesomeIcon icon={faInstagram} style={{ color: '#ffffff' }} />
          <p className="inline text-sm text-orange-300 ml-3">@nieldwipaska</p>
        </div>
      </div>
      <br />
      <br />
    </div>
  );
};
