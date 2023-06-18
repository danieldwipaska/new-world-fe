import { faSquarePlus } from '@fortawesome/free-regular-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Editor } from '@tinymce/tinymce-react';
import axios from 'axios';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export const ContentTiles = (props: any) => {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [content, setContent] = useState('');
  const [categories, setCategories] = useState('');

  const readTitle = (event: any) => {
    setTitle(event.target.value);
  };
  const readDesc = (event: any) => {
    setDesc(event.target.value);
  };
  const readContent = (event: any) => {
    setContent(event.target.getContent());
  };
  const readCategories = (event: any) => {
    setCategories(event.target.value);
  };

  const navigate = useNavigate();

  const printPost = () => {
    const post = { title, desc, content, categories };

    axios
      .post('https://b4pu21och1.execute-api.ap-southeast-3.amazonaws.com/prod/api/posts', post, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access-token')}`,
        },
      })
      .then(function (response) {
        // console.log(response);
        props.refetch();
      })
      .catch(function (error) {
        navigate('/login', { replace: true });
      });
  };

  const deletePost = (postId: string) => {
    axios
      .delete(`https://b4pu21och1.execute-api.ap-southeast-3.amazonaws.com/prod/api/posts/${postId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access-token')}`,
        },
      })
      .then((res) => {
        props.refetch();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const newestPostDate = new Date(props.posts?.length ? props.posts[0].createdAt : null);
  const newestPostDateString = newestPostDate.toLocaleString();

  return (
    <div className="grid grid-cols-6 gap-5 ml-8 mt-5 mr-10">
      <div className="col-span-4">
        <div className="grid grid-cols-7 gap-5">
          <div className="col-span-2 rounded-xl drop-shadow-xl px-4 py-2" style={{ backgroundColor: '#474747' }}>
            <p className="text-orange-300 text-base">Count</p>
            <p className="text-8xl text-orange-300 text-center mt-2">{props.posts?.length}</p>
          </div>
          <div className="col-span-2 rounded-xl drop-shadow-xl px-4 py-2" style={{ backgroundColor: '#474747' }}>
            <p className="text-orange-300 text-base">Last Update</p>
            <p className="text-slate-300 text-2xl mt-3">{newestPostDateString !== '1/1/1970, 7:00:00 AM' ? newestPostDateString : null}</p>
          </div>
          <div className="col-span-3 rounded-xl drop-shadow-xl px-4 py-2" style={{ backgroundColor: '#474747' }}>
            <p className="text-orange-300 text-base">New</p>
            <p className="text-slate-300 text-base mt-3">{props.posts?.length ? props.posts[0].title : null}</p>
            <p className="text-slate-300 text-xs mt-1">{props.posts?.length ? props.posts[0].desc : null}</p>
          </div>
        </div>
        <div className="mt-4 rounded-xl drop-shadow-xl px-4 py-2" style={{ backgroundColor: '#474747' }}>
          <div className="grid grid-cols-2 mt-1">
            <div>
              <p className="text-orange-300 text-xl">Release a Post</p>
            </div>
            <div className="text-end">
              <Link to="#">
                <FontAwesomeIcon icon={faSquarePlus} size="2x" style={{ color: '#ffffff' }} onClick={printPost} />
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-4 mt-4">
            <div className="ml-3">
              <p className="text-slate-300 text-base">Title</p>
            </div>
            <div className="col-span-3">
              <textarea className="rounded-md drop-shadow-sm text-white ml-2 px-2 py-2" cols={40} rows={3} style={{ backgroundColor: '#3d3d3d' }} onChange={readTitle}></textarea>
            </div>
            <div className="ml-3 mt-4">
              <p className="text-slate-300 text-base">Description</p>
            </div>
            <div className="col-span-3 mt-4">
              <textarea className="rounded-md drop-shadow-sm text-white ml-2 px-2 py-2" cols={40} rows={3} style={{ backgroundColor: '#3d3d3d' }} onChange={readDesc}></textarea>
            </div>
          </div>
          <div className="mt-5">
            <Editor
              // apiKey="y7gnmtbsaxnjbgh3405ioqbdm24eit5f0ovek49w8yvq5r9q"
              initialValue=""
              init={{
                branding: false,
                height: 400,
                menubar: true,
                plugins:
                  'print preview paste searchreplace autolink directionality visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists wordcount imagetools textpattern',
                toolbar: 'formatselect | bold italic underline strikethrough | forecolor backcolor blockquote | link image media | alignleft aligncenter alignright alignjustify | numlist bullist outdent indent | removeformat',
                image_advtab: true,
                skin: 'oxide-dark',
                content_css: 'dark',
              }}
              onChange={readContent}
            />
          </div>
          <div className="grid grid-cols-4 mt-4">
            <div className="ml-3">
              <p className="text-slate-300 text-base">Category</p>
            </div>
            <div className="col-span-3">
              <input className="rounded-md drop-shadow-sm text-white ml-2 px-2" type="text" name="categories" style={{ backgroundColor: '#3d3d3d', minHeight: '30px' }} onChange={readCategories} />
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-2 rounded-xl drop-shadow-xl px-4 py-2" style={{ backgroundColor: '#474747' }}>
        <p className="text-orange-300 text-base">Posts</p>
        {props.posts?.map((post: any) => {
          return (
            <div className="mt-3 px-3 py-2 bg-orange-300 rounded-xl">
              <div className="grid grid-cols-12">
                <div className="col-span-11">
                  <p>{post.title}</p>
                </div>
                <button onClick={() => deletePost(post.postId)}>
                  <FontAwesomeIcon icon={faTimes} className="mt-1" style={{ color: '#000000' }} />
                </button>
              </div>
              <p className="text-xs">{post.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
