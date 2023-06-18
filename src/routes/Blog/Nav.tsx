import { NavLink } from 'react-router-dom';

export const Nav = (props: any) => {
  return (
    <nav className="flex space-x-4 text-sm">
      <NavLink to="#" className="px-5 py-2 mt-2 rounded-full text-white hover:bg-slate-100 hover:text-slate-900" onClick={() => props.setCat('')}>
        All
      </NavLink>
      <NavLink to="#" className="px-5 py-2 mt-2 rounded-full text-white hover:bg-slate-100 hover:text-slate-900" onClick={() => props.setCat('Energy')}>
        Energy
      </NavLink>
      <NavLink to="#" className="px-5 py-2 mt-2 rounded-full text-white hover:bg-slate-100 hover:text-slate-900" onClick={() => props.setCat('Computing')}>
        Computing
      </NavLink>
      <NavLink to="#" className="px-5 py-2 mt-2 rounded-full text-white hover:bg-slate-100 hover:text-slate-900" onClick={() => props.setCat('Music')}>
        Music
      </NavLink>
    </nav>
  );
};
