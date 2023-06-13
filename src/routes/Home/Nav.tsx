import { NavLink } from 'react-router-dom';
import { Link } from 'react-scroll';
import { Link as LinkDom } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

export const Nav = () => {
  return (
    <nav className="flex justify-end space-x-4 ml-10 mr-10">
      <Link to="social" spy={true} smooth={true} offset={-70} duration={500} className="font-medium px-3 py-2 mt-2 rounded-lg text-white hover:scale-110 transition duration-150">
        <NavLink to="#">Contact</NavLink>
      </Link>
      <p className="py-2 mt-2 text-slate-200">|</p>
      <LinkDom to="https://instagram.com/nieldwipaska" target="_blank">
        <FontAwesomeIcon icon={faInstagram} className="py-3 mt-2 hover:scale-125 transition duration-150" style={{ color: '#ffffff' }} />
      </LinkDom>
      <LinkDom to="https://twitter.com/danieldwipaska" target="_blank">
        <FontAwesomeIcon icon={faTwitter} className="py-3 mt-2 hover:scale-125 transition duration-150" style={{ color: '#ffffff' }} />
      </LinkDom>
      <LinkDom to="https://github.com/danieldwipaska" target="blank">
        <FontAwesomeIcon icon={faGithub} className="py-3 mt-2 hover:scale-125 transition duration-150" style={{ color: '#ffffff' }} />
      </LinkDom>
    </nav>
  );
};
