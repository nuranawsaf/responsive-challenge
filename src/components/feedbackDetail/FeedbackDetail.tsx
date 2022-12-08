import React from 'react';

import Link from 'next/link';

import { HiOutlineChevronLeft } from 'react-icons/hi';

import Comments from './4comments/Comments';
import AddDark from './99Adddark/AddDark';
import AddComment from './addcomment/AddComment';

const FeedbackDetail = () => {
  return (
    <div className="wrapper2 mt-8  px-6 lg:px-0">
      <div className="flex justify-between items-center">
        <Link href="/">
          <button className="flex items-center font-bold text-gray-500 gap-2">
            <span className="text-tertiary">
              <HiOutlineChevronLeft />
            </span>
            Go Back
          </button>
        </Link>
        <Link href="/editfeedback">
          <button className="button-2">Edit Feedback</button>
        </Link>
      </div>

      <div className="">
        <AddDark />
      </div>

      <div className="mt-6">
        <Comments />
      </div>

      <div className="my-6">
        <AddComment />
      </div>
    </div>
  );
};

export default FeedbackDetail;
