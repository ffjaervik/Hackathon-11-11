import {useState} from "react";
import CommentModal from "./Modal";

function Post({ postText, postTitle, postFiles,postComments }) {
    const [comments,setComments]=useState(postComments)
    return (
        <>
            <div className="p-5 bg-gray-300">
                <h2 className="text-4xl">{postTitle}</h2>
                <p className="py-4">{postText}</p>
                {postFiles.map(function (item, index) {
                    return (
                        <>
                            {item ? (
                                <>
                                    <img
                                        className="max-w-xl"
                                        src={item}
                                        alt="postImages"
                                    />
                                </>
                            ) : (
                                <></>
                            )}
                        </>
                    );
                })}

                <CommentModal comments={comments} setComments={setComments}/>
            </div>
            <br />
        </>
    );
}

export default Post;
