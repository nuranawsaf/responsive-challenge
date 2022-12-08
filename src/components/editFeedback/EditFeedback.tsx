import React from 'react';

import Link from 'next/link';

import { HiOutlineChevronLeft } from 'react-icons/hi';

const EditFeedback = () => {
  return (
    <div className=" my-10 2xl:h-screen lg:flex justify-center  mx-6">
      <div>
        <div>
          <Link href="/feedbackdetail">
            <button className="flex items-center font-bold text-gray-500 gap-2">
              <span className="text-tertiary">
                <HiOutlineChevronLeft />
              </span>
              Go Back
            </button>
          </Link>
        </div>
        <div className=" mt-16 relative bg-white rounded-xl px-10 pt-12 lg:w-[34rem] text-primary">
          <div className="w-max  bg-gradient-radial rounded-full px-4 py-4 absolute -top-7">
            <h4 className="font-extrabold text-white text-3xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
              >
                <path
                  fill="#fff"
                  fill-rule="evenodd"
                  d="M13.082 3.48 16.832 0l6.513 6.272-3.548 3.68-6.715-6.471ZM0 23.596c.92-3.942 3.487-14.02 3.487-14.02l8.203-4.821 6.83 6.396-5.218 7.82L.313 24l6.157-5.79c1.043.39 2.516.038 3.312-.836a2.818 2.818 0 0 0-.177-3.983c-1.149-1.05-3.02-1.05-4.071.098-.783.855-1.053 2.365-.605 3.36L0 23.596Z"
                  clip-rule="evenodd"
                />
              </svg>
            </h4>
          </div>
          <div>
            <h1 className="font-bold text-primary">
              Editing ‘Add a dark theme option’
            </h1>
            <h4 className="mt-10 font-bold text-primary">Feedback Title</h4>
            <h4 className="font-normal mb-4">
              Add a short, descreiptive headline
            </h4>
            <input
              type="text"
              placeholder="Please add a dark theme option"
              className="
                    placeholder-primary
                    text-sm
                        form-control
                        block
                        w-full
                        px-3
                        py-3
                        font-normal
                        text-primary
                        bg-darkLight bg-clip-padding
                        border-none
                        rounded-lg
                        transition
                        ease-in-out
                        m-0
                        focus:text-primary   focus:outline-none
                    "
              id="exampleFormControlInput1"
            />
          </div>

          <div>
            <h4 className="mt-6 font-bold text-primary">Category</h4>
            <label className="block mb-4     ">
              <h4 className="font-normal text-primary">
                Choose a category for your feedback
              </h4>
            </label>
            <select
              id="countries"
              className=" bg-darkLight text-primary font-medium  border-none  text-sm rounded-lg  block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
            >
              <option selected>Feature</option>
              <option value="US">UI</option>
              <option value="CA">UX</option>
              <option value="FR">Enhancement</option>
              <option value="DE">Bug</option>
            </select>
          </div>

          <div>
            <h4 className="mt-6 font-bold text-primary ">Update Status</h4>
            <label className="block mb-4     ">
              <h4 className="font-normal text-primary">
                Change feedback state
              </h4>
            </label>
            <select
              id="countries"
              className=" bg-darkLight text-primary font-medium  border-none  text-sm rounded-lg  block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
            >
              <option value="US">Suggestion</option>
              <option selected>Planned</option>
              <option value="FR">In-Progress</option>
              <option value="DE">Live</option>
            </select>
          </div>

          <div>
            <h4 className="mt-6 font-bold text-primary">Feedback Detail</h4>
            <h4 className="font-normal mb-4">
              Include any specific comments on what should be improved, added,
              etc.
            </h4>
            <input
              type="text"
              className="
    
    form-control
    block
    w-full
    px-3
    py-9
    text-sm
    font-normal
    text-gray-700
    bg-darkLight bg-clip-padding
    border-none
    rounded-lg
    transition
    ease-in-out
    m-0
    focus:text-gray-700   focus:outline-none
    placeholder-primary
  "
              placeholder="It would help people with light sensitivities and who prefer dark 
  mode."
              id="exampleFormControlInput1"
            />
          </div>

          <div className="mt-8 pb-10  lg:flex justify-between">
            <div>
              <button className="button-4  w-full">Delete</button>
            </div>
            <div>
              <button className="button-3 w-full my-4 lg:my-0 lg:w-max">
                Cancel
              </button>
              <Link href="/newfeedback">
                <button className="button-1 lg:ml-4 w-full lg:w-max">
                  Add Feedback
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditFeedback;
