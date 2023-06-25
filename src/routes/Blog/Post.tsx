import { faCalendarDay, faTags } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Buffer } from 'buffer';

export const Post = (props: any) => {
  const parseCreatedAt = (createAt: any) => {
    const date = new Date(createAt);
    return date.toDateString();
  };

  const posts = props.posts;

  if (props.category === '') {
    return posts?.map((post: any) => {
      return (
        <div className="md:hover:scale-105 transition duration-150">
          <img src={`data:${post.thumbnail.imgType};base64,${Buffer.from(post.thumbnail.data).toString('base64')}`} alt="No Alt" className="rounded-xl" />
          <p className="text-base text-gray-300 font-bold mt-6 mx-4">{post.title}</p>
          <p className="text-xs text-zinc-400 mt-5 mx-4 leading-6">{post.desc}</p>
          <p className="border border-zinc-700 mt-3 mx-4"></p>
          <div className="text-center mt-4">
            <FontAwesomeIcon icon={faCalendarDay} style={{ color: '#ffffff' }} />
            <p className="inline mx-3 text-xs text-zinc-400">{parseCreatedAt(post.createdAt)}</p>
            <FontAwesomeIcon icon={faTags} style={{ color: '#ffffff' }} className="ml-5" />
            <p className="inline mx-3 text-xs text-zinc-400">{post.categories}</p>
          </div>
          <div className="text-center mt-5 mx-4">
            <button
              className="py-2 border border-gray-300 text-gray-300 hover:border-orange-300 hover:text-black hover:bg-orange-300 rounded-full"
              style={{ width: '100%' }}
              onClick={() => {
                window.open(`/blog/${post.postId}`, '_blank');
              }}
            >
              Read More
            </button>
          </div>
        </div>
      );
    });
  } else {
    const filteredPost = posts?.filter((post: any) => post.categories === props.category);

    return filteredPost?.map((post: any) => {
      return (
        <div className="md:hover:scale-105 transition duration-150">
          <img src={`data:${post.thumbnail.imgType};base64,${Buffer.from(post.thumbnail.data).toString('base64')}`} alt="No Alt" className="rounded-xl" />
          <p className="text-base text-gray-300 font-bold mt-5 mx-4">{post.title}</p>
          <p className="text-xs text-zinc-400 mt-5 mx-4 leading-6">{post.desc}</p>
          <p className="border border-zinc-700 mt-3 mx-4"></p>
          <div className="text-center mt-4">
            <FontAwesomeIcon icon={faCalendarDay} style={{ color: '#ffffff' }} />
            <p className="inline mx-3 text-xs text-zinc-400">{parseCreatedAt(post.createdAt)}</p>
            <FontAwesomeIcon icon={faTags} style={{ color: '#ffffff' }} className="ml-5" />
            <p className="inline mx-3 text-xs text-zinc-400">{post.categories}</p>
          </div>
          <div className="text-center mt-5 mx-4">
            <button
              className="py-2 border border-gray-300 text-gray-300 hover:border-orange-300 hover:text-black hover:bg-orange-300 rounded-full"
              style={{ width: '100%' }}
              onClick={() => {
                window.open(`/blog/${post.postId}`, '_blank');
              }}
            >
              Read More
            </button>
          </div>
        </div>
      );
    });
  }
};
