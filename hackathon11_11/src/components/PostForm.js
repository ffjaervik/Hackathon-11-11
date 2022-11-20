import { useState } from "react";
export default function PostForm({ posts, setPosts }) {
    const [post, setPost] = useState({ text: "", files: [], title: "" });
    function handleFileChange(event) {
        setPost({
            ...post,
            files: [...post.files, URL.createObjectURL(event.target.files[0])],
        });
        console.log(event.target.files[0]);
    }
    function handleSubmit(e) {
        e.preventDefault();
        let newPost = post;
        console.log("Post to be added:", newPost);
        let newLocalPosts = [...posts, newPost];
        localStorage.setItem("posts", JSON.stringify(newLocalPosts));
        setPosts(newLocalPosts);
    }

    return (
        <div className="border-solid border-2 border-sky-500 bg-slate-900 p-8">
            <form className="w-full">
                <input
                    type="text"
                    placeholder="title"
                    value={post.title}
                    onChange={(e) => {
                        setPost({ ...post, title: e.target.value });
                    }}
                />
                <textarea
                    rows="4"
                    className="text-white bg-slate-600 mb-8 w-full px-2"
                    placeholder="Enter a comment here ..."
                    value={post.text}
                    onChange={(e) => {
                        setPost({ ...post, text: e.target.value });
                        console.log("comment: ", post);
                    }}
                ></textarea>
                <div className="flex justify-between">
                    <div>
                        {/* <label htmlFor="file">
                        Choose file
                            <button onClick={()=>{document.getElementById("file").click()}}>+ Add file</button>
                        </label> */}
                        <input
                            // className="hidden"
                            type="file"
                            id="file"
                            name="file"
                            multiple
                            onChange={handleFileChange}
                        ></input>
                    </div>
                    <button
                        type="submit"
                        className="text-white"
                        onClick={(e) => {
                            handleSubmit(e);
                        }}
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
}
