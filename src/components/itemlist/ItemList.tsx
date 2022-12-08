import React from 'react';

import Link from 'next/link';

import { listitemdata } from './itemlist-data';

const ItemList = () => {
  return (
    <div className=" py-6">
      <div className="">
        {listitemdata.map((item) => {
          return (
            <div className=" bg-white mx-6 lg:mx-0 my-4 lg:my-6 p-8 rounded-xl md:flex justify-between items-center">
              <div className="lg:flex items-start gap-10 ">
                <div className="">
                  <h3 className="text-primary font-bold">{item.titile}</h3>
                  <h6 className="text-gray-600 py-2 text-[13px] ">
                    {item.info}
                  </h6>
                  <div>
                    <Link href="/feedbackdetail">
                      <button className="bg-gray-100  text-tertiary font-semibold px-4 py-1 rounded-lg text-[14px] lg:text-base ">
                        {item.btn}
                      </button>
                    </Link>
                  </div>
                </div>

                <div className=" w-10 py-2 rounded-lg text-center bg-gray-100 lg:order-first hidden md:block">
                  <item.numberIcon className=" w-full" />
                  <h5 className="font-bold text-primary">{item.number}</h5>
                </div>
              </div>

              <div className="flex items-center justify-between mt-4 ">
                <div className=" rounded-lg text-center bg-gray-100 lg:order-first block md:hidden">
                  <div className="flex items-center py-2 px-3">
                    <item.numberIcon className=" w-full" />
                    <h5 className="font-bold text-primary">{item.number}</h5>
                  </div>
                </div>

                <div className="block md:hidden">
                  <div className="flex items-center gap-2">
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

              <div className="hidden md:block">
                <div className="flex items-center gap-2">
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
          );
        })}
      </div>
    </div>
  );
};

export default ItemList;
