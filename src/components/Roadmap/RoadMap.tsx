import React from 'react';

import RoadNavbar from './RoadNavbar';
import { inprogressdata, livedata, plandata } from './roadmap-data';

const RoadMap = () => {
  return (
    <div className="wrapper hidden lg:block">
      <div>
        <RoadNavbar />
      </div>

      <div className="grid grid-cols-3 gap-8 mt-12">
        <div className="">
          <h3 className="text-primary font-bold">Planned (2)</h3>
          <h6 className="text-gray-500">Ideas prioritized for research</h6>

          <div>
            {plandata.map((item) => {
              return (
                <div className="bg-white  my-8 px-8 py-8 rounded-lg border-t-[6px] border-orangenormal">
                  <div className="mb-3 flex items-center gap-4">
                    <h6 className="bg-orangenormal rounded-full w-2 h-2"></h6>
                    <h6 className="text-gray-500">Planned</h6>
                  </div>
                  <div>
                    <h3 className="text-primary font-bold">{item.titile}</h3>
                    <h6 className="text-gray-500">{item.info}</h6>
                    <button className="bg-darkLight my-4 text-tertiary font-semibold py-1 rounded-lg px-4">
                      {item.btn}
                    </button>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 bg-darkLight w-max px-4 py-2 rounded-lg">
                        <item.numberIcon />
                        <h4 className="font-bold text-primary">
                          {item.number}
                        </h4>
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
        <div className="">
          <h3 className="text-primary font-bold">In-Progress (3)</h3>
          <h6 className="text-gray-500">Currently being developed</h6>

          <div>
            {inprogressdata.map((item) => {
              return (
                <div className="bg-white  my-8 px-8 py-8 rounded-lg border-t-[6px] border-secondary ">
                  <div className="mb-3 flex items-center gap-4">
                    <h6 className="bg-secondary rounded-full w-2 h-2"></h6>
                    <h6 className="text-gray-500">In Progress</h6>
                  </div>
                  <div>
                    <h3 className="text-primary font-bold">{item.titile}</h3>
                    <h6 className="text-gray-500">{item.info}</h6>
                    <button className="bg-darkLight my-4 text-tertiary font-semibold py-1 rounded-lg px-4">
                      {item.btn}
                    </button>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 bg-darkLight w-max px-4 py-2 rounded-lg">
                        <item.numberIcon />
                        <h4 className="font-bold text-primary">
                          {item.number}
                        </h4>
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
        <div className="">
          <h3 className="text-primary font-bold">Live (1)</h3>
          <h6 className="text-gray-500">Released features</h6>

          <div>
            {livedata.map((item) => {
              return (
                <div className="bg-white  my-8 px-8 py-8 rounded-lg border-t-[6px] border-skyBlue">
                  <div className="mb-3 flex items-center gap-4">
                    <h6 className="bg-skyBlue rounded-full w-2 h-2"></h6>
                    <h6 className="text-gray-500">Live</h6>
                  </div>
                  <div>
                    <h3 className="text-primary font-bold">{item.titile}</h3>
                    <h6 className="text-gray-500">{item.info}</h6>
                    <button className="bg-darkLight my-4 text-tertiary font-semibold py-1 rounded-lg px-4">
                      {item.btn}
                    </button>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 bg-darkLight w-max px-4 py-2 rounded-lg">
                        <item.numberIcon />
                        <h4 className="font-bold text-primary">
                          {item.number}
                        </h4>
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
      </div>
    </div>
  );
};

export default RoadMap;
