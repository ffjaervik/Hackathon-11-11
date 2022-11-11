import React from "react";

const Channels = () => {
  return (
    <div className="flex flex-col align h-screen w-max border border-gray-800 items-center">
      <div className="px-10 py-10 flex justify-center content-center border border-gray-900">
        <div className="h-32 w-32 text-center bg-gray-600"> LOGO </div>
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
  );
};

export default Channels;
