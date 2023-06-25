import { Navbar } from '../../components/Navbar';
import { Nav } from './Nav';
import { Copyright } from '../../components/Copyright';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useState } from 'react';
import { Post } from './Post';

export const Blog = () => {
  const [category, setCategory] = useState('');
  const [loadingSpin, setLoadingSpin] = useState(false);

  const { data: posts } = useQuery(['post'], () => {
    return axios
      .get('https://b4pu21och1.execute-api.ap-southeast-3.amazonaws.com/prod/api/posts')
      .then((res) => {
        setLoadingSpin(true);
        return res.data;
      })
      .catch((err) => {
        return console.log(err);
      });
  });

  return (
    <div className="section font-serif">
      <Navbar />
      <div className="grid grid-cols-1 mt-4 mx-2 md:mx-20 py-4 md:pt-16 md:pb-5 md:px-14 px-5">
        <div className="mt-9 md:mt-4">
          <p className="font-sans text-5xl text-white text-bold font-serif">Thought & Writings</p>
        </div>
        <div className="mt-5">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div>
              <p className="text-sm text-gray-400 leading-7 font-serif">"I love Physics, Computer Science, and Music, for these three fields will guide us making better World."</p>
            </div>
          </div>
        </div>
        <div className="mt-7">
          <Nav setCat={setCategory} />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-7 mx-3 md:mx-20">
        {!loadingSpin ? (
          <div className="text-center col-span-3">
            <svg className="animate-spin -ml-1 mr-3 h-10 w-10 text-white inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          </div>
        ) : (
          <Post posts={posts} category={category} />
        )}
      </div>
      <br />
      <Copyright />
    </div>
  );
};
