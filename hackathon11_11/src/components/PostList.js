import React from "react";
import Post from "./Post";
import CommentModal from "./Modal";
import "../assets/function.png";
import "../assets/variable.png";

function PostList() {
  const mockPost = [
    {
      title: "How to write a function",
      text: "A JavaScript function is a block of code designed to perform a particular task.A JavaScript function is executed when something invokes it (calls it).",
      files: ["https://miro.medium.com/max/1400/1*5NVJBxAp6J1KtAy0BuCAxg.png"],
      // comments: [],
    },
    {
      title: "How to declare a variable",
      text: "Always declare JavaScript variables with var,let, or const. The var keyword is used in all JavaScript code from 1995 to 2015. The let and const keywords were added to JavaScript in 2015. If you want your code to run in older browsers, you must use var.",
      files: ["https://miro.medium.com/max/1400/1*FczU-Hr3aUOne9pDIJfkVw.png"],
    },
  ];
  //   console.log({ liItems });
  return (
    <ul className="todo-list">
      {mockPost.map(function (item, index) {
        return (
          <>
            <Post
              key={index}
              postText={item.text}
              postTitle={item.title}
              postFiles={item.files}
            />
          </>
        );
        /* onClick={onClick} */
      })}
    </ul>
  );
}

export default PostList;
