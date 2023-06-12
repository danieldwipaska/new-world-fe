import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

export const TitleBar = () => {
  const { user, signOut } = useAuth();

  const navigate = useNavigate();

  const logout = () => {
    signOut();
    navigate('/', { replace: true });
  };

  return (
    <div className="grid grid-cols-2">
      <div>
        <p className="text-4xl font-semibold text-white ml-8">Dashboard</p>
      </div>
      <div className="text-end">
        <p className="inline text-base text-white text-right mr-2">{user.username}</p>
        <button className="inline text-base bg-red-400 text-black rounded-full mr-10 px-3 py-1" onClick={logout}>
          Logout
        </button>
      </div>
    </div>
  );
};
