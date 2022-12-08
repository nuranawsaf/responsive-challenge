import React from 'react';

import Link from 'next/link';

import { GoPlus } from 'react-icons/go';
import { HiOutlineChevronLeft } from 'react-icons/hi';

const NewFeedback = () => {
  return (
    <div className="mx-6 my-10 2xl:h-screen lg:flex justify-center">
      <div>
        <div>
          <Link href="/">
            <button className="flex items-center font-bold text-gray-500 gap-2">
              <span className="text-tertiary">
                <HiOutlineChevronLeft />
              </span>
              Go Back
            </button>
          </Link>
        </div>
        <div className=" mt-16 relative bg-white rounded-xl px-10 pt-12 lg:w-[34rem] text-primary">
          <div className="w-max  bg-gradient-radial rounded-full px-5 py-3 absolute -top-7">
            <h4 className="font-extrabold text-white text-3xl">+</h4>
          </div>
          <div>
            <h1 className="font-bold text-primary">Create New Feedback</h1>
            <h4 className="mt-10 font-bold text-primary">Feedback Title</h4>
            <h4 className="font-normal mb-4">
              Add a short, descreiptive headline
            </h4>
            <input
              type="text"
              className="
            
        
        form-control
        block
        w-full
        px-3
        py-3
        text-base
        font-normal
        text-gray-700
        bg-darkLight bg-clip-padding
        border-none
        rounded-lg
        transition
        ease-in-out
        m-0
        focus:text-gray-700   focus:outline-none
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
              className=" bg-darkLight text-primary font-medium  border-none  text-sm rounded-lg  block w-full px-3 py-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
            >
              <option selected>Feature</option>
              <option value="US">UI</option>
              <option value="CA">UX</option>
              <option value="FR">Enhancement</option>
              <option value="DE">Bug</option>
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
        text-base
        font-normal
        text-gray-700
        bg-darkLight bg-clip-padding
        border-none
        rounded-lg
        transition
        ease-in-out
        m-0
        focus:text-gray-700   focus:outline-none
      "
              id="exampleFormControlInput1"
            />
          </div>

          <div className="hidden md:block">
            <div className="mt-8 pb-10  flex justify-end">
              <button className="button-3">Cancel</button>
              <button className="button-1 ml-4">Add Feedback</button>
            </div>
          </div>

          <div className="block md:hidden">
            <div className="mt-8 pb-10 flex flex-col">
              <button className="button-1  mb-4">Add Feedback</button>
              <button className="button-3">Cancel</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewFeedback;
