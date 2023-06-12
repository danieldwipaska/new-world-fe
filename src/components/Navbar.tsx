import { NavLink } from 'react-router-dom';
// import { NavLin} from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className="flex space-x-4 bg-gray-700 px-7 pb-2">
      <NavLink to="/" className="font-serif text-base px-3 py-2 mt-2 rounded-lg text-white">
        NewWorld
      </NavLink>
      <NavLink to="/" className="font-medium px-3 py-2 mt-2 rounded-lg text-white hover:bg-slate-100 hover:text-slate-900">
        Home
      </NavLink>
      <NavLink to="/login" className="px-3 py-2 mt-2 rounded-lg text-white hover:bg-orange-300 hover:text-slate-900">
        Login
      </NavLink>
    </nav>
  );
};
