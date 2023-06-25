import { Link as LinkDom } from 'react-router-dom';
import { Navbar } from '../../components/Navbar';
import profilPicture from '../../profile-pic.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { Service } from './Service';
import { Stack } from './Stack';
import { Social } from './Social';
import { Copyright } from '../../components/Copyright';
import { Link } from 'react-scroll';
import { Nav } from './Nav';
import { useSpring, animated } from 'react-spring';

export const Home = () => {
  const photoTransition = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    reset: true,
    delay: 500,
  });

  const jumbotronTransition = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    reset: true,
    delay: 1500,
  });

  const buttonTransition = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    reset: true,
    delay: 2000,
  });

  return (
    <div className="section font-sans">
      <Navbar />
      <Nav />
      <div className="container-jumbotron">
        <div className="grid grid-cols-1 lg:grid-cols-11 lg:grid-cols-11 gap-1 mt-8">
          <div className="hidden lg:inline lg:col-span-2 2xl:col-span-3"></div>
          <div className="ml-5 lg:ml-0 lg:col-span-2 2xl:col-span-1">
            <animated.div style={jumbotronTransition}>
              <p className="text-4xl ml-5 font-semibold font-serif text-white mt-10">Daniel</p>
              <p className="text-4xl ml-5 font-semibold text-white font-serif">
                Kamasi<span className="text-orange-300 font-serif">.</span>
              </p>
              <br />
              <div className="grid grid-cols-3 gap-1">
                <div className="border border-orange-300 border-b-orange-300 ml-5"></div>
              </div>
              <p className="text-sm text-slate-300 ml-5 mt-3 font-serif">Instagram | Twitter</p>
              <p className="text-sm text-slate-300 ml-5 mt-1font-serif">Github | Facebook</p>
            </animated.div>
            <animated.div style={buttonTransition}>
              <div className="ml-5 mt-8 font-serif">
                <Link to="social" spy={true} smooth={true} offset={-70} duration={500} className="text-base text-orange-300 border-solid border-2 border-orange-300 rounded-2xl px-3 py-2 tracking-wide hover:bg-orange-300 hover:text-black">
                  <LinkDom to="#">Contact Me</LinkDom>
                </Link>
              </div>
            </animated.div>
          </div>
          <div className="col-span-2 lg:col-span-3 flex justify-center 2xl:col-span-3">
            <animated.div style={photoTransition}>
              <img src={profilPicture} alt="Daniel Kamasi" className="hidden lg:inline" />
            </animated.div>
          </div>
          <div className="col-span-2 lg:col-span-3 ml-5 md:ml-0 2xl:col-span-3">
            <animated.div style={jumbotronTransition}>
              <p className="text-xs ml-5 text-orange-300 tracking-wide mt-10 font-serif">INTRODUCTION</p>
              <p className="text-2xl ml-5 text-white font-serif">Software Engineer,</p>
              <p className="text-2xl ml-5 text-white font-serif">Back-End Web Developer</p>
              <p className="text-sm ml-5 text-slate-300 mt-3 mr-10 leading-relaxed font-serif">Supercharge your software development projects with a skilled Software Engineer focused on back-end excellence.</p>
            </animated.div>
            <animated.div style={buttonTransition}>
              <div className="mt-2 mb-10 ml-5">
                <Link to="service" spy={true} smooth={true} offset={-10} duration={500} className="text-sm text-orange-300">
                  <LinkDom to="#">
                    Learn More <span> </span>
                    <FontAwesomeIcon className="animate-bounce" icon={faArrowDown} style={{ color: '#ffbe6f' }} />
                  </LinkDom>
                </Link>
              </div>
            </animated.div>
          </div>
        </div>
      </div>
      <Service />
      <Stack />
      <Social />
      <Copyright />
    </div>
  );
};
