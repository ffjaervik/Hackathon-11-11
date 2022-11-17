// import { useEffect } from "react";
import Post from "./Post";

// import CommentModal from "./Modal";
import "../assets/function.png";
import "../assets/variable.png";

function PostList({posts}) {

    // useEffect(()=>{})

    return (
        <ul className="todo-list">
            {posts.map(function (item, index) {
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
