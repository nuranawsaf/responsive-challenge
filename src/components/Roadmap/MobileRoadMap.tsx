import React, { useState } from 'react';

import clsx from 'clsx';

import { mobileRoadMapData } from './roadmap-data';

const MobileRoadMap = () => {
  const namesSet = new Set(mobileRoadMapData.map((item) => item.category));

  const array = Array.from(namesSet);
  console.log(array);

  const categories = mobileRoadMapData.map((item) => item.category);
  const [active, setActive] = useState(array[0]);

  return (
    <div className="sm:hidden block ">
      <div className="">
        <div className=" flex justify-between text-navy px-6 border-b pt-6 ">
          {array.map((item) => {
            return (
              <div>
                <div
                  className={clsx(
                    item == active
                      ? 'Planned (2)' &&
                          'text-primary border-b-4 border-primary pb-4 font-bold'
                      : 'text-gray-400 font-bold'
                    // item == active
                    //   ? 'In-Progress (3)' &&
                    //       'text-primary font-bold border-b-4 border-secondary pb-4 '
                    //   : 'text-gray-400 font-bold'
                  )}
                  onClick={() => {
                    setActive(item);
                  }}
                >
                  {item}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="">
        {mobileRoadMapData
          .filter((e) => e.category == active)
          .map((item, index) => {
            return (
              <div
                className={clsx(
                  'bg-white mx-6 my-8 px-8 py-8 rounded-lg  ',
                  item.head == 'Planned' &&
                    'border-t-[6px] border-orangenormal',
                  item.head == 'In Progress' &&
                    'border-t-[6px] border-secondary',
                  item.head == 'Live' && 'border-t-[6px] border-skyBlue'
                )}
              >
                <div className="mb-3 flex items-center gap-4">
                  <h6
                    className={clsx(
                      ' rounded-full w-2 h-2',
                      item.head == 'Planned' && 'bg-orangenormal',
                      item.head == 'In Progress' && 'bg-secondary',
                      item.head == 'Live' && 'bg-skyBlue'
                    )}
                  ></h6>
                  <h6 className="text-gray-500">{item.head}</h6>
                </div>
                <div>
                  <h3 className="text-primary font-bold">{item.titile}</h3>
                  <h6 className="text-gray-500 text-sm">{item.info}</h6>
                  <button className="bg-darkLight text-sm my-4 text-tertiary font-semibold py-1 rounded-lg px-4">
                    {item.btn}
                  </button>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 bg-darkLight w-max px-4 py-2 rounded-lg">
                      <item.numberIcon className="text-tertiary" />
                      <h4 className="font-bold text-primary">{item.number}</h4>
                    </div>
                    <div className="flex items-center gap-3">
                      <svg
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
                      <h6 className="font-bold text-primary">{item.count}</h6>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default MobileRoadMap;
