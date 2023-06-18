import { faFacebook, faLinkedin, faReddit, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useState } from 'react';

import { Link } from 'react-router-dom';

export const Content = (props: any) => {
  const [loadingSpin, setLoadingSpin] = useState(false);

  const { data: posts } = useQuery(['posts'], () => {
    return axios
      .get(`https://b4pu21och1.execute-api.ap-southeast-3.amazonaws.com/prod/api/posts`)
      .then((res) => {
        setLoadingSpin(true);
        return randomize(res.data);
      })
      .catch((err) => {
        return console.log(err);
      });
  });

  function randomize(values: any) {
    let index = values.length,
      randomIndex;

    // While there remain elements to shuffle.
    while (index !== 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * index);
      index--;

      // And swap it with the current element.
      [values[index], values[randomIndex]] = [values[randomIndex], values[index]];
    }

    return values;
  }

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-9 gap-3 mt-7">
        <div className="hidden md:block col-span-2 md:mx-16">
          <div className="grid grid-cols-3 border mt-2">
            <div className="border border-gray-600 text-center">
              <Link to={`http://www.linkedin.com/shareArticle?mini=true&url=${window.location}`} target="_blank">
                <FontAwesomeIcon icon={faLinkedin} className="py-2 mt-2 hover:scale-125 transition duration-150" style={{ color: '#ffffff' }} />
              </Link>
            </div>
            <div className="border border-gray-600 text-center">
              <Link to={`https://www.facebook.com/sharer/sharer.php?u=${window.location}`} target="_blank">
                <FontAwesomeIcon icon={faFacebook} className="py-2 mt-2 hover:scale-125 transition duration-150" style={{ color: '#ffffff' }} />
              </Link>
            </div>
            <div className="border border-gray-600 text-center">
              <Link to={`http://twitter.com/share?url=${window.location}`} target="_blank">
                <FontAwesomeIcon icon={faTwitter} className="py-2 mt-2 hover:scale-125 transition duration-150" style={{ color: '#ffffff' }} />
              </Link>
            </div>
            <div className="border border-gray-600 text-center">
              <Link to={`https://api.whatsapp.com/send?text=${window.location}`} target="_blank">
                <FontAwesomeIcon icon={faWhatsapp} className="py-2 mt-2 hover:scale-125 transition duration-150" style={{ color: '#ffffff' }} />
              </Link>
            </div>
            <div className="border border-gray-600 text-center">
              <Link to={`http://www.reddit.com/submit?url=${window.location}`} target="_blank">
                <FontAwesomeIcon icon={faReddit} className="py-2 mt-2 hover:scale-125 transition duration-150" style={{ color: '#ffffff' }} />
              </Link>
            </div>
            <div className="border border-gray-600 text-center">
              <Link to={`mailto:?subject=Share&body=Check out this site ${window.location}`} target="_blank">
                <FontAwesomeIcon icon={faEnvelope} className="py-2 mt-2 hover:scale-125 transition duration-150" style={{ color: '#ffffff' }} />
              </Link>
            </div>
          </div>
        </div>
        <div className="md:col-span-4 mx-10 md:ml-0">
          <p className="text-gray-200">
            <div dangerouslySetInnerHTML={{ __html: props.post ? props.post.content : null }}></div>
          </p>
        </div>
        <div className="hidden md:block md:col-span-3 mx-7">
          <p className="text-gray-200 text-sm font-serif leading-6 font-sans tracking-widest">OTHER ARTICLES</p>
          <p className="text-center border border-gray-400 mt-5" style={{ width: '50px' }}></p>

          {!loadingSpin ? (
            <div className="text-center">
              <svg className="animate-spin -ml-1 mr-3 h-10 w-10 text-white inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            </div>
          ) : (
            posts?.map((post: any, i: number) => {
              if (i >= 5) {
                return null;
              }
              return (
                <div className="grid grid-cols-12 gap-5 mt-7 hover:scale-105 transition duration-150">
                  <div className="border col-span-2 border-gray-300 rounded-sm">
                    <p className="text-center text-base text-gray-300 py-2">{i + 1}</p>
                  </div>
                  <div className="col-span-10 text-gray-400 text-xs">
                    <Link
                      to="#"
                      onClick={() => {
                        window.open(`/blog/${post.postId}`, '_self');
                      }}
                    >
                      {post.title}
                    </Link>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};
