import React from 'react';

import clsx from 'clsx';

import { commentsdata } from './commentsdata';

const Comments = () => {
  return (
    <div className="bg-white p-6 lg:p-8 rounded-lg">
      <h3 className="font-bold text-primary">4 Comments</h3>

      <div>
        {commentsdata.map((item) => {
          return (
            <div
              className={clsx(
                '',
                item.title == 'Elijah Moss' && 'py-8 border-b',
                item.title == 'James Skinner' && 'py-8 '
              )}
            >
              <div>
                <div>
                  <div className="flex items-start lg:gap-9 gap-4 w-full ">
                    <div className="w-10 h-10 rounded-full">
                      <img
                        className={clsx(
                          'w-full h-full rounded-full overflow-hidden object-cover '
                        )}
                        src={item.img}
                        alt=""
                      />
                    </div>
                    <div className="flex-1 ">
                      <div className="flex items-center justify-between  w-full ">
                        <div>
                          <h4 className="font-bold text-primary">
                            {item.title}
                          </h4>
                          <h4 className="font-medium text-gray-500 ">
                            {item.username}
                          </h4>
                        </div>
                        <div>
                          <h5 className="font-bold text-tertiary">Reply</h5>
                        </div>
                      </div>

                      <div className="hidden lg:block">
                        <p className="text-gray-500 text-[15px]">{item.info}</p>
                      </div>
                    </div>
                  </div>

                  <div className="md:hidden block mt-4">
                    <p className="text-gray-500 text-[15px]">{item.info}</p>
                  </div>
                </div>

                <div className=" lg:pl-10 pl-4 relative ">
                  {item.comment.length > 0 &&
                    item.comment.map((item, index) => {
                      return (
                        <div>
                          <div className=" flex items-start lg:gap-9 gap-4 w-full mt-9  lg:before:absolute lg:before:-top-20 lg:before:border-l lg:before:left-5 lg:before:h-full">
                            <div className="w-10 h-10 rounded-full ">
                              <img
                                className={clsx(
                                  'w-full h-full rounded-full overflow-hidden object-cover '
                                )}
                                src={item.img}
                                alt=""
                              />
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center justify-between  w-full">
                                <div>
                                  <h4 className="font-bold text-primary">
                                    {item.title}
                                  </h4>
                                  <h4 className="font-medium text-gray-500 ">
                                    {item.username}
                                  </h4>
                                </div>
                                <div>
                                  <h5 className="font-bold text-tertiary">
                                    Reply
                                  </h5>
                                </div>
                              </div>

                              <div className="hidden lg:block">
                                <p className="text-gray-500 text-[15px]">
                                  <span className="text-secondary mr-2 font-bold">
                                    {item.mentionUser}
                                  </span>
                                  {item.info}
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="block lg:hidden mt-4">
                            <p className="text-gray-500 text-[15px]">
                              <span className="text-secondary mr-2 font-bold">
                                {item.mentionUser}
                              </span>
                              {item.info}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Comments;

{
  /* <div className="sb relative">
      <div className="absolute top-0 bottom-0 left-0 right-0">
        <img className="w-full" src="/assets/images/asian-girl.jpg" alt="" />
      </div>
      <div className="relative z-10">
        <h1>hello bhugi</h1>
      </div>
    </div> */
}
