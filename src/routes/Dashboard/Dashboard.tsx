import { useQuery } from '@tanstack/react-query';
import { ContentTiles } from './ContentTiles';
import { TitleBar } from './TitleBar';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export const Dashboard = () => {
  const {
    data: posts,
    isLoading,
    refetch,
  } = useQuery(['post'], () => {
    return axios
      .get('https://b4pu21och1.execute-api.ap-southeast-3.amazonaws.com/prod/api/posts')
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        return console.log(err);
      });
  });

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .post(
        'https://b4pu21och1.execute-api.ap-southeast-3.amazonaws.com/prod/api/auth/verify',
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('access-token')}`,
          },
        }
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        navigate('/login', { replace: true });
      });
  }, [navigate]);

  return (
    <div className="section font-sans">
      <br />
      <div className="grid grid-cols-4 mt-5">
        <div className="bg-orange-300"></div>
        <div className="col-span-3">
          <TitleBar />
          <ContentTiles posts={posts} refetch={refetch} isLoading={isLoading} />
        </div>
      </div>
    </div>
  );
};
