import React from 'react';

import Link from 'next/link';

import { HiOutlineChevronLeft } from 'react-icons/hi';

const RoadNavbar = () => {
  return (
    <div className="bg-primary px-8 py-7 rounded-xl flex justify-between items-center">
      <div>
        <Link href="/">
          <button className="flex items-center font-bold text-white text-sm gap-2">
            <span className="text-white">
              <HiOutlineChevronLeft />
            </span>
            Go Back
          </button>
        </Link>

        <div className="mt-4 text-white">
          <h1>Roadmap</h1>
        </div>
      </div>
      <div>
        <button className="button-1">+ Add Feedback</button>
      </div>
    </div>
  );
};

export default RoadNavbar;
