import React from "react";
import Post from "./Post";

function PostList() {
    let mockPosts = JSON.parse(localStorage.getItem("posts"));
    //   console.log({ liItems });
    return (
        <ul className="todo-list">
            {mockPosts.map(function (item, index) {
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
