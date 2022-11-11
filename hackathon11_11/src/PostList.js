import React from "react";
import Post from "./Post";

function PostList() {
  const mockPost = [
    {
      title: "How to function",
      text: "loren ipsium",
      files: [
        "blob:http://localhost:3000/73b12e76-c828-42b0-9007-75336cbccf90",
      ],
      // comments: [],
    },
    {
      title: "How to declare a variable",
      text: "ez pz lemon sqeezy",
      files: [
        "blob:http://localhost:3000/73b12e76-c828-42b0-9007-75336cbccf90",
      ],
    },
  ];
  //   console.log({ liItems });
  return (
    <ul className='todo-list'>
      {mockPost.map(function (item, index) {
        return (
          <Post
            key={index}
            postText={item.text}
            postTitle={item.title}
            postFiles={item.files}
          />
        );
        /* onClick={onClick} */
      })}
    </ul>
  );
}

export default PostList;
