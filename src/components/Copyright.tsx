import { faCopyright } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Copyright = () => {
  return (
    <div className="container-copyright border-t-2 border-orange-300">
      <p className="text-xs text-slate-300 text-center my-2">
        <FontAwesomeIcon icon={faCopyright} style={{ color: '#ffffff' }} />
        <span className="ml-2">Copyright - danielkamasi | All rights reserved.</span>
      </p>
    </div>
  );
};
