import { useNavigate, useParams } from 'react-router-dom';
import { Navbar } from '../../components/Navbar';
import { Title } from './Title';
import { Content } from './Content';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Copyright } from '../../components/Copyright';
import { useState } from 'react';

export const Article = () => {
  const { postId } = useParams();

  const [loadingSpin, setLoadingSpin] = useState(false);

  const navigate = useNavigate();

  const { data: post } = useQuery(['article'], () => {
    return axios
      .get(`https://b4pu21och1.execute-api.ap-southeast-3.amazonaws.com/prod/api/posts/${postId}`)
      .then((res) => {
        setLoadingSpin(true);
        return res.data;
      })
      .catch((err) => {
        return navigate('/');
      });
  });

  return (
    <div className="section font-serif">
      <Navbar />
      <Title post={post} spin={loadingSpin} />
      <Content post={post} spin={loadingSpin} />
      <br />
      <br />
      <br />
      <Copyright />
    </div>
  );
};
