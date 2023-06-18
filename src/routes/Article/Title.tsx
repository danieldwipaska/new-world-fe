export const Title = (props: any) => {
  const date = new Date(props.post ? props.post.createdAt : null);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-4 mt-10">
        {!props.spin ? (
          <div className="text-center col-span-4">
            <svg className="animate-spin -ml-1 mr-3 h-10 w-10 text-white inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          </div>
        ) : (
          <div className="col-start-1 md:col-start-2 md:col-span-2 bg-slate-300 shadow-lg rounded-md py-5 px-6" style={{ backgroundColor: '#34353a' }}>
            <p className="text-xs text-gray-300 text-center mb-3 font-semibold font-sans tracking-widest">{props.post ? props.post.categories.toUpperCase() : null}</p>
            <p className="text-4xl text-white text-center font-sans font-medium subpixel-antialiased">{props.post ? props.post.title : null}</p>
            <p className="text-sm text-gray-400 text-center italic font-mono font-medium subpixel-antialiased mt-4">{props.post ? props.post.desc : null}</p>
            <p className="text-center border border-gray-500 text-center mx-auto mt-5" style={{ width: '50px' }}></p>
            <p className="text-xs text-gray-500 text-center font-mono font-medium subpixel-antialiased mt-4">By Daniel Kamasi on {date.toDateString()}</p>
          </div>
        )}
      </div>
    </div>
  );
};
