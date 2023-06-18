import { NavLink } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className="flex space-x-4 bg-gray-700 px-7 pb-2">
      {/* <NavLink to="/" className="font-serif text-base pl-3 pt-2 mt-2 rounded-lg text-white">
        <img src={logo} alt="Daniel Kamasi" className="hidden md:inline" width="25px" />
      </NavLink> */}
      <NavLink to="/" className="font-semibold px-3 py-2 mt-2 rounded-lg text-white hover:bg-slate-100 hover:text-slate-900">
        Home
      </NavLink>
      <NavLink to="/project" className="font-semibold px-3 py-2 mt-2 rounded-lg text-white hover:bg-slate-100 hover:text-slate-900">
        Projects
      </NavLink>
      <NavLink to="/blog" className="font-semibold px-3 py-2 mt-2 rounded-lg text-white hover:bg-slate-100 hover:text-slate-900">
        Blog
      </NavLink>
      <NavLink to="/login" className="italic px-3 py-2 mt-2 rounded-lg text-white hover:bg-orange-300 hover:text-slate-900">
        Admin
      </NavLink>
    </nav>
  );
};
