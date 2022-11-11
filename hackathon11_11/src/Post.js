import React from "react";

function Post({ postText, postTitle, postFiles, onClick }) {
  return (
    <div className='p-5'>
      <h2 className='text-4xl'>{postTitle}</h2>
      <p className='py-4'>{postText}</p>
      {postFiles.map(function (item, index) {
        return <img src={item} alt='postImages' />;
      })}
    </div>
  );
}

export default Post;
