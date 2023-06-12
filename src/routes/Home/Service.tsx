import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faLaptopCode, faRocket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Service = () => {
  return (
    <div className="container-service text-center" id="service">
      <br />
      <br />
      <div className="grid grid-cols-3 gap-1">
        <div className="col-start-2">
          <p className="text-xs text-orange-300 tracking-wide">SERVICES</p>
          <p className="text-3xl font-medium text-white my-2">What I Am Great At </p>
          <p className="text-xs md:text-sm text-slate-300 leading-relaxed">From personal websites to corporate platforms, I specialize in building websites and applications, delivering tailored solutions for your online presence.</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-6 gap-3 mt-8">
        <div className="md:col-start-2 mx-2 md:mx-0 px-5 py-10" style={{ backgroundColor: '#2c2d32' }}>
          <FontAwesomeIcon icon={faLaptopCode} style={{ color: '#cacaca' }} className="fa-3x" />
          <p className="text-base text-white mt-4">Static Websites</p>
          <p className="text-xs text-slate-300 mx-3 mt-2">for professional, community & company</p>
        </div>
        <div className="py-10 px-5" style={{ backgroundColor: '#2c2d32' }}>
          <FontAwesomeIcon icon={faDatabase} style={{ color: '#cacaca' }} className="fa-3x" />
          <p className="text-base text-white mt-4">Back-End Development</p>
          <p className="text-xs text-slate-300 mx-3 mt-2">for developers who need a back-end application</p>
        </div>
        <div className="py-10 px-5" style={{ backgroundColor: '#2c2d32' }}>
          <FontAwesomeIcon icon={faWhatsapp} style={{ color: '#cacaca' }} className="fa-3x" />
          <p className="text-base text-white mt-4">Whatsapp Automation</p>
          <p className="text-xs text-slate-300 mx-3 mt-2">for personal business and government</p>
        </div>
        <div className="py-10 px-5" style={{ backgroundColor: '#2c2d32' }}>
          <FontAwesomeIcon icon={faRocket} style={{ color: '#cacaca' }} className="fa-3x" />
          <p className="text-base text-white mt-4">Web Application</p>
          <p className="text-xs text-slate-300 mx-3 mt-2">for specific system demands</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-6 gap-5 mt-8">
        <div className="md:col-start-3 rounded-full mx-4 md:mx-0 py-14" style={{ backgroundColor: '#2c2d32' }}>
          <p className="text-6xl text-orange-400 text-medium">12+</p>
          <p className="text-sm text-slate-400 mt-3">Months of Experience</p>
        </div>
        <div className="rounded-full mx-4 md:mx-0 py-14" style={{ backgroundColor: '#2c2d32' }}>
          <p className="text-6xl text-orange-400 text-medium">10k+</p>
          <p className="text-sm text-slate-400 mt-3">Lines of Code</p>
        </div>
      </div>
      <br />
      <br />
    </div>
  );
};
