import React from 'react';

import Link from 'next/link';
import { useRouter } from 'next/router';

import clsx from 'clsx';
import { GiHamburgerMenu } from 'react-icons/gi';

import { navdata } from '../navdata';
import { featuredata, roadmapdata } from './sidebar-data';

export const SideBar = () => {
  const router = useRouter();

  return (
    <div className="my-10 lg:my-0 md:grid grid-cols-3 lg:grid lg:grid-cols-1 items-center gap-6 lg:gap-0 md:ml-6 lg:ml-0">
      <div className=" px-6 pt-[62px] pb-7 text-white bg-gradient-radial relative rounded-xl h-full">
        <div className="absolute bottom-0 right-0">
          <svg
            className="rounded-xl  "
            xmlns="http://www.w3.org/2000/svg"
            width="137"
            height="137"
            fill="none"
          >
            <g filter="url(#a)">
              <circle cx="186.5" cy="137.5" r="96" fill="#FBB57A" />
            </g>
            <defs>
              <filter
                id="a"
                width="371.407"
                height="371.407"
                x=".797"
                y="-48.203"
                color-interpolation-filters="sRGB"
                filterUnits="userSpaceOnUse"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  result="effect1_foregroundBlur_0_2337"
                  stdDeviation="44.852"
                />
              </filter>
            </defs>
          </svg>
        </div>
        <div className="absolute top-0 left-0">
          <svg
            className="rounded-xl"
            xmlns="http://www.w3.org/2000/svg"
            width="186"
            height="137"
            fill="none"
          >
            <g filter="url(#a)" opacity=".765">
              <circle cx="-.5" cy="-40.5" r="96" fill="#7AD8FB" />
            </g>
            <defs>
              <filter
                id="a"
                width="371.407"
                height="371.407"
                x="-186.203"
                y="-226.203"
                color-interpolation-filters="sRGB"
                filterUnits="userSpaceOnUse"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  result="effect1_foregroundBlur_0_2336"
                  stdDeviation="44.852"
                />
              </filter>
            </defs>
          </svg>
        </div>
        <h2>Frontend Mentor</h2>
        <h4>Feedback Board</h4>
      </div>

      <div className="bg-white lg:mt-6 rounded-xl px-6 pt-6 pb-2 h-full text-tertiary relative   ">
        {featuredata.map((item) => {
          return (
            <>
              <button
                className={clsx(
                  'px-3 lg:px-5 py-1  font-semibold rounded-lg gap-2  mr-4 mb-4 bg-gray-100 text-sm lg:text-base',
                  item.title == 'All' && 'bg-tertiary text-white'
                )}
              >
                {item.title}
              </button>
            </>
          );
        })}
      </div>

      <div className="lg:mt-6 bg-white rounded-xl p-4 lg:p-6">
        <div className=" flex items-center justify-between">
          <h3 className="text-primary font-bold">Roadmap</h3>
          <Link href="/roadmap">
            <h5 className="text-tertiary font-medium underline cursor-pointer">
              View
            </h5>
          </Link>
        </div>

        <div>
          {roadmapdata.map((item) => {
            return (
              <div>
                <div className="flex items-center justify-between pt-4">
                  <div className="flex items-center gap-4">
                    <div
                      className={clsx(
                        item.title == 'Planned' &&
                          'bg-orangenormal rounded-full w-2 h-2',
                        item.title == 'In-Progress' &&
                          'bg-secondary rounded-full w-2 h-2',
                        item.title == 'Live' &&
                          'bg-skyBlue rounded-full w-2 h-2'
                      )}
                    ></div>
                    <h6 className="text-gray-600">{item.title}</h6>
                  </div>
                  <h6 className="font-bold text-gray-600">{item.count}</h6>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* <div className="px-8 py-4 flex items-center justify-between ">
        <h1 className="uppercase text-primary text-4xl font-bold tracking-widest">
          food
          <span className="text-tertiary">y</span>
        </h1>
        <GiHamburgerMenu className="text-secondary" />
      </div>

      <div className="relative max-w-xs  w-full mt-4">
        {navdata.map((item) => {
          const isActive = router.pathname == item.href;
          return (
            <div
              key={item.id}
              className={clsx(
                'flex items-center gap-4 py-4  px-8',
                isActive
                  ? 'bg-lightGreen text-primary mx-4 px-4 font-medium'
                  : 'text-secondary'
              )}
            >
              <item.icon />
              <a href={item.href}>{item.title}</a>
            </div>
          );
        })}
      </div> */}
    </div>
  );
};
