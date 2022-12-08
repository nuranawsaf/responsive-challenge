import React from 'react';

const AddComment = () => {
  return (
    <div className="bg-white rounded-lg lg:p-8 p-6">
      <h3 className="font-bold text-primary mb-10">Add Comment</h3>
      <input
        type="text"
        id="last_name"
        className="bg-darkLight border-none px-8 pt-6 pb-10 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Type your comment here"
        required
      />

      <div className=" flex items-center justify-between mt-6">
        <h6 className="text-sm lg:text-[15px]  text-gray-500 font-medium">
          250 Characters left
        </h6>
        <button className="button-1 ">Post Comment</button>
      </div>
    </div>
  );
};

export default AddComment;
