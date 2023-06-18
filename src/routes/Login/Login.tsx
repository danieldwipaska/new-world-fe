import { useForm } from 'react-hook-form';
import { Navbar } from '../../components/Navbar';

import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useAuth } from '../../context/AuthContext';

export const Login = () => {
  const { register, handleSubmit } = useForm();
  const [err, setErr] = useState('');
  const [loginText, setLoginText] = useState('Login');
  const [loginSpin, setLoginSpin] = useState(false);
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
        setLoginSpin(false);
        setLoginText('Login');
      });
  };
  return (
    <div className="section font-sans">
      <Navbar />
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-3 my-16 px-3 lg:px-0">
        <div className="col-start-1 md:col-start-2 md:col-span-2 lg:col-start-2 lg:col-span-1 bg-orange-300 rounded-xl px-5 py-5">
          <p className="text-black text-xl text-center mt-4 italic inline">Admin Only</p>
          <p className="text-red-700 text-sm text-center mt-4">{err}</p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-4 gap-2 mt-10 ml-4">
              <div>
                <label htmlFor="username">Username</label>
              </div>
              <div className="col-span-3">
                : <input className="bg-black text-slate-300 px-2" id="username" type="text" {...register('username')} autoFocus />
              </div>
            </div>

            <div className="grid grid-cols-4 gap-2 mt-3 ml-4">
              <div>
                <label htmlFor="password">Password</label>
              </div>
              <div className="col-span-3">
                : <input className="bg-black text-slate-300 px-2" id="password" type="password" {...register('password')} />
              </div>
            </div>
            <div className="ml-4 mt-10 mb-4">
              <button
                className="bg-black text-slate-300 place-items-end rounded-full px-5 py-2"
                type="submit"
                onClick={() => {
                  setLoginSpin(true);
                  setLoginText('Proccessing');
                }}
              >
                {loginSpin ? (
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                ) : null}
                {loginText}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
