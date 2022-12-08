import React from 'react';

import { HiOutlineChevronUp } from 'react-icons/hi';

const AddDark = () => {
  return (
    <div className="bg-white  p-8 mt-6 rounded-lg lg:flex items-center justify-between ">
      <div className="flex items-start gap-10 ">
        <div className="bg-darkLight w-max px-4 py-3 rounded-lg md:block hidden">
          <HiOutlineChevronUp className="text-tertiary" />
          <h5 className="font-extrabold text-primary">99</h5>
        </div>
        <div>
          <h3 className="font-bold text-primary">Add a dark theme option</h3>
          <h6 className="text-gray-500 md:text-base text-sm">
            It would help people with light sensitivities and who prefer dark
            mode.
          </h6>
          <button className="text-sm lg:text-base text-tertiary font-semibold bg-darkLight px-4 py-1 mt-3 rounded-lg">
            Feature
          </button>
        </div>
      </div>
      <div className="flex items-center justify-between mt-4">
        <div className="bg-darkLight w-max  rounded-lg block md:hidden">
          <div className="flex px-4 py-3 =">
            <HiOutlineChevronUp className="text-tertiary" />
            <h5 className="font-extrabold text-primary">99</h5>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <svg
            className="block md:hidden"
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="16"
            fill="none"
          >
            <path
              fill="#CDD2EE"
              d="M2.62 16H1.346l.902-.91c.486-.491.79-1.13.872-1.823C1.036 11.887 0 9.89 0 7.794 0 3.928 3.52 0 9.03 0 14.87 0 18 3.615 18 7.455c0 3.866-3.164 7.478-8.97 7.478-1.016 0-2.078-.137-3.025-.388A4.705 4.705 0 0 1 2.62 16Z"
            />
          </svg>
          <h6 className="text-primary font-bold block md:hidden">4</h6>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <svg
          className="md:block hidden"
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="16"
          fill="none"
        >
          <path
            fill="#CDD2EE"
            d="M2.62 16H1.346l.902-.91c.486-.491.79-1.13.872-1.823C1.036 11.887 0 9.89 0 7.794 0 3.928 3.52 0 9.03 0 14.87 0 18 3.615 18 7.455c0 3.866-3.164 7.478-8.97 7.478-1.016 0-2.078-.137-3.025-.388A4.705 4.705 0 0 1 2.62 16Z"
          />
        </svg>
        <h6 className="text-primary font-bold md:block hidden">4</h6>
      </div>
    </div>
  );
};

export default AddDark;
