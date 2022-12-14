import React from "react";
import CommentModal from "./Modal";

const Channels = () => {
  const handleClick = () => {
    return <CommentModal />;
  };

  return (
    <div>
      <div className="flex flex-col align h-full w-max border border-gray-800 items-center">
        <div className="px-10 py-10 flex justify-center content-center border border-gray-900">
          <div className="h-32 w-32 text-white text-center bg-gray-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-28 h-28"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
              />
            </svg>
          </div>
        </div>
        <div className="border-b-2 border-gray-900">
          <h3>Channels</h3>
        </div>

        <br />

        <ul>
          <li>#Jobs</li>
          <li>#Interview Prep</li>
          <li>#JavaScript</li>
          <li>#CSS</li>
        </ul>
      </div>
    </div>
  );
};

export default Channels;
