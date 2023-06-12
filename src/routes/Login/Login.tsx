import { useForm } from 'react-hook-form';
import { Navbar } from '../../components/Navbar';

import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useAuth } from '../../context/AuthContext';

export const Login = () => {
  const { register, handleSubmit } = useForm();
  const [err, setErr] = useState('');
  const { signIn } = useAuth();

  const navigate = useNavigate();

  const onSubmit = (data: any) => {
    axios
      .post('https://b4pu21och1.execute-api.ap-southeast-3.amazonaws.com/prod/api/auth/login', data)
      .then((data) => {
        signIn(data.data._doc.username);

        localStorage.setItem('username', data.data._doc.username);
        localStorage.setItem('access-token', data.data.access_token);

        navigate('/dashboard', { replace: true });
      })
      .catch((err) => {
        setErr('Wrong Credential');
      });
  };
  return (
    <div className="section font-sans">
      <Navbar />
      <div className="grid grid-cols-3 my-16">
        <div className="col-start-2 bg-orange-300 rounded-xl px-5 py-5">
          <p className="text-black text-3xl text-center mt-4">Login</p>
          <p className="text-red-700 text-sm text-center mt-4">{err}</p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-4 mt-10 ml-4">
              <div>
                <label htmlFor="username">Username</label>
              </div>
              <div className="col-span-3">
                : <input className="bg-black text-slate-300 px-2" id="username" type="text" {...register('username')} autoFocus />
              </div>
            </div>

            <div className="grid grid-cols-4 mt-3 ml-4">
              <div>
                <label htmlFor="password">Password</label>
              </div>
              <div className="col-span-3">
                : <input className="bg-black text-slate-300 px-2" id="password" type="password" {...register('password')} />
              </div>
            </div>
            <div className="ml-4 mt-10 mb-4">
              <button className="bg-black text-slate-300 place-items-end rounded-full px-5 py-2" type="submit">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
