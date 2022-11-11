import { useState } from "react";
export default function CommentForm() {
    const [comment, setComment] = useState({ text: "", file: {} });
    function handleFileChange(event) {
        setComment({
            ...comment,
            file: URL.createObjectURL(event.target.files[0]),
        });
        console.log(event.target.files[0]);
    }
    function handleSubmit() {}
    return (
        <div className="border-solid border-2 border-sky-500 bg-slate-900 p-8">
            <form onSubmit={handleSubmit} className="w-full">
                <textarea
                    rows="4"
                    className="text-white bg-slate-600 mb-8 w-full px-2"
                    placeholder="Enter a comment here ..."
                    value={comment.text}
                    onChange={(e) => {
                        setComment({ ...comment, text: e.target.value });
                        console.log("comment: ", comment);
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
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
}
