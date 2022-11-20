import Post from "./Post";

import "../assets/function.png";
import "../assets/variable.png";

function PostList({ posts }) {
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
                            postComments={item.comments}
                        />
                    </>
                );
            })}
        </ul>
    );
}

export default PostList;
