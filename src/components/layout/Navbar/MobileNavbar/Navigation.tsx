import * as React from 'react';

import Link from 'next/link';

import clsx from 'clsx';
import { motion } from 'framer-motion';

import { featuredata, roadmapdata } from '../DasktopNavbar/sidebar-data';
import { navdata } from '../navdata';
import MenuItem from './MenuItem';

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const Navigation: React.FC = () => {
  return (
    <motion.ul
      className="absolute top-[4.8rem] right-0 w-[17rem]  h-screen z-50 px-8  bg-darkLight"
      variants={variants}
    >
      <Link href="/">
        <div className="cursor-pointer flex items-center gap-x-2 py-4">
          {/* <img
            src="https://res.cloudinary.com/softenin/image/upload/v1663310137/nuren/logo_stuvqc.png"
            alt="Black Rectangular Shape"
          /> */}
        </div>
      </Link>

      <div className="bg-white  rounded-xl px-6 pt-6 pb-2 flex flex-wrap text-tertiary relative  ">
        {featuredata.map((item) => (
          <MenuItem nav={item} />
        ))}
      </div>

      <div className="mt-6 bg-white rounded-xl p-6">
        <div className=" flex items-center justify-between">
          <h3 className="text-primary font-bold text-lg">Roadmap</h3>
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
    </motion.ul>
  );
};

export default Navigation;
