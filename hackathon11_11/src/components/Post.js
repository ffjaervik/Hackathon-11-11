import React from "react";
import CommentModal from "./Modal";

function Post({ postText, postTitle, postFiles }) {
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

                <CommentModal />
            </div>
            <br />
        </>
    );
}

export default Post;
